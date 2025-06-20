import swimming from "../assets/swimming.png";
import classroom from "../assets/class.png";
import playGround from "../assets/playground.png";
import bg from "../assets/bg.png"
const QZone = () => {
    return (
        <div className="bg-base-300 p-2 rounded mb-2">
          
         <div><img src={swimming} alt="" /></div>   
         <div><img src={classroom} alt="" /></div>   
         <div><img src={playGround} alt=""/></div>  
        <div><img className="rounded" src={bg} alt="" /></div>    
        </div>
    );
};

export default QZone;