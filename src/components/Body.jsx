import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addUser} from "../utils/userSlice"

const Body = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=>store.user);

  const fetchUser = async()=>{
    try {
        const res = await axios.get("http://localhost:3000/profile/view",
      {
        withCredentials:true,
      }
    )
    dispatch(addUser(res.data))
    } catch (error) {
      if(error.status===401)
     { navigate("/login");}
      console.error(error);
      
    }
  }
  useEffect(()=>{
    if(!userData){
      fetchUser();
    }
  }, []);
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body