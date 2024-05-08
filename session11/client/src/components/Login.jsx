import React, { useState } from 'react';
import axios from "axios";
export default function Login() {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const login= async()=>{
        console.log(11111,user);
        // tiến hành đi login
        const respone= await axios.post("http://localhost:8080/api/v1/login",user);
        console.log(111111,respone);
    }
    const handleChange =(e)=>{
        const name= e.target.name;
        const value=e.target.value;
        setUser({
            ...user,[name]:value
        })
    }
  return (
    <div>Login <br />
        <label htmlFor="">email</label>
        <input
        onChange={handleChange}
        name="email"
         type="text" 
         /> <br />
        <label htmlFor="">password</label>
        <input
        onChange={handleChange}
        name="password"
         type="text" />
         <button onClick={login}>Login</button>
    </div>
  )
}
