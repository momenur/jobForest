import React from 'react';
import logo from '../../images/hardy.png'

const Header = () => {
    return (
        <div className='bg-gray-200 '>
            <div className='items-center justify-between mx-auto md:flex md:w-9/12'>
                <div>
                    <h1 className='text-6xl font-bold mb-7'>One Step <br /> Closer To Your <br /> <span className='text-violet-500'>Dream Job</span></h1>
                    <p className='mb-7'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='p-3 text-2xl text-white rounded-md bg-violet-600'>Get Started</button>
                </div>
                <div>
                <img className='w-5/6 ms-auto' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;