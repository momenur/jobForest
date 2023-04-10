import React from 'react';
import './CategoryComponent.css'

const CategoryComponent = ({singleCatagory}) => {
    return (
        <div className='p-6 mt-4 bg-gray-200 rounded-md md:mt-0'>
            <img className='p-2 bg-gray-300 rounded-md category-img' src={singleCatagory.img} alt="" />
            <h2 className='mt-4 text-2xl font-bold'>{singleCatagory.name}</h2>
            <p>{singleCatagory.jobPost}+ Jobs Available</p>
        </div>
    );
};

export default CategoryComponent;