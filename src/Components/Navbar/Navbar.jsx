import React, { useState, useRef } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import WidgetsIcon from '@mui/icons-material/Widgets';
import { useEffect } from 'react';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);


    useEffect(() => {
        function handleOutsideClick(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Clicked outside of the menu, so close it
                setMenuVisible(false);
            }
        }

        // Attach the event listener when the menu is visible
        if (menuVisible) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            // Remove the event listener when the menu is not visible
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuVisible]);

    function handleMove() {
        setMenuVisible(true);
    }


    const products = useSelector(state => state.cart.products)
    return (
        <section id="header">
            <Link className='link' to="#"><img src={require('../paymentImg/graphstic.png')} alt="" /></Link>
            <ul id="navbar" ref={menuRef} style={{ right: menuVisible ? '0px' : '-250px' }}>
                <li><Link className='link' to={"/"}>Home</Link></li>
                <li><Link className='link' to={"/Products/:id"}>Products</Link></li>
                <li><Link className='link' to={"/blog"}>Blog</Link></li>
                <li><Link className='link' to={"/about"}>About</Link></li>
                <li><Link className='link' to={"/contact"}>Contact</Link></li>
                <li id="secondpara">

                    <Link className="link" to="/cart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                    <span>{products.length || products.length === 0 && " "}</span>
                </li>

            </ul>
            <div class="mobile" >
                <Link className='link' to={"/cart"}><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                <div className="div" onClick={handleMove}>
                    {/* <WidgetsIcon /> */}
                </div>

            </div>
        </section >
    )
}

export default Navbar
