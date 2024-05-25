import React from 'react';
import Header from '../../component/website/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/website/Footer';
// Website Main
const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Main;
