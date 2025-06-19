
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between item-center'>
            <div className=''></div>
            <div className='nav space-x-5'>
                <Link to="/home">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login flex gap-2 item-center'>
                <div><img src={userIcon} alt="" /></div>
                <div className='btn btn-neutral rounded'>Login</div>
            </div>
        </div>
    );
};

export default Navbar;