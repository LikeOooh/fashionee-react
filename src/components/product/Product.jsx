import './Product.scss';
import { AuthContext } from '../../hooks/AuthContext';
import { Icon } from '../icon/Icon.jsx';
import { useContext } from 'react';

export function Product({ product }) {
    const { chosenProducts, orderedProducts, changeChosenProducts, changeOrderedProducts } = useContext(AuthContext);
    const isChosen = chosenProducts.includes(product?.id);
    const orderedItem = orderedProducts.find((item) => item.product?.id === product.id);
    const isOrdered = !!orderedItem;
    const orderedCount = orderedItem?.count || 0;

    return (
        <div className="product">
            <div className="product__photo">
                <div className="product__top-bar">
                    <div className="product__labels">
                        {product?.isSale && <div className="product__label sale">Sale</div>}
                        {product?.isNew && <div className="product__label new">New</div>}
                    </div>
                    <div onClick={() => changeChosenProducts(product?.id)}>
                        <Icon name={isChosen ? 'heart-red' : 'heart'} />
                    </div>
                </div>
                <img src={product?.image} alt={product?.name} />
            </div>
            <div className="product__info">
                <div className="product__name">{product?.name}</div>
                <div className="product__price">
                    <div className="product__current-price">${product?.price}</div>
                    {product?.oldPrice && <div className="product__old-price">${product?.oldPrice}</div>}
                </div>
            </div>
            {isOrdered ? (
                <div className="product__quantity">
                    <div className="product__count-button" onClick={() => changeOrderedProducts(product, 'decrease')}>
                        -
                    </div>
                    <div className="count">{orderedCount}</div>
                    <div className="product__count-button" onClick={() => changeOrderedProducts(product, 'increase')}>
                        +
                    </div>
                </div>
            ) : (
                <div className="product__add-button" onClick={() => changeOrderedProducts(product, 'increase')}>
                    Добавить
                </div>
            )}
        </div>
    );
}
