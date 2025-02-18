import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import {BASE_URL} from '../utils/constants.js'
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from "../utils/userSlice.js"
import { useEffect } from 'react';

const Body = () => {

  const disptach = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user); // bar bar api call na krna pdhe

  // because jb refresh krenge to login hi krna chaiye
  const fetcheUser = async () => {
    if(userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view",{
        withCredentials: true,
      });
      disptach(addUser(res.data));

    } catch (error) {

      if(error.status === 401){
        navigate("/login");
      }
      console.log(error);
    }
  }

  // jb component load hoga to sbse phle uske sath useEffect load hoga
  useEffect(() => {
    fetcheUser()
  },[])


  return (
    <div>
        <NavBar/>
        <Outlet/> 
        {/*  any childern route of body will render here */}
        <Footer />
    </div>
  )
}

export default Body;