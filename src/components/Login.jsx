import React, { useState } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {
  const [emailId, setEmailId] = useState("yadavlalu5252@gmail.com");
  const [password, setPassword] = useState("Lalu@357");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login",{
        emailId,
        password
      },
    {withCredentials: true});
   
    dispatch(addUser(res.data));
    return navigate("/")

    } catch (error) {
      setError(error?.response?.data || "Something went Wrong!!");
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email ID {emailId}</span>
              </label>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />

              <label className="label"></label>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label"></label>
            </div>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
