import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function Signin(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function onSignin(e){
    e.preventDefault();
    const response = await fetch("/signin",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
     if(data.error){
       toast.error(data.error)
     }else{
      localStorage.setItem("jwt",data.token)
      localStorage.setItem("user",JSON.stringify(data.user))
      localStorage.setItem("loginStatus",true)
       toast.success(data.message);
       navigate("/");
     }
    })

   }


    return(
        <div>
            <div className="container text-center card border-dark shadow" style={{ width: "25rem" }}>
         <div className="card-header">SIGN IN</div>
         <div className="card-body">
          <form onSubmit={onSignin}>
          <div className="mb-3 form-group">
         <input
           type="text"
           className="form-control"
           id="email"
           placeholder="Enter Your Email"
           onChange={function changename(event) {
            setEmail(event.target.value);
          }}
          value={email}
         />
       </div>
       <div className="mb-3 form-group">
         <input
           type="password"
           className="form-control"
           id="password"
           placeholder="Enter Your Password"
           onChange={function changename(event) {
            setPassword(event.target.value);
          }}
          value={password}
         />
       </div>
       <div className="mb-3 form-group">
         <input
           type="submit"
           value="Sign In"
           className="btn btn-primary"
         />
       </div>
       <h6><Link to="/">Don't have an account? Click here</Link></h6>

          </form>
          <ToastContainer />

         </div>
       </div>
        </div>
        
    )
}