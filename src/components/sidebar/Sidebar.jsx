import './Sidebar.scss';
import {Icon} from "../icon/Icon.jsx";
import {CustomList} from "../custom-list/CustomList.jsx";
import {SelectItem} from "../select-item/SelectItem.jsx";
import {useEffect, useState} from "react";
import {ReviewedProduct} from "../reviewed-product/ReviewedProduct.jsx";
import {useDebounce} from "../../hooks/useDebounce.jsx";
import {filters} from "../../helpers/products.js";


export function Sidebar() {
    const [selectedColors, setSelectedColors] = useState([]);
    const reviewedProducts = [
        {
            "id": 18,
            "name": "Retro style handbag (2)",
            "price": 35.99,
            "oldPrice": 52.99,
            "isSale": true,
            "isNew": false,
            "categories": [
                "Women",
                "Accessories"
            ],
            "color": "Brown",
            "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
        },
        {
            "id": 5,
            "name": "Warm casual sweater",
            "price": 80.99,
            "oldPrice": null,
            "isSale": false,
            "isNew": true,
            "categories": [
                "Women"
            ],
            "color": "Brown",
            "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
        },
        {
            "id": 13,
            "name": "Textured turtleneck with zip (2)",
            "price": 45.99,
            "oldPrice": 53.99,
            "isSale": true,
            "isNew": false,
            "categories": [
                "Men"
            ],
            "color": "Brown",
            "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
        },
    ]
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const categories = ["All", ...filters().categories];
    const colors = [...filters().colors];
    const priceMin = String(Math.round(filters().prices.min));
    const priceMax = String(Math.round(filters().prices.max));

    useEffect(() => {
    }, [selectedColors]);

    useEffect(() => {
        if (debouncedSearchTerm) {
            console.log('Ищем:', debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const changeSelection = (value) => {
        const newSelectedColors = selectedColors.includes(value)
            ? selectedColors.filter(item => item !== value)
            : [...selectedColors, value];
        setSelectedColors(newSelectedColors);
    }

    return (
        <div className="sidebar">
            <div className="sidebar__search">
                <label>
                    <input type="text" placeholder="Search" className="input sidebar__search-row" value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}/>
                    <Icon name="search" className="icon_search sidebar__search-icon"/>
                </label>
            </div>
            <div className="sidebar__item">
                <div className="h4">Categories</div>
                <CustomList custList={categories} className="sidebar-list"/>
            </div>
            <div className="sidebar__item">
                <div className="h4">Price</div>
                <div className="sidebar__price-bar">
                    <input type="text" placeholder={priceMin} className="input price"/>
                    <input type="text" placeholder={priceMax} className="input price"/>
                </div>
            </div>
            <div className="sidebar__item">
                <div className="h4">Colors</div>
                <div className="sidebar__colors">
                    {colors.map((item) => (
                        <SelectItem key={item} value={item} isChecked={selectedColors.includes(item)}
                                    changeSelection={changeSelection}/>))}
                </div>
            </div>
            <div className="sidebar__item">
                <div className="button-wrapper">
                    <button className="button">Apply Filter</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="sidebar__item">
                <div className="h4">Reviewed By You</div>
                <div>
                    <div className="sidebar__reviewed-products">
                        {reviewedProducts?.map((item) => (<ReviewedProduct key={item?.id} product={item}/>))}
                    </div>
                </div>
            </div>
            <div>
                <a href="#">
                    <img src="/images/season-sale-banner.svg" alt="Season Sale Banner"/>
                </a>
            </div>
        </div>
    )
}