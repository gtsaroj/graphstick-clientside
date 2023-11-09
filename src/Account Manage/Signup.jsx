import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = ()=>{

    return(
<div className="signup">
    <h3>Sign up</h3>
    <form>
        <div className="fullname">
<input type="text" name="firstname" placeholder="First Name"></input>
<input type="text" name="lastname" placeholder="Last Name"></input>
        </div>
        <div className="email">
            <input type="email" name="email" placeholder="Email"></input>
        </div>
        <div className="password">
            <input type="text" name="password" placeholder="Password"></input>
        </div>
        <div className="confirmpassword">
            <input type="text" name="confirmpassword" placeholder="Confirm Password"></input>
        </div>
    </form>
    <div className="policy">
        <label forhtml="">
            <input type="checkbox" name="policy" ></input> I accept the terms and condition of use & privacy policy
        </label>
    </div>
   <button> Sign Up</button>
  <div className="already-exists">
    <span>Aready have an Account ?</span> <Link to={"/login"}>Login here</Link>
  </div>
</div>
    )
}

export default Signup;