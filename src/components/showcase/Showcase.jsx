import data from '/data/products.json';

import './Showcase.scss';
import { Product } from '../product/Product.jsx';
import { Sidebar } from '../sidebar/Sidebar.jsx';
import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce.jsx';
import { filterProducts, getFilters } from '../../helpers/products.js';
import { sortProducts } from '../../helpers/sort.js';
import { Sort } from '../sort/Sort.jsx';
import { Pagination } from '../pagination/Pagination.jsx';

const initialFilters = getFilters();
const productsPerPage = 12;

export function Showcase() {
    const [productsToView, setProductsToView] = useState(data.products);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [prices, setPrices] = useState({ min: 0, max: Math.round(initialFilters.prices.max) || 0 });
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSort, setSelectedSort] = useState('RELEVANCE');
    const [currentPage, setCurrentPage] = useState(1);
    const productCount = productsToView?.length;

    const slicedProducts = useMemo(() => {
        const start = (currentPage - 1) * productsPerPage;
        return productsToView.slice(start, start + productsPerPage);
    }, [productsToView, currentPage]);

    const { totalPages, pages } = useMemo(() => {
        const total = Math.ceil(productsToView.length / productsPerPage);
        return {
            totalPages: total,
            pages: Array.from({ length: total }, (_, i) => i + 1),
        };
    }, [productsToView.length]);

    const filteredAndSortedProducts = useMemo(() => {
        const filtersApplied = {
            category: selectedCategory,
            prices: prices,
            colors: selectedColors,
        };
        const filtered = filterProducts(data.products, filtersApplied);
        const sorted = sortProducts([...filtered], selectedSort);
        return debouncedSearchTerm
            ? sorted.filter((product) => product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
            : sorted;
    }, [selectedSort, debouncedSearchTerm, selectedCategory, prices, selectedColors]);

    //применение фильтров и поиск с учетом фильтрации и сортировки
    useEffect(() => {
        setProductsToView(filteredAndSortedProducts);
        setCurrentPage(1);
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
                    <Sort productCount={productCount} changeSortType={setSelectedSort} />
                    <div className="showcase__products">
                        {slicedProducts.length > 0 ? (
                            slicedProducts.map((product) => <Product key={product?.id} product={product} />)
                        ) : (
                            <>No products found</>
                        )}
                    </div>
                    <Pagination
                        totalPages={totalPages}
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );

    function changeSelectedCategory(category) {
        setSelectedCategory(category);
    }

    function changeSelectedColors(colors) {
        setSelectedColors(colors);
    }
}
