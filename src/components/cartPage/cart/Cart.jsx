import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext.jsx';
import { CartProduct } from '@/components/cartPage/cart-product/CartProduct.jsx';
import { CartOrder } from '@/components/cartPage/cart-order/Cart-order.jsx';
import { PromoCode } from '@/components/cartPage/promo-code/PromoCode.jsx';
import { FindUs } from '@/components/ui/find-us/FindUs.jsx';
import './Cart.scss';

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
                            <CartProduct key={orderedProduct?.product?.id} orderedProduct={orderedProduct} />
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
