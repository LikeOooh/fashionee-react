import {useEffect, useState} from "react";
import {AuthContext} from "./AuthContext.jsx";
import {IS_AUTH, CHOSEN_PRODUCTS, ORDERED_PRODUCTS} from "../constants/localStorage.js";

export function AuthProvider({children}) {
    //localStorage.clear();
    const [isAuth, setIsAuth] = useState(() => {
        const saved = localStorage.getItem(IS_AUTH);
        return saved ? JSON.parse(saved) : false;
    });

    const [chosenProducts, setChosenProducts] = useState(() => {
        const saved = localStorage.getItem(CHOSEN_PRODUCTS);
        return saved ? JSON.parse(saved) : [];
    });

    const [orderedProducts, setOrderedProducts] = useState(() => {
        const saved = localStorage.getItem(ORDERED_PRODUCTS);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        console.log(isAuth);
        localStorage.setItem(IS_AUTH, JSON.stringify(isAuth));
    }, [isAuth]);

    const changeChosenProducts = (productId) => {
        setChosenProducts(chosenProducts => {
            const isProductSelected = chosenProducts.includes(productId);
            const newChosenProducts = isProductSelected
                ? chosenProducts.filter(item => item !== productId)
                : [...chosenProducts, productId]
            localStorage.setItem(CHOSEN_PRODUCTS, JSON.stringify(newChosenProducts));
            return newChosenProducts;
        });
    }

    const changeOrderedProducts = (product, action) => {
        if (!product || !product.id || typeof product.price !== 'number') {
            console.error('Invalid product data');
            return;
        }
        setOrderedProducts(orderedProducts => {
            const newOrderedProducts = [...orderedProducts];
            const productIndex = orderedProducts.findIndex(p => p.product?.id === product.id);
            if (action === "increase") {
                if (productIndex >= 0) {
                    newOrderedProducts[productIndex] = {
                        ...newOrderedProducts[productIndex],
                        count: newOrderedProducts[productIndex].count + 1,
                        totalPrice: product.price * (newOrderedProducts[productIndex].count + 1)
                    };
                } else {
                    newOrderedProducts.push({product: product, count: 1, totalPrice: product.price});
                }
            }
            if (action === "decrease" && productIndex >= 0) {
                const updatedCount = newOrderedProducts[productIndex].count - 1;
                if (updatedCount > 0) {
                    newOrderedProducts[productIndex] = {
                        ...newOrderedProducts[productIndex],
                        count: updatedCount,
                        totalPrice: product.price * updatedCount
                    }
                } else {
                    newOrderedProducts.splice(productIndex, 1);
                }
            }
            localStorage.setItem(ORDERED_PRODUCTS, JSON.stringify(newOrderedProducts));
            return newOrderedProducts;
        });
    }

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                chosenProducts,
                orderedProducts,
                changeChosenProducts,
                changeOrderedProducts
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}