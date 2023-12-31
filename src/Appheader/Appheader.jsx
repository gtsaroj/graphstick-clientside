
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { removeToken } from "../Helper";

 export const Appheader = ()=>{
     const {user} = useAuthContext();
     const navigate = useNavigate();

     const handlelogout = ()=>{
        removeToken()
            navigate('/signup', {replace: true});
        
     }

     return (
        <Space className="header_space">
          <Button className="header_space_brand" href="/" type="link">
            <CgWebsite size={64} />
          </Button>
          <Space className="auth_buttons">
            {user ? (
              <>
                <Button className="auth_button_login" href="/profile" type="link">
                  {user.username}
                </Button>
                <Button
                  className="auth_button_signUp"
                  type="primary"
                  onClick={handlelogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button className="auth_button_login" href="/signin" type="link">
                  Login
                </Button>
                <Button
                  className="auth_button_signUp"
                  href="/signup"
                  type="primary"
                >
                  SignUp
                </Button>
              </>
            )}
          </Space>
        </Space>
      );
}
