import './Sidebar.scss';
import { useState } from 'react';
import { ReviewedProduct } from '../reviewed-product/ReviewedProduct.jsx';
import { getFilters } from '../../helpers/products.js';
import { Categories } from '../categories/Categories.jsx';
import { Price } from '../price/Price.jsx';
import { Colors } from '../colors/Colors.jsx';
import { Search } from '../search/Search.jsx';

export function Sidebar({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    changeSelectedCategory,
    setPrices,
    selectedColors,
    changeSelectedColors,
}) {
    const categories = ['All', ...getFilters().categories];
    const colors = [...getFilters().colors];
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Math.round(getFilters().prices.max) || 0);
    const [categorySelection, setCategorySelection] = useState(selectedCategory);
    const [colorsSelection, setColorsSelection] = useState(selectedColors);
    const reviewedProducts = [
        {
            id: 18,
            name: 'Retro style handbag (2)',
            price: 35.99,
            oldPrice: 52.99,
            isSale: true,
            isNew: false,
            categories: ['Women', 'Accessories'],
            color: 'Brown',
            image: 'https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100',
        },
        {
            id: 5,
            name: 'Warm casual sweater',
            price: 80.99,
            oldPrice: null,
            isSale: false,
            isNew: true,
            categories: ['Women'],
            color: 'Brown',
            image: 'https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400',
        },
        {
            id: 13,
            name: 'Textured turtleneck with zip (2)',
            price: 45.99,
            oldPrice: 53.99,
            isSale: true,
            isNew: false,
            categories: ['Men'],
            color: 'Brown',
            image: 'https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265',
        },
    ];

    const changeMinPrice = (e) => setMinPrice(Number(e.target.value));
    const changeMaxPrice = (e) => setMaxPrice(Number(e.target.value));

    function onClickColor(color) {
        const newSelectedColors = colorsSelection.includes(color)
            ? colorsSelection.filter((item) => item !== color)
            : [...colorsSelection, color];
        setColorsSelection(newSelectedColors);
    }

    const applyFilters = () => {
        changeSelectedCategory(categorySelection);
        setPrices({ min: minPrice, max: maxPrice });
        changeSelectedColors(colorsSelection);
    };

    return (
        <div className="sidebar">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Categories
                categories={categories}
                categorySelection={categorySelection}
                setCategorySelection={setCategorySelection}
            />
            <Price
                minPrice={minPrice}
                maxPrice={maxPrice}
                changeMinPrice={changeMinPrice}
                changeMaxPrice={changeMaxPrice}
            />
            <Colors colors={colors} colorsSelection={colorsSelection} changeSelectedColors={onClickColor} />
            <div className="sidebar__item">
                <div className="button-wrapper" onClick={() => applyFilters()}>
                    <button className="button">Apply Filter</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="sidebar__item">
                <div className="h4">Reviewed By You</div>
                <div>
                    <div className="sidebar__reviewed-products">
                        {reviewedProducts?.map((reviewedProduct) => (
                            <ReviewedProduct key={reviewedProduct?.id} product={reviewedProduct} />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <a href="#">
                    <img src="../../../public/images/season-sale-banner.svg" alt="Season Sale Banner" />
                </a>
            </div>
        </div>
    );
}
