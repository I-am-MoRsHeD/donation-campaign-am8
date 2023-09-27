// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import MainLayout from '../Layout/MainLayout';
import Donation from '../Pages/Donation';

import CardDetails from '../Components/CardDetails/CardDetails';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Statistics from '../Pages/Statistics';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/card.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: ()=>fetch('/card.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/details/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/card.json')
            }
        ]
    }
]);

export default route;