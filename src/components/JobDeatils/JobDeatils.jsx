import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BeakerIcon, MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import DetailsHeader from '../CommonHeader/CommonHeader';
import CommonHeader from '../CommonHeader/CommonHeader';

const JobDeatils = () => {
    const detailsJobs = useLoaderData();
    console.log(detailsJobs)

    return (
        <div>
            <CommonHeader>Job Details</CommonHeader>
            <div className='gap-4 mx-auto my-24 md:w-9/12 md:flex'>
                <div className=''>
                    <p className='mb-6'><span className='font-bold'>Job Description: </span> {detailsJobs[0].description}</p>
                    <p className='mb-6'><span className='font-bold'>Job Responsibility: </span> {detailsJobs[0].responsibility}</p>
                    <p className='mb-6'><span className='font-bold'>Educational Requirements: </span> <br />  {detailsJobs[0].educationalRequirements}</p>
                    <p className='mb-6'><span className='font-bold'>experiences: </span> {detailsJobs[0].experiences}</p>
                </div>
                <div className=''>
                    <div className='p-4 bg-gray-200 rounded-md'>
                        <h3 className='text-2xl font-bold border border-b-gray-400'>Job Details</h3>
                        <p className='mt-4'><CurrencyDollarIcon className="inline-block w-4 h-4 text-gray-800" />Salary: {detailsJobs[0].salary} (Per Month)</p>
                        <p className='mt-4'><BriefcaseIcon className="inline-block w-4 h-4 text-gray-800" />Salary: {detailsJobs[0].jobTitle}</p>
                        <h3 className='mt-4 text-2xl font-bold border border-b-gray-400'>Contact Information</h3>
                        <p className='mt-4'><PhoneIcon className="inline-block w-4 h-4 text-gray-800" />Phone: {detailsJobs[0].phone}</p>
                        <p className='mt-4'><EnvelopeIcon className="inline-block w-4 h-4 text-gray-800" />Email: {detailsJobs[0].gmail}</p>
                        <p className='mt-4'><MapPinIcon className="inline-block w-4 h-4 text-gray-800" />Address: {detailsJobs[0].location}</p>
                    </div>
                    <button className='w-full p-2 mt-4 text-xl font-semibold text-white rounded-md bg-violet-600'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDeatils;