import React, { useEffect, useState } from 'react';
import quote from '../HomeReviews/Asset/quote.svg'
import HomeReview from './HomeReview';
const HomeReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://easy-transport-server-eosin.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <section className='my-16'>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-2xl font-bold text-sky-300'>Rider Reviews</h4>
                        <h2 className='text-4xl'>What Our Rider Says</h2>
                    </div>
                    <figure>
                        <img src={quote} className='lg:w-48 w-24' alt="" />
                    </figure>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        reviews.map(review => <HomeReview key={review.id} review={review}></HomeReview>)
                    }
                </div>
            </section>
        </div>
    );
};

export default HomeReviews;