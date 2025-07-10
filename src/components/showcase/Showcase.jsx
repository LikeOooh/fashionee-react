import './Showcase.scss';
import {Product} from "../product/Product.jsx";
import {products} from '../../../data/products.json'
import {Sidebar} from "../sidebar/Sidebar.jsx";

export function Showcase() {
    return (
        <>
            <div className="container">
                <div className="shop">
                    <Sidebar/>
                    <div className="products-wrapper">
                        <div className="sort-and-count">
                            <div className="products-count">
                                There are <span className="bold">67</span> products in this item
                            </div>
                            <div className="sort">
                                <select className="input">
                                    <option value="RELEVANCE">By relevance</option>
                                    <option value="ASC">ASC</option>
                                    <option value="DESC">DESC</option>
                                </select>
                            </div>
                        </div>
                        <div className="products">
                            {products.map((product)=>(<Product key={product?.id} product={product} />))}
                        </div>
                        <div className="pagination">
                            <div className="button left">
                                <img src="./icons/left-pagin-arrow.svg" alt="left-pagin-arrow"/>
                            </div>
                            <div className="pages">
                                <div className="page active">1</div>
                                <div className="page">2</div>
                                <div className="page">3</div>
                            </div>
                            <div className="button right">
                                <img src="./icons/right-pagin-arrow.svg" alt="right-pagin-arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}