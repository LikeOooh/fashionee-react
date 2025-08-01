import './Cart-order.scss';
import { CartPriceRow } from '../cart-price-row/CartPriceRow.jsx';
import { addWhitespaces } from '../../helpers/formatter.js';

export function CartOrder({ totalPrice, promoCode }) {
    const deliveryValue = totalPrice !== 0 ? 15 : 0;
    const totalOrderPrice = promoCode
        ? addWhitespaces(totalPrice * 0.9 + deliveryValue)
        : addWhitespaces(totalPrice + deliveryValue);
    const totalPriceAddWhitespaces = addWhitespaces(totalPrice);
    const deliveryValueAddWhitespaces = addWhitespaces(deliveryValue);

    return (
        <div className="cart-order">
            <div className="title">Your Order</div>
            <div className="cart-order__price-wrapper">
                <CartPriceRow type="price" rowName="Order price" value={totalPriceAddWhitespaces} info="" />
                <CartPriceRow
                    type="promoCode"
                    rowName="Discount for promo code"
                    value={promoCode ? '10%' : 'No'}
                    info=""
                />
                {deliveryValue !== 0 && (
                    <CartPriceRow
                        type="delivery"
                        rowName="Delivery"
                        value={deliveryValueAddWhitespaces}
                        info="(Aug 02 at 16:00)"
                    />
                )}
                <CartPriceRow type="total" rowName="Total" value={totalOrderPrice} info="" />
            </div>
            <div className="button-wrapper cart-order__button-wrapper">
                <button className="button">Checkout</button>
                <div className="vertical-line"></div>
            </div>
        </div>
    );
}
