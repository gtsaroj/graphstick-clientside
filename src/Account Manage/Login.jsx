import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Login = ()=>{
    return(
<div className="login signup">
    <h3>Login</h3>
    <form>
        <div className="email">
            <input type="email" name="email" placeholder="Email"></input>
        </div>
        <div className="password">
            <input type="text" name="password" placeholder="Password"></input>
        </div>  
    </form>
    <div className="policy">
        <label forhtml="">
            <input type="checkbox" name="policy" ></input> I accept the terms and condition of use & privacy policy
        </label>
    </div>
   <button className="auth"> Login</button>
  <div className="already-exists">
    <p>Have not an Account?</p> <Link to={"/login"}>Sign up here</Link>
  </div>
</div>
    )

}

export default Login