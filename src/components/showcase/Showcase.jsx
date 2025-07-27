import data from '/data/products.json';

import './Showcase.scss';
import {Product} from "../product/Product.jsx";
import {Sidebar} from "../sidebar/Sidebar.jsx";
import {Icon} from "../icon/Icon.jsx";
import {useEffect, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce.jsx";
import {filterProducts, filters} from "../../helpers/products.js";

export function Showcase() {
    const [productsToView, setProductsToView] = useState(data.products);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [prices, setPrices] = useState({min: 0, max: Math.round(filters().prices.max) || 0})
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const productCount = productsToView?.length;

    //применение фильтров и поиск с учетом фильтрации и сортировки
    useEffect(() => {
        const filtersApplied = {
            category: selectedCategory,
            prices: prices,
            colors: selectedColors,
        }
        const filteredProducts = sortProducts(filterProducts([...data.products], filtersApplied), selectedSort);
        setProductsToView(debouncedSearchTerm.length > 0 ? filteredProducts.filter(product => product.name.includes(debouncedSearchTerm)) : filteredProducts);
    }, [selectedSort, searchTerm, debouncedSearchTerm, selectedCategory, prices, selectedColors]);

    return (
        <div className="container">
            <div className="showcase">
                <Sidebar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    changeSelectedCategory={changeSelectedCategory}
                    setPrices={setPrices}
                    selectedColors={selectedColors}
                    changeSelectedColors={changeSelectedColors}
                />
                <div className="showcase__products-wrapper">

                    <div className="showcase__sort-and-count">
                        <div>
                            There are <span className="showcase__bold">{productCount}</span> products in this item
                        </div>
                        <div className="showcase__sort">
                            <select className="input showcase__input" onChange={(e) => setSelectedSort(e.target.value)}>
                                <option value="RELEVANCE">By relevance</option>
                                <option value="NAME_AZ">From A to Z</option>
                                <option value="NAME_ZA">From Z to A</option>
                                <option value="PRICE_ASC">From low to high</option>
                                <option value="PRICE_DESC">From high to low</option>
                            </select>
                        </div>
                    </div>

                    <div className="showcase__products">
                    {(productsToView.length > 0)
                            ? productsToView.map(product => <Product key={product?.id} product={product}/>)
                            : <>No products found</>
                        }
                    </div>

                    <div className="showcase__pagination">
                        <div>
                            <Icon name="left-pagin-arrow" className="icon_pagin-arrow"/>
                        </div>
                        <div className="showcase__pages">
                            <div className="showcase__page active">1</div>
                            <div className="showcase__page">2</div>
                            <div className="showcase__page">3</div>
                        </div>
                        <div>
                            <Icon name="right-pagin-arrow" className="icon_pagin-arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function changeSelectedCategory(category) {
        setSelectedCategory(category);
    }

    function changeSelectedColors(colors) {
        setSelectedColors(colors);
    }

    function sortProducts (products, sortType) {
        switch (sortType) {
            case "RELEVANCE":
                break;
            case "NAME_AZ":
                products.sort((a, b) => a.name > b.name ? 1 : -1);
                break;
            case "NAME_ZA":
                products.sort((a, b) => a.name < b.name ? 1 : -1);
                break;
            case "PRICE_ASC":
                products.sort((a, b) => a.price > b.price ? 1 : -1);
                break;
            case "PRICE_DESC":
                products.sort((a, b) => a.price < b.price ? 1 : -1);
                break;
        }
        return products;
    }
}

