import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="bottom">
            <div class="col">
                <img src={require("../paymentImg/graphstic.png")} alt="" />
                <h4>Contact</h4>
                <p><strong>Address:</strong>562 Baneshwor Road, Street 32, Kathmandu</p>
                <p><strong>Phone:</strong>9825506216</p>
                <p><strong>Hours:</strong>10:00 -18:00, Sun-Fri</p>
                <div class="follow">
                    <h5>Follow us</h5>
                    <div class="icon">
                        <a href="https://www.facebook.com/profile.php?id=100088643149442"><i
                            class="fab fa-facebook"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="col">
                <h4>My Account</h4>
                <a href="#">Sign ln</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
            <div class="col">
                <h4>Install App</h4>
                <p>From App store or Google Play</p>
                <div class="row">
                    <img src={require("../paymentImg/android.png")} alt="" />
                    <img src={require("../paymentImg/apple.png")} alt="" />
                </div>

                <p>Secured Payment Gateways</p>
                <div class="row">
                    <img src={require("../paymentImg/visa.png")} alt="" />
                    <img src={require("../paymentImg/master.png")} alt="" />

                    <img src={require("../paymentImg/logo1.png")} alt="" />
                </div>
            </div>
            <div class="copywrite">
                ©2023.graphstick Nepal || All right Reservered
            </div>

        </footer>
    )
}

export default Footer
