// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';

const Banner = () => {
    const [cards, setCards] = useState();

    const inputRef = useRef(null);

    const handleSearch = e =>{
        e.preventDefault();
        setCards(inputRef.current.value)
    }
    console.log(cards)
    return (
        <div className="bg-[url('https://i.ibb.co/gmTv5pj/Rectangle-4281.png')] bg-cover bg-no-repeat relative h-40 md:h-72 lg:h-96">
            <div className="bg-slate-100 bg-opacity-90 h-full">

                <div className='absolute mt-10 md:mt-20 lg:mt-40 ml-10 md:ml-40 lg:ml-44'>
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold pb-4">I Grow By Helping People In Need</h1>
                    <div className='w-72 md:96 lg:w-96 mx-10 md:mx-auto lg:mx-auto'>
                        <input ref={inputRef} className='w-52 md:w-52 lg:w-80 lg:p-2 p-1 rounded-s-lg' placeholder='Search here...' name='name' type="text" />
                        <button onClick={handleSearch} className='bg-red-500 text-white p-1 lg:p-2 rounded-tr-lg rounded-br-lg'>Search</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;