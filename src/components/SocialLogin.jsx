import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="">
           <h2 className="font-semibold mb-3">Login with</h2> 
           <div className="*:w-full flex flex-col gap-2">
            <button className="btn"><FaGoogle></FaGoogle>Login With Google</button>
            <button className="btn"><FaGithub></FaGithub>Login With GitHub</button>
           </div>
        </div>
    );
};

export default SocialLogin;