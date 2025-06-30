import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  
  const [error, setError] =useState({})

  const location =useLocation();
  // console.log(location);

  const navigate =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        navigate(location?.state ? location.state : "/")

      })
      .catch((err) => {
        // alert(error.code);
        setError( {...error , login: err.code} )
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F3F3F3]">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-bold">Email address</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200"
              placeholder="Enter your email address"
            />
            <label className="label font-bold">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-base-200"
              placeholder="Enter your password"
            />

        {
          error.login && (
           <label className="label  text-red-600 text-xl">
           {error.login}
          </label>
          )
        }    

        {/* <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password
          </a>
        </label> */}
        
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
        </form>
        <p>
          Dont't Have An Account?
          <Link to="/auth/register">
            <span className="text-red-600">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

