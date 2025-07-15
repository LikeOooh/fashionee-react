import './Cart.scss';
import AuthContext from "../../context/AuthContext.jsx";
import {useContext} from "react";
import {FindUs} from "../find-us/FindUs.jsx";
import {CartProduct} from "../cart-product/CartProduct.jsx";
import {CartPriceRow} from "../cart-price-row/CartPriceRow.jsx";
import {Icon} from "../icon/Icon.jsx";

export function Cart({changeOrderedProducts}) {
    const {orderedProducts} = useContext(AuthContext);
    const totalPrice = orderedProducts.length > 1 ? orderedProducts.reduce((acc, item) => acc + item.totalPrice, 0) : orderedProducts[0]?.totalPrice || 0;
    const deliveryValue = totalPrice !== 0 ? 16 : 0;
    const totalOrderPrice = (totalPrice + deliveryValue).toFixed(2);

    return (
        <div className="container">
            <div className="cart">
                <div className="cart__order-wrapper">
                    <div className="cart__product-list">
                        {orderedProducts?.map((item) => (
                            <CartProduct key={item?.product?.id} order={item} changeOrderedProducts={changeOrderedProducts}/>))}
                    </div>
                    <div className="cart__promo-code-wrapper">
                        <div className="cart__info">
                            <div className="cart__title">You Have A Promo Code?</div>
                            <div className="cart__description">To receive up-to-date promotional codes, subscribe to us
                                on
                                social networks.
                            </div>
                        </div>
                        <div className="cart__promo-code">
                            <input type="text" name="promo-code" className="input" placeholder="Enter promo code"/>
                            <div className="button-wrapper cart__promo-code-button-wrapper">
                                <button className="button cart__promo-code-button">
                                    <Icon name="arrow" className="icon_medium"/>
                                </button>
                                <div className="vertical-line cart__vertical-line"></div>
                            </div>
                        </div>
                        <FindUs/>
                    </div>
                </div>
                <div className="cart__order">
                    <div className="cart__title">Your Order</div>
                    <div className="cart__order-price-wrapper">
                        <CartPriceRow type="price" rowName="Order price" value={totalPrice} info=""/>
                        <CartPriceRow type="promocode" rowName="Discount for promo code" value="No" info=""/>
                        {deliveryValue !== 0 && <CartPriceRow type="delivery" rowName="Delivery" value={deliveryValue}
                                                              info="(Aug 02 at 16:00)"/>}
                        <CartPriceRow type="total" rowName="Total" value={totalOrderPrice} info=""/>
                    </div>
                    <div className="button-wrapper cart__button-wrapper">
                        <button className="button cart__button">Checkout</button>
                        <div className="vertical-line cart__vertical-line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}