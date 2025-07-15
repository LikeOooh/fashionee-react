import {Header} from "./components/header/Header.jsx";
import {ContentBlock} from "./components/content-block/ContentBlock.jsx";
import {useEffect, useState} from "react";
import {Footer} from "./components/footer/Footer.jsx";
import {Showcase} from "./components/showcase/Showcase.jsx";
import {Cart} from "./components/cart/Cart.jsx";
import {products} from '/data/products.json'
import AuthContext from "./context/AuthContext.jsx";

export function App() {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")) || false);
    const [page, setPage] = useState("Shop");
    const [chosenProducts, setChosenProducts] = useState(JSON.parse(localStorage.getItem("chosenProducts")) || []);
    const [orderedProducts, setOrderedProducts] = useState(JSON.parse(localStorage.getItem("orderedProducts")) || []);
    const pages = ['Cart', 'Shop'];


    useEffect(() => {
        console.log(page);
    }, [page]);

    useEffect(() => {
        console.log(auth);
        localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);

    return (
        <>
            <AuthContext value={{
                auth,
                setAuth,
                page,
                setPage,
                chosenProducts,
                orderedProducts
            }}>
                < Header chosenProducts={chosenProducts}
                         orderedProducts={orderedProducts}/>
                <ContentBlock pages={pages}/>
                {page === "Shop" && <Showcase products={products} changeChosenProducts={changeChosenProducts}
                                              changeOrderedProducts={changeOrderedProducts}/>}
                {page === "Cart" && <Cart products={products} changeChosenProducts={changeChosenProducts}
                                          changeOrderedProducts={changeOrderedProducts}/>}
                <Footer/>
            </AuthContext>
        </>
    )

    function changeChosenProducts(productId) {
        setChosenProducts(chosenProducts => {
            const isProductSelected = chosenProducts.includes(productId);
            const newChosenProducts = isProductSelected
                ? chosenProducts.filter(item => item !== productId)
                : [...chosenProducts, productId]
            localStorage.setItem("chosenProducts", JSON.stringify(newChosenProducts));
            return newChosenProducts;
        });
    }

    function changeOrderedProducts(product, action) {
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
}