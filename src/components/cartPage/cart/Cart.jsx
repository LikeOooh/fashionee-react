import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext.jsx';
import { UseNotification } from '@/hooks/useNotification.jsx';
import { Notification } from '@/components/ui/notification/Notification.jsx';
import { CartProduct } from '@/components/cartPage/cart-product/CartProduct.jsx';
import { CartOrder } from '@/components/cartPage/cart-order/Cart-order.jsx';
import { PromoCode } from '@/components/cartPage/promo-code/PromoCode.jsx';
import { FindUs } from '@/components/ui/find-us/FindUs.jsx';
import './Cart.scss';

export function Cart() {
    const { orderedProducts, setOrderedProducts, promoCode, setPromoCode } = useContext(AuthContext);
    const { notification, showNotification } = UseNotification();
    const totalPrice =
        orderedProducts.length > 1
            ? orderedProducts.reduce((acc, item) => acc + item.totalPrice, 0)
            : orderedProducts[0]?.totalPrice || 0;

    const handleCheckout = () => {
        if (!orderedProducts) {
            return;
        }
        printOrder(orderedProducts);
        showNotification('Заказ оформлен');
        setOrderedProducts([]);
        setPromoCode('');
    };

    //Вывод заказа в консоль
    const printOrder = (orderedProducts) => {
        console.log('Оформлен заказ: ');
        orderedProducts.forEach((product, index) => {
            console.log(
                `${index + 1}. ${product.product?.name}  ${product.product?.color} Цена: ${product.product?.price}. Количество: ${product?.count}шт.`,
            );
        });
        console.log(`Общая стоимость: ${totalPrice.toFixed(2)}`);
    };

    return (
        <div className="container">
            {notification && <Notification notification={notification} />}
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
                <CartOrder totalPrice={totalPrice} promoCode={promoCode} handleCheckout={handleCheckout} />
            </div>
        </div>
    );
}
