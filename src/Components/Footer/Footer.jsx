import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="bottom">
                <img src={require("../paymentImg/graphstic.png")} alt="" />
                <div className="col-container">
                <div class="col">
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong>562 Baneshwor Road,<br/> Street 32, Kathmandu
        </p>
        <p>
          <strong>Phone:</strong>9825506216
        </p>
        <p>
          <strong>Hours:</strong>10:00 -18:00, Sun-Fri
        </p>
        <div class="follow">
          <h5>Follow us</h5>
          <div class="icon">
            <Link href="https://www.facebook.com/profile.php?id=100088643149442">
              <i class="fab fa-facebook"></i>
            </Link>
            <Link href="">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link href="">
              <i class="fab fa-instagram"></i>
            </Link>
            <Link href="">
              <i class="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>About</h4>
        <Link href="/about">About us</Link>
        <Link href="#">Delivery Information</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms & Conditions</Link>
        <Link to={'/contact'}>Contact Us</Link>
      </div>
      <div class="col">
        <h4>My Account</h4>
        <Link to={"/signup"}>Sign ln</Link>
        <Link to={"/cart"}>View Cart</Link>
        <Link to={"/wishlist"}>My Wishlist</Link>
        <Link to={"/cart"}>Track My Order</Link>
        <Link to={""}>Help</Link>
      </div>
      <div class="col">
        <p>Secured Payment Gateways</p>
        <div class="row">
          <img src={require("../paymentImg/logo1.png")} alt="" />
        </div>
      </div>
                </div>

      <div class="copywrite">
        ©2023.graphstick Nepal || All right Reservered
      </div>
    </footer>
  );
};

export default Footer;
