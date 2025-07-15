import './Header.scss'
import {MenuItem} from "../menu-item/MenuItem.jsx";
import {Logo} from "../logo/Logo.jsx";
import {Icon} from "../icon/Icon.jsx";
import {Burger} from "../burger/Burger.jsx";
import AuthContext from "../../context/AuthContext.jsx";
import {useContext} from "react";

export function Header({chosenProducts, orderedProducts}) {
    const {auth, setAuth, page, setPage} = useContext(AuthContext);
    const totalOrderedCount = orderedProducts.reduce((acc, item) => acc + item.count, 0);

    return (
        <header className="header">
            <div className="header__left-side">
                <Burger/>
                <Logo/>
                <div className="header__menu">
                    <MenuItem title="Home" icon={false} isAactive={page === "home"}/>
                    <MenuItem title="Pages" icon={true} isAactive={page === "pages"}/>
                    <MenuItem title="Shop" icon={true} onClick={() => setPage("Shop")} isAactive={page === "Shop"}/>
                    <MenuItem title="Blog" icon={false} isAactive={page === "blog"}/>
                    <MenuItem title="Contact" icon={false} isAactive={page === "contact"}/>
                </div>
            </div>
            <div className="header__right-side">
                {auth &&
                    <>
                        <Icon name="search" className="icon_search"/>
                        <Icon name="user" className="icon_medium"/>
                        <div className="header__icon-counter">
                            <Icon name="heart" className="icon_medium"/>
                            <div className="header__counter"><span>{chosenProducts?.length}</span></div>
                        </div>
                        <div className="header__icon-counter" onClick={() => setPage("Cart")}>
                            <Icon name="cart" className="icon_medium"/>
                            <div className="header__counter"><span>{totalOrderedCount}</span></div>
                        </div>
                    </>
                }
                <button onClick={() => setAuth(!auth)}>{auth ? "Выйти" : "Войти"}</button>
            </div>
        </header>
    )
}