import {Header} from "./components/header/Header.jsx";
import {ContentBlock} from "./components/content-block/ContentBlock.jsx";
import {useEffect, useState} from "react";
import {Footer} from "./components/footer/Footer.jsx";
import {Showcase} from "./components/showcase/Showcase.jsx";
import {Cart} from "./components/cart/Cart.jsx";

export function App() {
    const [page, setPage] = useState("Shop");
    const [chosenProducts, setChosenProducts] = useState(JSON.parse(localStorage.getItem("chosenProducts")));
    const pages = ['Cart', 'Shop'];

    useEffect(() => {
        localStorage.setItem("chosenProducts", JSON.stringify(chosenProducts));
    }, [chosenProducts]);

    useEffect(() => {
        console.log(page);
    }, [page]);

    const changeChosenProducts = (productId) => {
        const newChosenProducts = chosenProducts.includes(productId)
            ? chosenProducts.filter(item => item !== productId)
            : [...chosenProducts, productId];
        setChosenProducts(newChosenProducts);
        console.log(chosenProducts);
    }

    return (
        <>
            <Header page={page} setPage={setPage} chosenProducts={chosenProducts}/>
            <ContentBlock page={page} pages={pages} setPage={setPage}/>
            {page === "Shop" && <Showcase chosenProducts={chosenProducts} changeChosenProducts={changeChosenProducts}/>}
            {page === "Cart" && <Cart/>}
            <Footer/>
        </>
    )
}