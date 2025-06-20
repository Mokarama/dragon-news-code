import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Findus = () => {
    return (
        <div>
            <h2 className="font-semibold">Find Us On</h2> 
            
        <div className="join flex join-vertical *:bg-base-100">
            <button className="btn join-item justify-start"><FaFacebookF></FaFacebookF>Facebook</button>
            <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
            <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
        </div>
        </div>
    );
};

export default Findus;