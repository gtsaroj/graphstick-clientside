import React from "react";
import "./Signup.scss"
import { Link } from "react-router-dom";
const Signup = ()=>{
    return(
        <div className="signin">
            <form className="form">
    <p className="title">Login</p>
    {/* <p className="message">Signup now and get full access to our app. </p> */}
        <div className="flex">
        <label>
        <span>Firstname</span>
            <input className="input" type="text" placeholder="Enter your first name" required=""/>
          
        </label>

        <label>
        <span>Lastname</span>
            <input className="input" type="text" placeholder="Enter your last name" required=""/>
           
        </label>
    </div>  
            
    <label>
    <span>Email</span>
        <input className="input" type="email" placeholder="Enter your gmail" required=""/>
       
    </label> 
        
    <label>
    <span>Password</span>
        <input className="input" type="password" placeholder="Enter your password" required=""/>
      
    </label>
    <label>
    <span>Confirm password</span>
        <input className="input" type="password" placeholder="Enter your password" required=""/>
        
    </label>
    <button className="submit">Submit</button>
    <span className="signin">Already have an acount ? <Link className="link1" to={"/login"}>Login</Link> </span>
</form>
</div>
    )
  

}

export default Signup