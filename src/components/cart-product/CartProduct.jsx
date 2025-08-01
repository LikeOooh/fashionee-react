import './CartProduct.scss';
import { addWhitespaces } from '../../helpers/formatter.js';

export function CartProduct({ order, changeOrderedProducts }) {
    const product = order?.product;
    const count = order?.count;
    const totalPrice = product?.price * order?.count;
    const totalPriceAddWhitespaces = addWhitespaces(totalPrice);
    const priceAddWhitespaces = addWhitespaces(product?.price);
    const oldPriceAddWhitespaces = addWhitespaces(product?.oldPrice);

    return (
        <div className="cart-product">
            <div className="cart-product__photo">
                <img src={product?.image} alt={product?.name} />
            </div>
            <div className="cart-product__product-info">
                <div className="cart-product__title">
                    {product?.name} {product?.size && '(' + product?.size + ')'}
                </div>
                <div className="cart-product__price-wrapper">
                    <div className="cart-product__price-and-quantity">
                        <div className="cart-product__price">
                            {product?.oldPrice && (
                                <div className="cart-product__old-price">{oldPriceAddWhitespaces}</div>
                            )}
                            <div className="cart-product__current-price">{priceAddWhitespaces}</div>
                        </div>
                        <div className="cart-product__quantity">
                            <div
                                className="cart-product__count-button"
                                onClick={() => changeOrderedProducts(product, 'decrease')}
                            >
                                -
                            </div>
                            <div className="count">{count}</div>
                            <div
                                className="cart-product__count-button"
                                onClick={() => changeOrderedProducts(product, 'increase')}
                            >
                                +
                            </div>
                        </div>
                    </div>
                    <div className="cart-product__total-price">{totalPriceAddWhitespaces}</div>
                </div>
                <div className="cart-product__close">x</div>
            </div>
        </div>
    );
}
