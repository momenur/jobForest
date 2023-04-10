import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marks = [
        {
            id: 1,
            name: "Assignment-1",
            mark: 60
        },
        {
            id: 2,
            name: "Assignment-2",
            mark: 60
        },
        {
            id: 3,
            name: "Assignment-3",
            mark: 60
        },
        {
            id: 4,
            name: "Assignment-4",
            mark: 60
        },
        {
            id: 5,
            name: "Assignment-5",
            mark: 60
        },
        {
            id: 6,
            name: "Assignment-6",
            mark: 60
        },
        {
            id: 7,
            name: "Assignment-7",
            mark: 60
        }
    ]
    return (
        <div className='mx-auto mt-12 md:w-10/12'>
            <AreaChart
                width={1200}
                height={350}
                data={marks}
            >
                 <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                 <XAxis dataKey="name"></XAxis>
                 <YAxis></YAxis>
                 <Tooltip></Tooltip>
            </AreaChart>
        </div>
    );
};

export default Statistics;