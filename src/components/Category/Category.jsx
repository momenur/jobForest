import React from 'react';
import CategoryComponent from '../CategoryComponent/CategoryComponent';

const Category = ({jobcategory}) => {
    return (
        <div className='mx-auto my-24 md:w-9/12'>
            <h1 className='mb-4 text-4xl font-bold text-center'>Job Category List</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='items-center justify-between mt-12 md:flex'>
                {
                    jobcategory.map(singleCatagory => <CategoryComponent key={singleCatagory.id} singleCatagory={singleCatagory}></CategoryComponent>)
                }
            </div>
        </div>
    );
};

export default Category;