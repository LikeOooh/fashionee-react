import {useEffect, useState} from "react";
import {AuthContext} from "./AuthContext.jsx";

export function AuthProvider({children}) {
    const [isAuth, setIsAuth] = useState(() => {
        const saved = localStorage.getItem("isAuth");
        return saved ? JSON.parse(saved) : false;
    });

    const [chosenProducts, setChosenProducts] = useState(() => {
        const saved = localStorage.getItem("chosenProducts");
        return saved ? JSON.parse(saved) : [];
    });

    const [orderedProducts, setOrderedProducts] = useState(() => {
        const saved = localStorage.getItem("orderedProducts");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        console.log(isAuth);
        localStorage.setItem("isAuth", JSON.stringify(isAuth));
    }, [isAuth]);

    const changeChosenProducts = (productId) => {
        setChosenProducts(chosenProducts => {
            const isProductSelected = chosenProducts.includes(productId);
            const newChosenProducts = isProductSelected
                ? chosenProducts.filter(item => item !== productId)
                : [...chosenProducts, productId]
            localStorage.setItem("chosenProducts", JSON.stringify(newChosenProducts));
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
            localStorage.setItem("orderedProducts", JSON.stringify(newOrderedProducts));
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