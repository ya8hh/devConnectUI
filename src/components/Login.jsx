import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [emailId,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const handleLogin = async()=>{
      try {
         const res = await  axios.post("http://localhost:3000/login",{
          emailId,
          password
        },{
          withCredentials:true
        })
        dispatch(addUser(res.data));
        navigate("/");
        
      } catch (error) {
        console.error(error)
      }
  }



  return (
    <div className='flex justify-center my-12'>
    <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
   <div>
    <label className="form-control w-full max-w-xs my-2">
  <div className="label py-4">
    <span className="label-text">Email Id</span>
  </div>
  <input type="text" placeholder="Type here" value={emailId} onChange={(e)=>{setEmailId(e.target.value)}} className="input input-bordered w-full max-w-xs" />
</label>
 <label className="form-control w-full max-w-xs my-2">
  <div className="label py-4">
    <span className="label-text">Password</span>
  </div>
  <input type="text" placeholder="Type here" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="input input-bordered w-full max-w-xs" />
</label>

   </div>
    <div className="card-actions justify-center">
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login  