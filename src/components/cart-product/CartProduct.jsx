import './CartProduct.scss'

export function CartProduct({product}) {
    const totalPrice = product?.price * product?.count;

    return (
        <div className="cart-product">
            <div className="cart-product__photo">
                <img src={product?.image} alt={product?.name}/>
            </div>
            <div className="cart-product__product-info">
                <div className="cart-product__title">{product?.name} {product?.size && "(" + product?.size + ")"}</div>
                <div className="cart-product__price-wrapper">
                    <div className="cart-product__price-and-quantity">
                        <div className="cart-product__price">
                            {product?.oldPrice &&<div className="cart-product__old-price">${product?.oldPrice}</div>}
                            <div className="cart-product__current-price">${product?.price}</div>
                        </div>
                        <div className="cart-product__quantity">
                            <div className="cart-product__count-button">-</div>
                            <div className="count">{product?.count}</div>
                            <div className="cart-product__count-button">+</div>
                        </div>
                    </div>
                    <div className="cart-product__total-price">
                        ${totalPrice}
                    </div>
                </div>
                <div className="cart-product__close">x</div>
            </div>
        </div>
    )
}