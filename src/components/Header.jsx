import moment from "moment";
import logo from "../assets/logo.png";


const Header = () => {
    // console.log(import.meta.env.VITE_a);
    return (
        <div>
         <div className="flex flex-col justify-center items-center gap-2 py-2">
            <div className="logo">
                <img className="w-[300px]" src={logo} alt="" />
        </div>

        <h2 className="text-gray-500 text-xl ">Journalism without Fear or Favour</h2>
        <p>{moment().format('dddd MMMM Do YYYY')}</p>
        </div>
        </div>
    );
};

export default Header;