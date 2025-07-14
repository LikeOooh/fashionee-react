import './Showcase.scss';
import {Product} from "../product/Product.jsx";
import {products} from '../../../data/products.json'
import {Sidebar} from "../sidebar/Sidebar.jsx";
import {Icon} from "../icon/Icon.jsx";

export function Showcase({chosenProducts, changeChosenProducts}) {
    const productCount = products?.length;

    return (
        <div className="container">
            <div className="showcase">
                <Sidebar/>
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
                        {products.map((product) => (<Product key={product?.id} product={product} isChosen={chosenProducts.includes(product?.id)} changeChosenProducts={changeChosenProducts}/>))}
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