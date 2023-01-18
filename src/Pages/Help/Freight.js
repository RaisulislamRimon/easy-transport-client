import React from 'react';
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
const Freight = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static.autox.com/uploads/2020/10/2020-skoda-rapid-1-litre-tsi-automatic-review-rear-static-m.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center  text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Welcome to Easy Transport Support</h1>
                    <p className="mb-5">How can we help?</p>
                    <div className='flex gap-5 ml-10'>
                        <div className='w-[150px] h-[150px] bg-white text-black rounded text-center ml-10'>
                            <button>
                                <p className='text-3xl mt-6'><FiUser /> </p>
                                <p className='mt-3 font-semibold'>Carrier</p>
                            </button>

                        </div>
                        <div className='w-[150px] h-[150px] bg-white rounded text-black'>

                            <button>
                                <p className='text-3xl mt-6'> <RiShoppingCart2Fill /></p>
                                <p className='mt-3 font-semibold'>Shiper</p>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freight;