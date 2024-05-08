import React, { useEffect, useState } from 'react';
import axios from "axios";
export default function Home() {
    const [user,setUser]=useState([]);


    useEffect(async()=>{
      let users=  await axios.get("http://localhost:8080/api/v1/users");
      console.log(11111,users.data.data);
      setUser(users.data.data);

    },[])
  
  return (
    <div>Home
        {/* hiển thị toàn bộ danh sách 
        + nếu là user thì chỉ xem danh sách user
        + nếu là admin thì được quyền thêm sửa xóa
         */}
        {/* <ul>
             {user.map((item,index,arr)=>{
            return (<>
                  <li>{item.id}</li>
                <li>{item.username}</li>
                <li>{item.email}</li>
                <li>{item.role}</li>
            </>)
            
         })}

        </ul> */}
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                </tr>
            </thead>
            <tbody>
               {user.map((item,index,arr)=>{
                return (
                     <tr>
                        <td>{index+1}</td>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                     </tr>
                )
               })}
            </tbody>
        </table>
    </div>
  )
}
