import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const products = useSelector(state => state.cart.products)
    return (
        <section id="header">
            <Link className='link' to="#"><img src={require('../paymentImg/graphstic.png')} alt="" /></Link>
            <ul id="navbar">
                <li><Link className='link' to={"/"}>Home</Link></li>
                <li><Link className='link' to={"/Products/:id"}>Products</Link></li>
                <li><Link className='link' to={"/blog"}>Blog</Link></li>
                <li><Link className='link' to={"/about"}>About</Link></li>
                <li><Link className='link' to={"/contact"}>Contact</Link></li>
                <li id="secondpara">

                    <Link className="link" to="/cart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                    <span>{products.length || products.length == 0 && " "}</span>
                </li>

            </ul>
            <div class="mobile">
                <Link className='link' to={"/cart"}><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                <i id="bar" class="fas fa-outdent"></i>

            </div>
        </section >
    )
}

export default Navbar
