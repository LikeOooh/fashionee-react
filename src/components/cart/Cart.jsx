import './Cart.scss'
import {FindUs} from "../find-us/FindUs.jsx";
import {CartProduct} from "../cart-product/CartProduct.jsx";
import {CartPriceRow} from "../cart-price-row/CartPriceRow.jsx";
import {Icon} from "../icon/Icon.jsx";

export function Cart() {
    const cartProducts = [
        {
            "id": 4,
            "name": "Fashionee - catton shirt",
            "price": 110.99,
            "oldPrice": null,
            "isSale": false,
            "isNew": false,
            "categories": [
                "Men"
            ],
            "color": "Brown",
            "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55",
            "count": 1,
            "size": "S",
        },
        {
            "id": 2,
            "name": "Spray wrap skirt",
            "price": 35.99,
            "oldPrice": null,
            "isSale": false,
            "isNew": false,
            "categories": [
                "Women"
            ],
            "color": "Red",
            "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111",
            "count": 1,
            "size": null,
        },
    ]

    return (
        <div className="container">
            <div className="cart">
                <div className="cart__order-wrapper">
                    <div className="cart__product-list">
                        {cartProducts?.map((item) => (<CartProduct key={item?.id} product={item}/>))}
                    </div>
                    <div className="cart__order">
                        <div className="cart__title">You Order</div>
                        <div className="cart__order-price-wrapper">
                            <CartPriceRow type="price" rowName="Order price" value="146.98" info=""/>
                            <CartPriceRow type="promocode" rowName="Discount for promo code" value="No" info=""/>
                            <CartPriceRow type="delivery" rowName="Delivery" value="16" info="(Aug 02 at 16:00)"/>
                            <CartPriceRow type="total" rowName="Total" value="162.98" info=""/>
                        </div>
                        <div className="button-wrapper cart__button-wrapper">
                            <button className="button cart__button">Checkout</button>
                            <div className="vertical-line cart__vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div className="cart__promo-code-wrapper">
                    <div className="cart__info">
                        <div className="cart__title">You Have A Promo Code?</div>
                        <div className="cart__description">To receive up-to-date promotional codes, subscribe to us on social networks.
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
        </div>
    )
}