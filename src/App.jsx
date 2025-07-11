import {Header} from "./components/header/Header.jsx";
import {ContentBlock} from "./components/content-block/ContentBlock.jsx";
import {useEffect, useState} from "react";
import {Footer} from "./components/footer/Footer.jsx";
import {Showcase} from "./components/showcase/Showcase.jsx";
import {Cart} from "./components/cart/Cart.jsx";

export function App() {
    const [page, setPage] = useState("Shop");
    const pages = ['Cart', 'Shop'];

    useEffect(() => {
        console.log(page);
    }, [page]);

    return (
        <>
            <Header page={page} setPage={setPage}/>
            <ContentBlock page={page} pages={pages} setPage={setPage}/>
            {page==="Shop" && <Showcase/>}
            {page==="Cart" && <Cart/>}
            <Footer/>
        </>
    )
}