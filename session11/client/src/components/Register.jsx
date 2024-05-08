import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [user,setUser]=useState({
        username:'',
        email:"",
        password:"",
        role:0
    })
    const navigate= useNavigate();
    // hàm đăng kí tài khoản
    const register=()=>{
        // console.log("đăng kí!");
        console.log(1111,user);
        // đi tiến hành đăng kí
       let reponse= axios.post("http://localhost:8080/api/v1/register",user);
       // chuyển sang trang đăng nhập 
       navigate("/login");
    }
    const handleChange=(e)=>{
        let name= e.target.name;
        let value=e.target.value;
        setUser({
            ...user,[name]:value
        })
    }
  return (
    <div>
        Register <br />
        <label htmlFor="">username</label>
        <input
         name="username"
         type="text"
         onChange={handleChange}
         /> <br />
        <label htmlFor="">email</label>
        <input 
         name="email"
        type="text" 
         onChange={handleChange}

        /> <br />
        <label htmlFor="">password</label>
        <input
         name="password"
         type="password"
         onChange={handleChange}

         /> <br />
         <label htmlFor="">confirm password</label>
        <input
        name="confirmpassword"
         type="password" 
         onChange={handleChange}

         /> <br />
        <button onClick={register}>register</button>
    </div>
  )
}
