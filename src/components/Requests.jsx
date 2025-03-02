import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
      // console.log(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return <h2>Some error</h2>;
  if (!requests.length === 0) return <h1>No Connection Found!</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-4xl">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, about, gender, age, photoUrl } =
          request.fromUserId;
        return (
          <div key={_id} className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto">
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={
                  photoUrl ||
                  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                }
              />
            </div>
            <div className="text-left mx-4">
              <h1 className="font-bold text-lg">
                {firstName + " " + lastName}
              </h1>
              {age && gender && <h2>{age + gender || 20}</h2>}
              <p>{about}</p>
            </div>
            <div>
            <button className="btn btn-primary mx-2">Reject</button>
            <button className="btn btn-secondary mx-2">Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
