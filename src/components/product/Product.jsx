import './Product.scss';
import { AuthContext } from '../../context/AuthContext.jsx';
import { Icon } from '../icon/Icon.jsx';
import { useContext } from 'react';
import { addWhitespaces } from '../../helpers/formatter.js';
import { changeChosenProducts, changeOrderedProducts } from '../../helpers/products.js';

export function Product({ product }) {
    const { chosenProducts, setChosenProducts, orderedProducts, setOrderedProducts } = useContext(AuthContext);
    const isChosen = chosenProducts.includes(product?.id);
    const orderedItem = orderedProducts.find((item) => item.product?.id === product.id);
    const isOrdered = !!orderedItem;
    const orderedCount = orderedItem?.count || 0;
    const priceAddWhitespaces = addWhitespaces(product?.price);
    const oldPriceAddWhitespaces = addWhitespaces(product?.oldPrice);

    return (
        <div className="product">
            <div className="product__photo">
                <div className="product__top-bar">
                    <div className="product__labels">
                        {product?.isSale && <div className="product__label sale">Sale</div>}
                        {product?.isNew && <div className="product__label new">New</div>}
                    </div>
                    <div onClick={() => changeChosenProducts(product?.id, setChosenProducts)}>
                        <Icon name={isChosen ? 'heart-red' : 'heart'} />
                    </div>
                </div>
                <img src={product?.image} alt={product?.name} />
            </div>
            <div className="product__info">
                <div className="product__name">{product?.name}</div>
                <div className="product__price">
                    <div className="product__current-price">{priceAddWhitespaces}</div>
                    {product?.oldPrice && <div className="product__old-price">{oldPriceAddWhitespaces}</div>}
                </div>
            </div>
            {isOrdered ? (
                <div className="product__quantity">
                    <div
                        className="product__count-button"
                        onClick={() => changeOrderedProducts(product, 'decrease', setOrderedProducts)}
                    >
                        -
                    </div>
                    <div className="count">{orderedCount}</div>
                    <div
                        className="product__count-button"
                        onClick={() => changeOrderedProducts(product, 'increase', setOrderedProducts)}
                    >
                        +
                    </div>
                </div>
            ) : (
                <div
                    className="product__add-button"
                    onClick={() => changeOrderedProducts(product, 'increase', setOrderedProducts)}
                >
                    Добавить
                </div>
            )}
        </div>
    );
}
