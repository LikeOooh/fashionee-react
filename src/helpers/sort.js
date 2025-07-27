export const sortProducts = (products, sortType) => {
    const productsSorted = [...products];
    switch (sortType) {
        case "NAME_AZ":
            productsSorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "NAME_ZA":
            productsSorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "PRICE_ASC":
            productsSorted.sort((a, b) => a.price - b.price);
            break;
        case "PRICE_DESC":
            productsSorted.sort((a, b) => b.price - a.price);
            break;
    }
    return productsSorted;
}