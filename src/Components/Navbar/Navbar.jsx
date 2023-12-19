import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { removeToken } from "../../Helper";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";
import { message } from "antd";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { persistor } from "../../CardReducer/store";
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
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      // Remove the event listener when the menu is not visible
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuVisible]);

  function handleMove() {
    setMenuVisible(true);
  }

  const products = useSelector((state) => state.cart.products);

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handlelogout = () => {
    removeToken();
    navigate("/login", { replace: true });
    message.success(`logout`);
    window.location.reload();
    persistor.purge();
  };

  return (
    <section id="header">
      <Link className="link" to="/">
        <img src={require("../paymentImg/graphstic.png")} alt="" />
      </Link>
      <ul
        id="navbar"
        ref={menuRef}
        style={{ right: menuVisible ? "0px" : "-250px" }}
      >
        <li>
          <Link className="link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={"/Products/id"}>
            Products
          </Link>
        </li>
        <li>
          <Link className="link" to={"/blog"}>
            Blog
          </Link>
        </li>
        <li>
          <Link className="link" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li id="secondpara">
          <Link className="link" to="/cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
          <span>{products.length > 0 && products.length}</span>
        </li>
        <li className="accountHandle">
          <div className="account2">
            <AccountCircleIcon /> {user ? user.username : " "}
          </div>
          {user ? (
            <div className="profile">
              <div className="setting i">
                <Link to={"/profile"} className="link2 i">
                  <SettingsIcon /> <span>Manage My account</span>
                </Link>
              </div>
              <div className="orders i">
                <InventoryIcon /> My orders
              </div>
              <div className="wishlist i">
                <FavoriteIcon /> <span>My Whishlist</span>
              </div>
              <div className="review i">
                <ReviewsIcon /> <span>My Review</span>
              </div>
              <div className="logout i" onClick={handlelogout}>
                <LogoutIcon /> <span>Logout</span>
              </div>
            </div>
          ) : (
            <ul className="dropdown">
              <div className="boxdiv"></div>
              <li>
                <Link className="link1 i" to={"/signup"}>
                  <HowToRegIcon /> Sign in
                </Link>
              </li>
              <li>
                <Link className="link1 i" to={"/login"}>
                  <LoginIcon /> Login
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="mobile">
        <Link className="link link3" to={"/cart"}>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>
        <span className="link4">{products.length > 0 && products.length}</span>
        <div className="div" onClick={handleMove}>
          <WidgetsIcon />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
