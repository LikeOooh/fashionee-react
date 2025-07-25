import {Header} from "./components/header/Header.jsx";
import {ContentBlock} from "./components/content-block/ContentBlock.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {Showcase} from "./components/showcase/Showcase.jsx";
import {Cart} from "./components/cart/Cart.jsx";
import {AuthProvider} from './hooks/AuthProvider.jsx';
import {useEffect, useState} from "react";

export function App() {
    const pages = ['Cart', 'Shop'];
    const [page, setPage] = useState("Shop");

    useEffect(() => {
        console.log(page);
    }, [page]);

    return (
        <AuthProvider>
            <Header page={page} setPage={setPage}/>
            <ContentBlock page={page} pages={pages} setPage={setPage}/>
            {page === "Shop" && <Showcase/>}
            {page === "Cart" && <Cart/>}
            <Footer/>
        </AuthProvider>
    )
}