// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/gmTv5pj/Rectangle-4281.png')] bg-cover bg-no-repeat relative h-96">
            <div className="bg-slate-100 bg-opacity-90 h-full">

                <div className='absolute mt-44 ml-72'>
                    <input className='w-96 mr-1 p-2 rounded-lg' type="text" />
                    <button className='bg-red-500 p-2 rounded-tr-lg rounded-br-lg'>Search</button>
                </div>

            </div>

        </div>
    );
};

export default Banner;