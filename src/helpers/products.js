import data from '../../data/products.json';

export const filters = () => {
    const {products} = data;
    const productFilters = {
        categories: [],
        prices: {
            min: 0,
            max: 0
        },
        colors: []
    };
    products.forEach(product => {
        product.categories.forEach(item => !productFilters.categories.includes(item) && productFilters.categories.push(item));
        !productFilters.colors.includes(product.color) && productFilters.colors.push(product.color);
        (product.price > productFilters.prices.max) && (productFilters.prices.max = product.price);
    });
    productFilters.categories.sort((a, b) => a.localeCompare(b));
    productFilters.colors.sort((a, b) => a.localeCompare(b));
    return productFilters
}
