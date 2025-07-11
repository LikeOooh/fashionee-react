import './Product.scss'
import {Icon} from "../icon/Icon.jsx";

export function Product({product}) {
    return (
        <div className="product">
            <div className="product__photo">
                <div className="product__top-bar">
                    <div className="product__labels">
                        {product?.isSale && <div className="product__label sale">Sale</div>}
                        {product?.isNew && <div className="product__label new">New</div>}
                    </div>
                    <div>
                        <Icon name="heart" />
                    </div>

                </div>
                <img src={product?.image} alt={product?.name}/>
            </div>
            <div className="product__info">
                <div className="product__name">{product?.name}</div>
                <div className="product__price">
                    <div className="product__current-price">${product?.price}</div>
                    {product?.oldPrice && <div className="product__old-price">${product?.oldPrice}</div>}
                </div>
            </div>
        </div>
    )
}