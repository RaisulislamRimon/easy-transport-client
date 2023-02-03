import React from 'react';

const SafeJurney = () => {
    return (
        <div className='mt-10'>

            <div>
                <div>
                    <h2 className='ml-3 text-3xl font-bold mb-5 text-center'>Building safer journeys for everyone</h2>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row w-full gap-8">
                            <div className=" text-left lg:w-1/2">
                                <img className='w-full' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554950718/assets/29/f92bd4-4ae0-461b-b7ec-206e111e2afe/original/2up-%281%29.jpg" alt="" />
                                <p className='text-xl font-bold'>Driver safety</p>
                                <p>Count on 24/7 support to help with any questions or safety concerns. Share your trip with loved ones. Our focus is on your safety, so you can go where the opportunity is.</p>
                            </div>
                            <div className="lg:w-1/2">
                                <img className='w-full' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1554950662/assets/97/86dc41-26b0-41bd-910a-db682021cb9f/original/2_up%282%29.jpg" alt="" />
                                <p className=' text-xl font-bold'>Rider safety</p>
                                <p>Millions of rides are requested every day. Every rider has access to safety features built into the app. And every ride has a support team if you need them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafeJurney;