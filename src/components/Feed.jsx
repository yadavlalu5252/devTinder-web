import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import axios from 'axios';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
   const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed) return; // if already exist dont return
    try {
      const res = await axios.get(BASE_URL+ "/feed",{withCredentials: true});
      // console.log("res is: "+res);
      dispatch(addFeed(res?.data?.data));
      
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getFeed();
  },[]);

  if(!feed) return;
  if(feed.length <= 0) return <h1 className='flex justify-center my-10'>No more users found right now Comeback after sometime!!</h1>
  return (
    feed && (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
    )
  );
}

export default Feed