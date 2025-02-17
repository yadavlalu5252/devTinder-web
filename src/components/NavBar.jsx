import { useSelector } from "react-redux";


const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    
    <div className="navbar  bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">💑devTinder</a>
  </div>

   {user && (<div className="flex-none gap-2">
    <div className="form-control">Welcome, {user.data.firstName} </div>
    
      <div className="dropdown dropdown-end mx-5 flex">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user photo"
            src="https://images.squarespace-cdn.com/content/v1/6242742320e8a26d18e9a6cf/d7e4f71b-3c19-44af-a6f4-6545f65f3a29/CS-Team2-Avatar.png?format=500w" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>)}
</div>
  )
}

export default Navbar;