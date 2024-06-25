import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ReactLenis, useLenis } from 'lenis/react'

const Layout = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })
    return (
        <ReactLenis root>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </ReactLenis>
    );
}

export default Layout;
