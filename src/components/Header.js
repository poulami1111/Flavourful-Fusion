import React from 'react';
//import ReactDOMClient from "react-dom/client";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://cdn.sanity.io/images/kts928pd/production/b374a124fc505ab3255fadae257d90e8e4a4855e-449x432.png" alt='' />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// const styleCard = {
//     backgroundColor: "#f0f0f0",
// };

const ResturantCard = (props) => {
    const{resName,cuisine}=props;
    return (
        <div className="res-card">
             <img  className="res-logo" src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" alt="res-logo"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.3 stars</h4>
            <h5>38 minutes</h5>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body-items">
            <div className="search">Search</div>
            <div className="Resturants-container">
                <ResturantCard  resName="Meghana Foods" cuisine="Biriany,North Indian" />
                <ResturantCard  resName="KFC" cuisine="Burger,Crispy Chicken"/>
                
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

// Create the root once and reuse it

export default AppLayout;
