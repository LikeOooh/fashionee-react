import './Cart-order.scss';
import {CartPriceRow} from "../cart-price-row/CartPriceRow.jsx";
import {addWhitespaces} from "../../helpers/formatter.js";

export function CartOrder({totalPrice, promoCode}) {
    const totalPriceAddWhitespaces = addWhitespaces(totalPrice);
    const deliveryValue = totalPrice !== 0 ? 15 : 0;
    const totalOrderPrice = addWhitespaces((totalPrice * 0.9 + deliveryValue).toFixed(2));

    return (
        <div className="cart-order">
            <div className="title">Your Order</div>
            <div className="cart-order__price-wrapper">
                <CartPriceRow type="price" rowName="Order price" value={totalPriceAddWhitespaces} info=""/>
                <CartPriceRow type="promoCode" rowName="Discount for promo code" value={promoCode ? "10%" : "No"} info=""/>
                {deliveryValue !== 0 && <CartPriceRow type="delivery" rowName="Delivery" value={deliveryValue}
                                                      info="(Aug 02 at 16:00)"/>}
                <CartPriceRow type="total" rowName="Total" value={totalOrderPrice} info=""/>
            </div>
            <div className="button-wrapper cart-order__button-wrapper">
                <button className="button">Checkout</button>
                <div className="vertical-line"></div>
            </div>
        </div>
    )
}