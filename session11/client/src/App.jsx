import React from 'react'
import {Route,Routes} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
export default function App() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </div>
  )
}
