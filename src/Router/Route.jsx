// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import MainLayout from '../Layout/MainLayout';
import Donation from '../Pages/Donation';
import Statistics from '../Pages/Statistics';
import CardDetails from '../Components/CardDetails/CardDetails';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/public/card.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: ()=>fetch('/public/card.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/details/:id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/public/card.json')
            }
        ]
    }
]);

export default route;