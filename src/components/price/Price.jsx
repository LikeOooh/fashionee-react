import './Price.scss';

export function Price({minPrice, maxPrice, changeMinPrice, changeMaxPrice}) {
    return (
        <div>
            <div className="h4">Price</div>
            <div className="price-bar">
                <input type="text" placeholder={minPrice} className="input price"
                       onChange={(e) => changeMinPrice(e)}/>
                <input type="text" placeholder={maxPrice} className="input price"
                       onChange={(e) => changeMaxPrice(e)}/>
            </div>
        </div>
    )
}