/**
 * Сортирует товары по указанному критерию
 *
 * @param {Array} products - Массив товаров
 * @param {string} sortType - Тип сортировки:
 *   'NAME_AZ' - по имени (А-Я)
 *   'NAME_ZA' - по имени (Я-А)
 *   'PRICE_ASC' - по цене (сначала дешевле)
 *   'PRICE_DESC' - по цене (сначала дороже)
 * @returns {Array} Новый отсортированный массив
 *
 * @example
 * sortProducts(products, 'PRICE_DESC');
 */
export const sortProducts = (products, sortType) => {
    const productsSorted = [...products];
    switch (sortType) {
        case 'NAME_AZ':
            productsSorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'NAME_ZA':
            productsSorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'PRICE_ASC':
            productsSorted.sort((a, b) => a.price - b.price);
            break;
        case 'PRICE_DESC':
            productsSorted.sort((a, b) => b.price - a.price);
            break;
    }
    return productsSorted;
};
