import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setPremium } from "../utils/premiumSlice";

const Premium = () => {
  // const [isUserPremium, setIsUserPremium] = useState(false);
  const dispatch = useDispatch();
  const isUserPremium = useSelector((store)=> store.premium.isPremiumUser);
  const [membershipType, setMembershipType] = useState("");
  
  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });
    // console.log(res?.data?.membershipType);
    if (res.data.isPremium) {
      // setIsUserPremium(true);
      dispatch(setPremium(res.data.isPremium))
      setMembershipType(res.data.membershipType); 
    }
  };

  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { membershipType: type },
      { withCredentials: true }
    );

    const { amount, keyId, currency, notes, orderId } = order.data;
    const option = {
      key: keyId,
      amount,
      currency,
      name: "Dev Tinder",
      description: "Connect to other developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contant: "9372401016",
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyPremiumUser,
    };
    // It will opens the razorpay dialog
    const rzp = new window.Razorpay(option);
    rzp.open();
  };

  return isUserPremium ? (
    <div className="m-10">
      <h1 className="flex text-3xl font-bold items-center justify-center">You are a {membershipType.toUpperCase()} Premium User</h1>
      
    </div>
  ) : (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - 100 Connection Request per Day</li>
            <li> - Verified Blue Tick</li>
          </ul>
          <button
            onClick={() => handleBuyClick("silver")}
            className="btn btn-secondary"
          >
            Buy Silver
          </button>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Membership</h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - Unlimited Connection Request per Day</li>
            <li> - Verified Blue Tick for 6months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-primary"
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
