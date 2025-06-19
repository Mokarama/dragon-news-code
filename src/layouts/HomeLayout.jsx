import React from 'react';
import Hader from '../components/Hader';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/LeftNavbar';
import RighNavbar from '../components/layout-component/RighNavbar';

const HomeLayout = () => {
    return (
       <div className='poppins'>
         <hader>
            <Hader></Hader>
            <section className='w-11/12 mx-auto'>
               <LatestNews></LatestNews>
            </section>
         </hader>

         <nav className='w-11/12 mx-autopy-4'>
            <Navbar></Navbar>
         </nav>


         <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
            <aside className='left col-span-3'>
               <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'>Main Content</section>
            <aside className='col-span-3'>
               <RighNavbar></RighNavbar>
            </aside>
         </main>
       </div>
    );
};

export default HomeLayout;