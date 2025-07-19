import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const premiumUser = useSelector((store) => store.premium.isPremiumUser);
  const navigate = useNavigate();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      // console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);



  if (!premiumUser) {
    return (
      <>
        <h1 className="text-center my-10 text-bold text-white text-4xl">
          You are not premium User. Buy Premium to Chat with Your Connections.
        </h1>
        <div className="flex justify-center">
          <button
            className="text-white bg-blue-500 hover:bg-blue-700 rounded-lg p-2 transition-colors duration-200"
            onClick={() => navigate("/premium")}
          >
            Buy Premium
          </button>
        </div>
      </>
    );
  }

  if (!connections || connections.length === 0) {
    return (
      <h1 className="text-center my-10 text-bold text-white text-4xl">
        No Connection Found!
      </h1>
    );
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-4xl">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, about, gender, age, photoUrl } =
          connection;
        return (
          <div
            key={_id}
            className="flex items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
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
            <Link className="ml-auto btn bg-primary" to={"/chat/" + _id}>
              <button className="btn-primary">Chat</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
