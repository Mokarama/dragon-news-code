
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const AuthLayout = () => {
    return (
        <div>
           <header className='w-11/12 py-8 mx-auto bg-[#F3F3F3]'>
              <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;