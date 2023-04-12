import React from 'react';
import CommonHeader from '../CommonHeader/CommonHeader';

const Blog = () => {
    return (
        <div>
            <CommonHeader>Blog</CommonHeader>
            <div className='mx-auto my-24 md:w-9/12'>
                <div className='p-4 my-6 bg-red-100 rounded-md'>
                    <h2 className='text-3xl font-bold'>1.  when should use context api ?</h2>
                    <p>1. When you have a component tree with multiple levels of nesting, and you need to pass data from a higher level component to a lower level component, but not every component in between needs access to the data. <br />
                    2. When you have a component that needs to access data from multiple parts of the application, and you don't want to have to pass props through all the intermediate components.  <br />
                    3. When you have a large application with many components that need access to the same data, and you want to avoid "prop drilling" or passing props through many levels of components.</p>
                </div>
                <div className='p-4 my-6 bg-red-100 rounded-md'>
                    <h2 className='text-3xl font-bold'>1.  when should use context api ?</h2>
                    <p>1. When you have a component tree with multiple levels of nesting, and you need to pass data from a higher level component to a lower level component, but not every component in between needs access to the data. <br />
                    2. When you have a component that needs to access data from multiple parts of the application, and you don't want to have to pass props through all the intermediate components.  <br />
                    3. When you have a large application with many components that need access to the same data, and you want to avoid "prop drilling" or passing props through many levels of components.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;