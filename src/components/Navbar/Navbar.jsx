import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className='mb-8 bg-gray-200 md:mb-0'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ?
                    <XMarkIcon className="w-6 h-6" />
                    : <Bars3Icon className="w-6 h-6" />
                }</span>
            </div>
            <div className={`md:flex justify-between items-center md:static duration-700 p-4 md:md:w-9/12 mx-auto ${open ? 'md:mt-0' : '-mt-72 md:-mt-0'}`}>
                <h1 className='text-3xl'>Job Forest</h1>
                <div className='gap-5 md:flex'>
                    <Link to="/">Home</Link> <br />
                    <Link to="/statistics">Statistics</Link> <br />
                    <Link to="/applied-job">Applied Job</Link> <br />
                    <Link to="/blog">Blog</Link>
                </div>
                <button className='p-3 text-xl text-white rounded-md bg-violet-600'>Star Applying</button>

            </div>
        </nav>
    );
};

export default Navbar;