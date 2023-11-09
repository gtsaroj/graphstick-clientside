import React, { useState } from "react";

import Signup from "./Signup";
import Login from "./Login";
import "./Account.css"
const Account = ()=>{
const [visible, setVisible] = useState(false)
const [see, setSee] = useState(false)
    return(

      <div className="account">
       <div className="sign">
      <button onClick={()=> setVisible(!visible)}>Sign up</button>
      <div className="visible">
        {visible && <Signup/>}
      </div>
       </div>
       <div className="log">
       <button onClick={()=> setSee(!see)}>Login</button>
       </div>
       <div className="vis">
        {see && <Login/>}
       </div>
      </div>
    
    )

}

export default Account;