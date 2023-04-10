import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const jobCategory = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <Category jobcategory={jobCategory}></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;