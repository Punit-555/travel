import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import logo from "../../assets/img/logo-black.svg";
import swal from "sweetalert";

import axios from 'axios';
// Sample User

const user = {"email" : "admin@gmail.com" , "password" : "12345"}


console.log("USer Email----->" , user);

const UserLogin = () => {

  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit } = useForm();




  const onSubmit = (data) => {

   
    try{
      const response = axios.post('http://localhost:3000/authenticate' , {email , password}).then((res)=>res);
      console.log("response " ,response.data);
    } catch(error){
      console.log(error.response.data);
    }

     

    if (data) {
      swal("Success!", "SignUp  succesfully!", "success");
    } else {
      swal("Oops!", "Enter Correct Credentials", 'error');
    }
    console.log("LOGIN DATA", data);
}

console.log("EMAILLLLLLLLLllllllllll= ", email);
console.log("PAsssssssssssssssssss", password);

  return (
    <>
      <div className="card mainCard">
        <img src={logo} alt="" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input type="email" {...register("email")} required={true}  value={email}  onChange={(event) => setEmail(event.target.value)} />
          
          <label>Password</label>
          <input type="password" {...register("password")} required={true} value={password} onChange={(event) => setPassword(event.target.value)} />
         
          <button type="submit" >Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserLogin;

