import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const jobCategory = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <Category jobcategory={jobCategory}></Category>
        </div>
    );
};

export default Home;