import React from 'react';
import './SingleJob.css'
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import JobDeatils from '../JobDeatils/JobDeatils';
const SingleJob = ({ job }) => {
    const { jobTitle, company, salary, img, location, jobLocation, id} = job;
    return (
        <div className='p-6 border border-gray-200 rounded-lg'>
            <img className='job-img' src={img} alt="" />
            <h1 className='mb-3 text-3xl font-bold'>{jobTitle}</h1>
            <h4 className='text-gray-600'>{company}</h4>
            <div className='flex gap-4 my-4'>
                <button className='p-2 border border-gray-300 rounded-md text-violet-600'>{jobLocation}</button>
                <button className='p-2 border border-gray-300 rounded-md text-violet-600'>Full Time</button>
            </div>
            <div className='flex gap-4'>
                <p><MapPinIcon className="inline-block w-4 h-4 text-gray-800 me-2" />{location}</p>
                <p><BriefcaseIcon className="inline-block w-4 h-4 text-gray-800 me-2" />Salary: {salary}</p>
            </div>
            <Link to={`details/${id}`}>
                <button className='p-2 mt-4 text-xl font-semibold text-white rounded-md bg-violet-600'>View Details</button>
            </Link>
        </div>
    );
};

export default SingleJob;