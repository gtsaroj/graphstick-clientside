import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
import { Heart, X } from "lucide-react";
import SearchUI from "../SearchUI/SearchUI";

const LoginProfile = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    removeToken();
    navigate("/login", { replace: true });
    message.success(`logout`);
    window.location.reload();
    persistor.purge();
  };
  return (
    <div className="profile">
      <div className="setting i">
        <Link to={"/profile"} className="link2 i">
          <SettingsIcon /> <span className=" ">Manage My account</span>
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
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    removeToken();
    navigate("/login", { replace: true });
    message.success(`logout`);
    window.location.reload();
    persistor.purge();
  };
  return (
    <div className="profile">
      <div className="setting i">
        <Link to={"/profile"} className="link2 i">
          <SettingsIcon /> <span className=" ">Manage My account</span>
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
  );
};

const DropDown = () => {
  return (
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
  );
};



const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const cartProducts = useSelector((state) => state.cart.products);
  const wishlistProducts = useSelector((state) => state.wish.products);

  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 left-0 right-0 bottom-0 py-2 flex flex-col items-center gap-1 z-[4] bg-[#06d1ff] justify-center w-full">
          <div id="header" className="flex items-center justify-between w-full  ">
      <Link className="link w-[50px] " to="/">
        <img  className="w-full h-full transform scale-[1.3] rounded-md" src={require("../paymentImg/graphstic.png")} alt="" />
      </Link>

      <ul
        
        id="navbar"
        style={{ right: menuVisible ? "0px" : "-250px" }}
        className="top-[73px] "
      >
        <li className="hidden  sm:visible">
        <SearchUI />
          </li>
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
          <Link className="link font-ubuntu" to={"/blog"}>
            Blog
          </Link>
        </li>
        <li>
          <Link className="link " to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li
          className=" relative link cursor-pointer sm:visible invisible"
          onClick={() => navigate("/wishlist")}
        >
          <Heart />
          <span
            className={`absolute top-[-10px] right-[22px] z-[-1] text-white bg-red-500 rounded-full  text-center text-[13px] font-ubuntu w-[20px] h-[20px] ${
              wishlistProducts?.length > 0 ? "visible" : "invisible"
            }`}
          >
            {wishlistProducts?.length > 0 ? wishlistProducts.length : null}
          </span>
        </li>
        <li id="secondpara">
          <Link className="link" to="/cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
          <span>{cartProducts.length > 0 && cartProducts.length}</span>
        </li>
        <li className="accountHandle invisible sm:visible">
          <div className="account2">
            <AccountCircleIcon /> {user ? user.username : " "}
          </div>
          {user ? <LoginProfile /> : <DropDown />}
        </li>
      </ul>
      <div className="mobile">

        <li>
          <Heart className="relative" onClick={() => navigate("/wishlist")} />
          <span
            className={`absolute top-[-10px] right-[22px] z-[-1] text-white bg-red-500 rounded-full  text-center text-[13px] font-ubuntu w-[20px] h-[20px] ${
              wishlistProducts?.length > 0 ? "visible" : "invisible"
            }`}
          >
            {wishlistProducts?.length > 0 ? wishlistProducts.length : null}
          </span>
        </li>
        <Link className="link link3" to={"/cart"}>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>
        <span
          className={`absolute top-[15px] right-[113px] z-[-1] text-white bg-red-500 rounded-full  text-center text-[13px] font-ubuntu w-[17px] h-[17px] ${
            cartProducts?.length > 0 ? "visible" : "invisible"
          }`}
        >
          {cartProducts?.length > 0 ? cartProducts.length : null}
        </span>

        <li className="accountHandle sm:invisible">
          <div className="account2">
            <AccountCircleIcon /> {user ? user.username : " "}
          </div>
          {user ? <Profile /> : <DropDown />}
        </li>

        <div
          className="div  transition-all duration-500"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          {menuVisible ? <X /> : <WidgetsIcon />}
        </div>
      </div>
      </div>
      <div className="w-full px-10 sm:w-[400px]">
        <SearchUI/>
      </div>
</div>
  );
};

export default Navbar;
