// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredItems } from '../Components/LocalStorage/locaStorage';

const Donation = () => {
    const cards = useLoaderData();

    const [card, setCard] = useState([]);
    const [cardLength, setCardLength] = useState(4);

    useEffect(() => {
        const storedCards = getStoredItems();
        if (cards.length > 0) {
            const findCard = cards.filter(item => storedCards.includes(item.id));
            setCard(findCard)
        }
    }, [cards])

    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-10 gap-5'>
                {
                    card.slice(0, cardLength).map(item =>
                        <div
                            className='grid grid-cols-1 lg:grid-cols-2 rounded-lg'
                            key={item.id}
                            style={{ backgroundColor: item.card_bg }}>
                            <div>
                                <span><img src={item.image} alt="" /></span>
                            </div>
                            <div className=" ml-4 my-7 space-y-3">
                                <h2
                                    className='font-medium text-center text-sm w-20 p-1 rounded-lg'
                                    style={{ color: item.text_color, backgroundColor: item.category_bg }}>{item.category}</h2>
                                <p
                                    className='font-bold text-xl'
                                >{item.title}</p>
                                <p>${item.price}</p>
                                <Link to={`/details/${item.id}`}>
                                    <button
                                        style={{ backgroundColor: item.text_color }}
                                        className='btn text-white'>View Details</button>
                                </Link>
                            </div>
                        </div>)
                }
            </div>
            <div className={cardLength === card.length ? 'hidden' : 'flex justify-center my-5'}>
                <button
                    onClick={() => setCardLength(card.length)}
                    className='btn btn-success'>
                    Show all
                </button>
            </div>
        </div>
    );
};

export default Donation;