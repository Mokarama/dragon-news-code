import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between item-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/home">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 item-center">
       
       
        {
          user && user?.email?
          <div>
            <img className="w-20 rounded-full" src={user?.photo} alt="" />
            <p>{user.displayName}</p>
          </div>
           : 
           <img src={userIcon} alt="" />

        }


        <div>
          <img src={userIcon} alt="" />
        </div>
     
     {
        user && user?.email? 
        <button onClick={logOut} className="btn btn-neutral rounded">Log-Out</button>
         :
         <Link to="/auth/login" className="btn btn-neutral rounded">
          Login
        </Link>
     }


        
      </div>
    </div>
  );
};

export default Navbar;
