import './ReviewedProduct.scss'

export function ReviewedProduct ({product}) {
    return (
        <div className="reviewed-product">
            <div className="reviewed-product__image">
                <img src={product?.image} alt={product?.name}/>
            </div>
            <div className="reviewed-product__info">
                <div className="reviewed-product__name">{product?.name}</div>
                <div className="reviewed-product__price">
                    <div className="reviewed-product__current-price">${product?.price}</div>
                    <div className="reviewed-product__old-price">${product?.oldPrice}</div>
                </div>
            </div>
        </div>
    )
}