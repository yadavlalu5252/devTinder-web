
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import {FaCheckCircle} from "react-icons/fa";

const UserCard = ({ user }) => {

  const { _id, firstName, lastName, about, gender, age, photoUrl, isPremium } = user;
  console.log("Premium User:", isPremium);
  console.log("age is: ", age);
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/sent/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img
          src={
            photoUrl ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex items-center">
          {firstName + " " + lastName}
          {isPremium && (
            <FaCheckCircle className="text-blue-500 ml-1" title="Verified" />
          )}
        </h2>
        {age && gender && <p>{age + " , " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;