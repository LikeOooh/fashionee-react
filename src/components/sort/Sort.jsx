import './Sort.scss';

export function Sort({ productCount, changeSortType }) {
    return (
        <div className="sort-and-count">
            <div className="sort">
                There are <span className="sort__bold">{productCount}</span> products in this item
            </div>
            <div className="sort">
                <select className="input sort__input" onChange={(e) => changeSortType(e.target.value)}>
                    <option value="RELEVANCE">By relevance</option>
                    <option value="NAME_AZ">From A to Z</option>
                    <option value="NAME_ZA">From Z to A</option>
                    <option value="PRICE_ASC">From low to high</option>
                    <option value="PRICE_DESC">From high to low</option>
                </select>
            </div>
        </div>
    );
}
