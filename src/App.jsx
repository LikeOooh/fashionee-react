import { Header } from '@/components/layout/header/Header.jsx';
import { ContentBlock } from '@/components/layout/content-block/ContentBlock.jsx';
import { Footer } from '@/components/layout/footer/Footer.jsx';
import { Showcase } from '@/components/shopPage/showcase/Showcase.jsx';
import { Cart } from '@/components/cartPage/cart/Cart.jsx';
import { AuthProvider } from '@/context/AuthProvider.jsx';
import { useEffect, useState } from 'react';

export function App() {
    const [pageName, setPageName] = useState('Shop');

    useEffect(() => {}, [pageName]);

    return (
        <AuthProvider>
            <Header pageName={pageName} setPageName={setPageName} />
            <ContentBlock pageName={pageName} setPageName={setPageName} />
            {pageName === 'Shop' && <Showcase />}
            {pageName === 'Cart' && <Cart />}
            <Footer />
        </AuthProvider>
    );
}
