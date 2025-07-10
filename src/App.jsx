import {Header} from "./components/header/Header.jsx";
import {ContentBlock} from "./components/content-block/ContentBlock.jsx";
import {useEffect, useState} from "react";
import {Footer} from "./components/footer/Footer.jsx";
import {Showcase} from "./components/showcase/Showcase.jsx";

export function App() {
    const [page, setPage] = useState("Shop");

    useEffect(() => {
        console.log(page);
    }, [page]);

    return (
        <>
            <Header page={page} setPage={setPage}/>
            <ContentBlock page={page}/>
            {page==="Shop" && <Showcase/>}
            <Footer/>
        </>
    )
}