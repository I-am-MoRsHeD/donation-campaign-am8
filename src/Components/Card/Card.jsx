// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    const { id, image, title, category, category_bg, text_color, card_bg } = card;

    return (
        <Link
            to={`/details/${id}`}
            style={{ backgroundColor: card_bg }}
            className='card shadow-xl'>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className=" ml-4 my-7 space-y-3">
                <h2
                    className='font-medium text-center text-sm w-20 p-1 rounded-lg'
                    style={{ color: text_color, backgroundColor: category_bg }}>{category}</h2>
                <p
                    className='font-semibold text-xl'
                    style={{ color: text_color }}>{title}</p>
            </div>
        </Link>
    );
};

export default Card;