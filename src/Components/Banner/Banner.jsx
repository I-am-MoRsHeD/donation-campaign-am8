// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/gmTv5pj/Rectangle-4281.png')] bg-cover bg-no-repeat relative h-96">
            <div className="bg-slate-100 bg-opacity-90 h-full">

                <div className='absolute mt-40 ml-44'>
                    <h1 className="text-5xl font-bold pb-4">I Grow By Helping People In Need</h1>
                    <div className='w-96 mx-auto'>
                        <input className='w-80 p-2 rounded-s-lg' placeholder='Search here...' type="text" />
                        <button className='bg-red-500 p-2 rounded-tr-lg rounded-br-lg'>Search</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;