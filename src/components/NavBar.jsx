import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    
    <div className="navbar  bg-base-200">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">💑devTinder</Link >
  </div>

   {user && (<div className="flex-none gap-2">
    <div className="form-control">Welcome, {user.data.firstName} </div>
    
      <div className="dropdown dropdown-end mx-5 flex">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user photo"
            src={user.data.photoUrl}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/setting">Settings</Link></li>
        <li><Link to="/logout">Logout</Link ></li>
      </ul>
    </div>
  </div>)}
</div>
  )
}

export default Navbar;