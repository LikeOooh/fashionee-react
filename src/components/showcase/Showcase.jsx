import data from '/data/products.json';

import './Showcase.scss';
import {Product} from "../product/Product.jsx";
import {Sidebar} from "../sidebar/Sidebar.jsx";
import {Icon} from "../icon/Icon.jsx";
import {useEffect, useMemo, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce.jsx";
import {filterProducts, filters} from "../../helpers/products.js";

const initialFilters = filters();

export function Showcase() {
    const [productsToView, setProductsToView] = useState(data.products);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [prices, setPrices] = useState({min: 0, max: Math.round(initialFilters.prices.max) || 0})
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSort, setSelectedSort] = useState('RELEVANCE');
    const productCount = productsToView?.length;

    const filteredAndSortedProducts = useMemo(() => {
        const filtersApplied = {
            category: selectedCategory,
            prices: prices,
            colors: selectedColors,
        }
        const filtered = filterProducts(data.products, filtersApplied)
        const sorted = sortProducts([...filtered], selectedSort);
        return debouncedSearchTerm
            ? sorted.filter(product => product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
            : sorted;
    }, [selectedSort, debouncedSearchTerm, selectedCategory, prices, selectedColors])

    //применение фильтров и поиск с учетом фильтрации и сортировки
    useEffect(() => {
        setProductsToView(filteredAndSortedProducts);
    }, [filteredAndSortedProducts]);

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

    function sortProducts(products, sortType) {
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
}

