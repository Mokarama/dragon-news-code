import Findus from "../Findus";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";


const RighNavbar = () => {
    return (
        <div className="space-y-5">
           <SocialLogin></SocialLogin>
           <Findus></Findus>
           <QZone></QZone>
        </div>
    );
};

export default RighNavbar;