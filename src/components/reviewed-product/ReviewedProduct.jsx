import './ReviewedProduct.scss';
import { addWhitespaces } from '../../helpers/formatter.js';

export function ReviewedProduct({ product }) {
    const priceAddWhitespaces = addWhitespaces(product?.price);
    const oldPriceAddWhitespaces = addWhitespaces(product?.oldPrice);

    return (
        <div className="reviewed-product">
            <div className="reviewed-product__image">
                <img src={product?.image} alt={product?.name} />
            </div>
            <div className="reviewed-product__info">
                <div className="reviewed-product__name">{product?.name}</div>
                <div className="reviewed-product__price">
                    <div className="reviewed-product__current-price">{priceAddWhitespaces}</div>
                    {product?.oldPrice && <div className="reviewed-product__old-price">{oldPriceAddWhitespaces}</div>}
                </div>
            </div>
        </div>
    );
}
