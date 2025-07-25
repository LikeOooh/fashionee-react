import {Header} from "./components/header/Header.jsx";
import {ContentBlock} from "./components/content-block/ContentBlock.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {Showcase} from "./components/showcase/Showcase.jsx";
import {Cart} from "./components/cart/Cart.jsx";
import {AuthProvider} from './hooks/AuthProvider.jsx';
import {useEffect, useState} from "react";

export function App() {
    const pages = ['Cart', 'Shop'];
    const [pageName, setPageName] = useState("Shop");

    useEffect(() => {
    }, [pageName]);

    return (
        <AuthProvider>
            <Header page={pageName} setPage={setPageName}/>
            <ContentBlock page={pageName} pages={pages} setPage={setPageName}/>
            {pageName === "Shop" && <Showcase/>}
            {pageName === "Cart" && <Cart/>}
            <Footer/>
        </AuthProvider>
    )
}