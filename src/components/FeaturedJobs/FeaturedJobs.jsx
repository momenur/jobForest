import React, { useEffect, useState } from 'react';
import SingleJob from '../Job/SingleJob';

// Components
const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    // const primaryShowJobs = jobs.slice(0, 4);
    let primaryShowJobs;
    open === false ? primaryShowJobs = jobs.slice(0, 4): primaryShowJobs = jobs
    
    return (
        <div className='mx-auto my-24 md:w-9/12'>
            <h1 className='mb-4 text-4xl font-bold text-center'>Featured Jobs</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid-cols-2 gap-4 mt-6 md:grid'>
                {
                    primaryShowJobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
            <div className='flex justify-center mt-6'>
                <button onClick={() => setOpen(!open)} className={`p-3 text-2xl text-white rounded-md bg-violet-600 ${open ? "hidden" : ""}`}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;