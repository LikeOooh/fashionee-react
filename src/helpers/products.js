import data from '../../data/products.json';

/**
 * Генерирует объект с фильтрами на основе списка продуктов: категории, цвета и диапазон цен (min/max).
 * Категории и цвета сортируются в алфавитном порядке.
 *
 * @example
 * // Возвращает:
 * // {
 * //   categories: ['Одежда', 'Обувь'],
 * //   prices: { min: 0, max: 10000 },
 * //   colors: ['белый', 'черный']
 * // }
 * filters();
 *
 * @returns {Object} Объект с фильтрами:
 *   - categories {string[]} - Уникальные категории продуктов
 *   - prices {Object} - Минимальная и максимальная цена:
 *     - min {number} - Минимальная цена (всегда 0 в текущей реализации)
 *     - max {number} - Максимальная цена среди продуктов
 *   - colors {string[]} - Уникальные цвета продуктов
 */
export const getFilters = () => {
    const { products } = data;
    const productFilters = {
        categories: [],
        prices: {
            min: 0,
            max: 0,
        },
        colors: [],
    };
    products.forEach((product) => {
        product.categories.forEach((category) => {
            if (!productFilters.categories.includes(category)) {
                productFilters.categories.push(category);
            }
        });

        if (!productFilters.colors.includes(product.color)) {
            productFilters.colors.push(product.color);
        }

        if (product.price > productFilters.prices.max) {
            productFilters.prices.max = product.price;
        }
    });
    productFilters.categories.sort((a, b) => a.localeCompare(b));
    productFilters.colors.sort((a, b) => a.localeCompare(b));
    return productFilters;
};

/**
 * Фильтрует массив товаров по заданным критериям.
 * Поддерживает фильтрацию по категории, ценовому диапазону и цветам.
 *
 * @example
 * // Фильтр по категории
 * filterProducts(products, { category: 'Электроника' });
 *
 * @example
 * // Комбинированные фильтры
 * filterProducts(products, {
 *   category: 'Одежда',
 *   prices: { min: 1000, max: 5000 },
 *   colors: ['красный', 'синий']
 * });
 *
 * @param {Product[]} products - Массив товаров для фильтрации
 * @param {{}} filtersApplied - Параметры фильтрации
 * @returns {Product[]} Отфильтрованный массив товаров
 *
 * @note Фильтрация выполняется последовательно: категория → цена → цвета
 * @note Возвращает все товары при category='All' и отсутствии других фильтров
 * @warning Если filtersApplied не содержит prices или colors, эти фильтры не применяются
 */
export const filterProducts = (products, filtersApplied = {}) => {
    if (!products?.length || !filtersApplied) return [];

    let filteredProducts =
        filtersApplied?.category === 'All'
            ? [...products]
            : products.filter((product) => product?.categories.includes(filtersApplied?.category));

    if (filtersApplied?.prices) {
        const { min, max } = filtersApplied.prices;
        filteredProducts = filteredProducts.filter((product) => product?.price >= min && product?.price <= max);
    }

    if (filtersApplied?.colors?.length > 0) {
        filteredProducts = filteredProducts.filter((product) => filtersApplied?.colors.includes(product?.color));
    }

    return filteredProducts;
};

/**
 * Переключает выбор товара в списке выбранных товаров.
 * Удаляет productId, если он уже есть в списке, или добавляет, если отсутствует.
 *
 * @param {string|number} productId - ID товара для переключения
 * @param {function} setChosenProducts - Функция-сеттер состояния (из useContext)
 * @returns {void} Изменяет состояние напрямую
 *
 * @example
 * // Использование в компоненте:
 * const [chosenProducts, setChosenProducts] = useState([]);
 * changeChosenProducts(123, setChosenProducts);
 */
export const changeChosenProducts = (productId, setChosenProducts) => {
    setChosenProducts((chosenProducts) => {
        const isProductSelected = chosenProducts.includes(productId);
        return isProductSelected ? chosenProducts.filter((item) => item !== productId) : [...chosenProducts, productId];
    });
};

/**
 * Изменяет количество товара в списке заказанных товаров
 * @param {Object} product - Объект товара (обязательные поля: id, price)
 * @param {'increase'|'decrease'} action - Действие: увеличить/уменьшить количество
 * @param {Function} setOrderedProducts - Функция-сеттер состояния заказанных товаров (из useContext)
 * @returns {void} Обновляет состояние orderedProducts
 * @example
 * // Увеличение количества товара
 * changeOrderedProducts(product, 'increase', setOrderedProducts);
 */
export const changeOrderedProducts = (product, action, setOrderedProducts) => {
    if (!product || !product.id || typeof product.price !== 'number') {
        console.error('Invalid product data');
        return;
    }
    setOrderedProducts((orderedProducts) => {
        const newOrderedProducts = [...orderedProducts];
        const productIndex = orderedProducts.findIndex((p) => p.product?.id === product.id);
        if (action === 'increase') {
            if (productIndex >= 0) {
                newOrderedProducts[productIndex] = {
                    ...newOrderedProducts[productIndex],
                    count: newOrderedProducts[productIndex].count + 1,
                    totalPrice: product.price * (newOrderedProducts[productIndex].count + 1),
                };
            } else {
                newOrderedProducts.push({ product: product, count: 1, totalPrice: product.price });
            }
        }
        if (action === 'decrease' && productIndex >= 0) {
            const updatedCount = newOrderedProducts[productIndex].count - 1;
            if (updatedCount > 0) {
                newOrderedProducts[productIndex] = {
                    ...newOrderedProducts[productIndex],
                    count: updatedCount,
                    totalPrice: product.price * updatedCount,
                };
            } else {
                newOrderedProducts.splice(productIndex, 1);
            }
        }
        return newOrderedProducts;
    });
};
