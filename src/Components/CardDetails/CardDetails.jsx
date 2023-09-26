// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setItems } from '../LocalStorage/locaStorage';

const CardDetails = () => {
    const [card, setCard] = useState([]);

    const cards = useLoaderData();
    const { id } = useParams();
    const idnt = parseInt(id)

    useEffect(() => {
        const findCard = cards.find(card => card.id === idnt)
        setCard(findCard)
    }, [cards, idnt])

    const { image, title, desc, price, text_color } = card;

    const handleDonation = () => {

        setItems(idnt)
        Swal.fire({
            icon: 'success',
            title: 'Great..',
            text: 'Successfully donated'
        })

    }

    return (
        <div>
            <div className='my-10 relative px-5'>
                <div className="">
                    <img className='w-screen rounded-lg ' src={image} alt="" />
                </div>
                <div className='w-[1060px] -mt-20 rounded-bl-lg rounded-br-lg p-10 bg-blend-overlay opacity-30 absolute bg-black'>

                </div>
                <div className='absolute ml-5 -mt-14'>
                    <button
                        onClick={handleDonation}
                        style={{ backgroundColor: text_color }}
                        className='btn text-white'>Donate $<span>
                            {price}</span></button>
                </div>
                <h1 className='text-4xl font-bold mt-8'>{title}</h1>
                <p className='mt-5'>{desc}</p>
            </div>
        </div>
    );
};

export default CardDetails;