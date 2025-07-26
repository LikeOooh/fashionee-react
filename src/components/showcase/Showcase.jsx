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
    const productCount = productsToView?.length;

    //применение фильтров и поиск с учетом фильтрации
    useEffect(() => {
        const filtersApplied = {
            category: selectedCategory,
            prices: prices,
            colors: selectedColors,
        }
        const filteredProducts = filterProducts([...data.products], filtersApplied);
        setProductsToView(debouncedSearchTerm.length > 0 ? filteredProducts.filter(product => product.name.includes(debouncedSearchTerm)) : filteredProducts);
    }, [searchTerm, debouncedSearchTerm, selectedCategory, prices, selectedColors]);


    function changeSelectedCategory(category) {
        setSelectedCategory(category);
    }

    function changeSelectedColors(colors) {
        setSelectedColors(colors);
    }

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
                            <select className="input showcase__input">
                                <option value="RELEVANCE">By relevance</option>
                                <option value="ASC">ASC</option>
                                <option value="DESC">DESC</option>
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
}

