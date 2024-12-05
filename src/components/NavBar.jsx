import React from 'react';
import { Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className=''>
        <nav className='flex justify-between bg-black px-3 py-4 text-center pt-4  w-full h-16 '>

            {/* Logo.... */}
            <div className='flex mb-2 mt-0'>
              
              <div className='pl-32'>
                <h2 className='font-bold bg-white text-black border-1 rounded px-2 py-2'>UC </h2>
                </div>

              <div className='text-white pl-2'>
                <h2 className='font-bold '>Urban</h2>
                <h3 className='font-semibold'>Company</h3>
              </div>

            </div>

            {/* link... */}

            <div className='flex gap-5 pr-32 text-white font-bold mt-1.5'> 
              <Link to="/RegisterProfessional">Register As A Professional</Link>
                <Link to="/Help"> Help</Link>
                <Link to="/LoginSignup">Login/Sign Up</Link>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;
