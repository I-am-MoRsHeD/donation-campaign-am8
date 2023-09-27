// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = ({cards}) => {

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mx-2 mx-2 lg:mx-0 gap-5'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

Cards.propTypes ={
    cards:PropTypes.array
}

export default Cards;