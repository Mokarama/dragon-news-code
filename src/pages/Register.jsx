import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  /*const handleSubmit =(event)=>{
   event.preventDefault();
    console.log(event);
    const name =event.target.name.value;
    const photo =event.target.photo.value;
    const email =event.target.email.value;
    const password =event.target.password.value;
    console.log(name,photo,email, password);

  }*/
    const {createNewUser,setUser, updateUserProfile} =useContext(AuthContext)

    const [error, setError] =useState({});

    const navigate =useNavigate()

    const handleSubmit = (e)=>{
      e.preventDefault();
      const form =new FormData(e.target);

      const name =form.get("name");
      if(name.length <5){
        setError({...error , name:"must be more the 5 character long"});
        return
      }
      const photo =form.get("photo");
      const email =form.get("email");
      const password =form.get("password");
      // console.log({name,photo,email,password});

      createNewUser(email, password)
      .then((result)=>{
        const user=result.user;
        setUser(user);
        // console.log(user);
        updateUserProfile({displayName:name, photoURL:photo})
        .then(()=>{
          navigate("/")
        })
        .catch((err)=>{
            // console.log(err)
        })
      })

      .catch((error)=>{
        const errorCode =error.code;
        const errorMessage =error.message;
        // console.log(errorCode, errorMessage)
      })


    }
    
    return (
       <div className="min-h-screen flex justify-center items-center bg-[#F3F3F3]">
        
      <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            {/* -----Name input ---- */}
            <label className="label font-bold">Your Name</label>
            <input name="name" type="text" className="input bg-base-200" placeholder="Enter your name" />


          {
            error.name &&            <label className="label text-xs text-rose-500">
              {error.name}
              </label>
          }



            {/* ---photo URL--- */}
            <label className="label font-bold">Photo URL</label>
            <input name="photo" type="text" className="input bg-base-200" placeholder="Enter your password" />

            {/* -----Email------ */}
            <label className="label font-bold">Email address</label>
            <input name="email" type="email" className="input bg-base-200" placeholder="Enter your email address" />

             {/* -----password------ */}
            <label className="label font-bold">Password</label>
            <input name="password" type="password" className="input bg-base-200" placeholder="Enter your password" />
           
           <p>Accept Term & Conditions</p>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>Already Have An Account?<Link to="/auth/login"><span className="text-red-600">Login</span></Link></p>
      </div>
      </div>
    );
};

export default Register;