import React from 'react';
const HomeReview = ({ review }) => {
    const { email, name, message } = review;
    console.log(name)
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{message.slice(0, 200)}...</p>
                    <div className="card-actions">

                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-lg'>{name}</h2>
                            <h3 className=''>{email}</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;