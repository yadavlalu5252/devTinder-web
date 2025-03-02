import React, { useEffect } from 'react';
import {BASE_URL} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import {addConnections} from "../utils/connectionSlice";
import axios from 'axios';

const Connections = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch();

  const fetchConnections = async() => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections",{
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchConnections()
  },[]);

  if(!connections) return;
  if(!connections.length === 0) return <h1>No Connection Found!</h1>

  return (
    <div className='text-center my-10'>
      <h1 className='text-bold text-white text-4xl'>Connections</h1>
      {connections.map((connection) => {
        const {firstName, lastName, about, gender, age, photoUrl} = connection;
        return(
          <div className='flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto'>
            <div>
            <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl || "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} />
            </div>
            <div className='text-left mx-4'>
            <h1 className='font-bold text-lg'>{firstName + " " + lastName}</h1>
            {age && gender && <h2>{age+gender || 20}</h2>}
            <p>{about}</p>
            </div>
            
            
          </div>
      )})}
    </div>
  );
};

export default Connections;