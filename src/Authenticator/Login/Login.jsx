import React from "react";
import { Link } from "react-router-dom";
import "../Signup/Signup.scss";

const Login = () => {
  return (
    <div className="signin">
      <form className="form">
        <p className="title">Login</p>
        <label>
          <span>Email</span>
          <input className="input" type="email" placeholder="" required="" />
        </label>

        <label>
          <span>Password</span>
          <input className="input" type="password" placeholder="" required="" />
        </label>
        <button className="submit">Submit</button>
        <span className="signin">
          Have not an Account ?{" "}
          <Link className="link1" to={"/signup"}>
            Sign in
          </Link>{" "}
        </span>
      </form>
    </div>
  );
};
export default Login;
