import React from 'react';
import Ride from './Ride';
import car1 from '../../../assets/images/car1.PNG';
import car2 from '../../../assets/images/car2.PNG';
import car3 from '../../../assets/images/car3.PNG';

const Rides = () => {
    const cardData = [
        {
            id: 1,
            name: 'For any budget',
            description: 'From bike and autos to prime sedans and prime SUVs. You will find a ride in your budget at your convenience any time.',
            img: car1
        },
        {
            id: 2,
            name: 'For any distance',
            description: 'From bike and autos to prime sedans and prime SUVs. You will find a ride in your budget at your convenience any time.',
            img: car2
        },
        {
            id: 3,
            name: 'For any duration',
            description: 'From bike and autos to prime sedans and prime SUVs. You will find a ride in your budget at your convenience any time.',
            img: car3
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>There's an ola ride an everyone
                </h1>
            </div>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-11 mb-11'>
                {
                    cardData.map(card => <Ride
                        key={card.id}
                        card={card}></Ride>)
                }
            </div>
        </div>
    );
};

export default Rides;