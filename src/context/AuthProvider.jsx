import { AuthContext } from './AuthContext.jsx';
import { IS_AUTH, CHOSEN_PRODUCTS, ORDERED_PRODUCTS, PROMO_CODE } from '@/constants/localStorage.js';
import { useLocalStorage } from '@/hooks/useLocalStorage.jsx';

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useLocalStorage(IS_AUTH, false);
    const [chosenProducts, setChosenProducts] = useLocalStorage(CHOSEN_PRODUCTS, []);
    const [orderedProducts, setOrderedProducts] = useLocalStorage(ORDERED_PRODUCTS, []);
    const [promoCode, setPromoCode] = useLocalStorage(PROMO_CODE, '');

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                chosenProducts,
                orderedProducts,
                setChosenProducts,
                setOrderedProducts,
                promoCode,
                setPromoCode,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
