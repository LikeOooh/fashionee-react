import { MenuItem } from '@/components/ui/menu-item/MenuItem.jsx';
import { Logo } from '@/components/ui/logo/Logo.jsx';
import { Icon } from '@/components/ui/icon/Icon.jsx';
import { Burger } from '@/components/ui/burger/Burger.jsx';
import { AuthContext } from '@/context/AuthContext.jsx';
import { useContext } from 'react';
import './Header.scss';

export function Header({ pageName, setPageName }) {
    const { isAuth, setIsAuth, chosenProducts, orderedProducts } = useContext(AuthContext);
    const totalOrderedCount = orderedProducts.reduce((acc, item) => acc + item.count, 0);

    return (
        <header className="header">
            <div className="header__left-side">
                <Burger />
                <Logo />
                <div className="header__menu">
                    <MenuItem title="Home" icon={false} isActive={pageName === 'home'} />
                    <MenuItem title="Pages" icon={true} isActive={pageName === 'pages'} />
                    <MenuItem
                        title="Shop"
                        icon={true}
                        onClick={() => setPageName('Shop')}
                        isActive={pageName === 'Shop'}
                    />
                    <MenuItem title="Blog" icon={false} isActive={pageName === 'blog'} />
                    <MenuItem title="Contact" icon={false} isActive={pageName === 'contact'} />
                </div>
            </div>
            <div className="header__right-side">
                {isAuth && <span className="header__auth">Вы авторизованы</span>}
                <button className="header__auth-button" onClick={() => setIsAuth(!isAuth)}>
                    {isAuth ? 'Выйти' : 'Войти'}
                </button>
                <>
                    <Icon name="search" className="icon_search" />
                    <Icon name="user" className="icon_medium" />
                    <div className="header__icon-counter">
                        <Icon name="heart" className="icon_medium" />
                        <div className="header__counter">
                            <span>{chosenProducts?.length}</span>
                        </div>
                    </div>
                    <div className="header__icon-counter" onClick={() => setPageName('Cart')}>
                        <Icon name="cart" className="icon_medium" />
                        <div className="header__counter">
                            <span>{totalOrderedCount}</span>
                        </div>
                    </div>
                </>
            </div>
        </header>
    );
}
