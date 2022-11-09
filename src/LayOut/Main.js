import React from 'react';
import { Outlet } from 'react-router-dom';
import UseTitle from '../assets/UseTitle';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';

const Main = () => {
     UseTitle('main')
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;