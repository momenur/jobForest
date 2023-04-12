import React from 'react';

const CommonHeader = (props) => {
    return (
        <div className='flex items-center justify-center h-48 bg-gray-200'>
            <h1 className='text-5xl font-bold text-center'>{props.children} </h1>
        </div>
    );
};

export default CommonHeader;