import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDeatils = () => {
    const detailsJobs = useLoaderData();
    console.log(detailsJobs)

    return (
        <div>
            <h1>Job Deatis here</h1>
        </div>
    );
};

export default JobDeatils;