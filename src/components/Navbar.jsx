import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {

  const {user, LogOut}=useContext(AuthContext);


  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={userIcon} alt="" />
        </div>
        {
          user && user?.email ? <Link onClick={LogOut} to={'/auth/login'} className="btn btn-neutral rounded-none">Log-Out</Link> : <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
