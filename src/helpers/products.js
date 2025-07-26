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
        product.categories.forEach((category) => {
            if (!productFilters.categories.includes(category)) {
                productFilters.categories.push(category)
            }
        });

        if (!productFilters.colors.includes(product.color)) {
            productFilters.colors.push(product.color)
        }

        if (product.price > productFilters.prices.max) {
            productFilters.prices.max = product.price
        }
    });
    productFilters.categories.sort((a, b) => a.localeCompare(b));
    productFilters.colors.sort((a, b) => a.localeCompare(b));
    return productFilters;
}

export const filterProducts = (products, filtersApplied) => {
    let filteredProducts = filtersApplied.category === "All"
        ? [...products]
        : products.filter((product) => product.categories.includes(filtersApplied.category));

    if (filtersApplied.prices) {
        const {min, max} = filtersApplied.prices;
        filteredProducts = filteredProducts.filter((product) => (product.price >= min && product.price <= max))
    }

    if (filtersApplied.colors?.length > 0) {
        filteredProducts = filteredProducts.filter((product) => filtersApplied.colors.includes(product.color));
    }

    return filteredProducts;
}
