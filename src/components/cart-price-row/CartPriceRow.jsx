import './CartPriceRow.scss'

export function CartPriceRow({type, rowName, value, info}) {
    return (
        <div className={"cart__price-row" + (type === "total" ? " total" : " ") + (type === "delivery" ? " delivery" : " ")}>
            <div className={"cart__price-row-name" + (type === "total" ? " total" : " ")}>{rowName} {type === "delivery" && <span>{info}</span>}</div>
            {(type !== "promoCode" && type !== "total") && <div className="cart__price-row__price">${value}</div>}
            {type === "total" && <div className="cart__price-row__price_total">${value}</div>}
            {type === "promoCode" && <div className="cart__price-row-name">{value}</div>}
        </div>
    )
}