import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="setting">
        <SettingsIcon /> <span>Manage My account</span>
      </div>
      <div className="orders">
        <InventoryIcon /> or
      </div>
      <div className="wishlist">
        <FavoriteIcon /> <span>My Whishlist</span>
      </div>
      <div className="review">
        <ReviewsIcon /> <span>My Review</span>
      </div>
      <div className="logout">
        <LogoutIcon /> <span>Logout</span>
      </div>
    </div>
  );
};

export default Profile;
