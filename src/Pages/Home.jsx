// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Components/Cards/Cards';

const Home = () => {

    const cards = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='mt-8'>
                <Cards cards={cards}></Cards>
            </div>
        </div>
    );
};

export default Home;