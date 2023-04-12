import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
// import for React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import JobFeatils from './components/JobDeatils/JobDeatils';
import JobDeatils from './components/JobDeatils/JobDeatils';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobcategory.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied-job',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'details/:jobID',
        element: <JobDeatils></JobDeatils>,
        loader: ({params}) => fetch('jobs.json')
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
