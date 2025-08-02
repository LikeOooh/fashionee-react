import './Cart.scss';
import { AuthContext } from '../../context/AuthContext.jsx';
import { CartProduct } from '../cart-product/CartProduct.jsx';
import { useContext } from 'react';
import { CartOrder } from '../cart-order/Cart-order.jsx';
import { PromoCode } from '../promo-code/PromoCode.jsx';
import { FindUs } from '../find-us/FindUs.jsx';

export function Cart() {
    const { orderedProducts, promoCode } = useContext(AuthContext);
    const totalPrice =
        orderedProducts.length > 1
            ? orderedProducts.reduce((acc, item) => acc + item.totalPrice, 0)
            : orderedProducts[0]?.totalPrice || 0;

    return (
        <div className="container">
            <div className="cart">
                <div className="cart__order-wrapper">
                    <div className="cart__product-list">
                        {orderedProducts?.map((orderedProduct) => (
                            <CartProduct key={orderedProduct?.product?.id} order={orderedProduct} />
                        ))}
                    </div>
                    <PromoCode />
                    <FindUs />
                </div>
                <CartOrder totalPrice={totalPrice} promoCode={promoCode} />
            </div>
        </div>
    );
}
