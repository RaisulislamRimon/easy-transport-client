import React from 'react';

const CommunitiesCard = ({ card }) => {
    const { name, number, description, icon } = card;
    return (
        <div className="card w-96 bg-sky-100 shadow-xl">
            <figure className="px-10 pt-10">
                {/* <img src={icon} alt="Shoes" className="rounded-xl" /> */}
            </figure>
            <div className="card-body items-center text-center">
                <h1 className='text-3xl font-bold'>{number}</h1>
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default CommunitiesCard;