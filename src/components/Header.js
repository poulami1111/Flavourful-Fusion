import React from 'react';
import '../App.css'
import { LOGO_URL } from '../utils/constants';





const Header = () => {

    const btnName="Logout";
    return (
        <div className="header"
         style={{
                display:'flex',
                border:'1px solid black',
                margin:'5px',
                padding:'1px',
                
                }}>
            <div className="logo">
                <img src={LOGO_URL} alt='' />
            </div>
            <div className="nav-items">
           
                <ul >
                
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='Login'>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};



export default Header;








  

