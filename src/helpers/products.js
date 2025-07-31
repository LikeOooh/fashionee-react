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
export const filters = () => {
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
