import React from 'react';
import car from './car.png';
import bike from './bike.png';
import truck from './truck.png';

const Category = () => {
    return (
        <div className='min-h-screen mt-6'>
            <h1 className=' text-center text-4xl font-bold mb-12 '>What Do You Need?
            </h1>

            {/* <div className="divider divide-orange-400 w-1/5 text-orange-400 m-auto mb-4"></div> */}
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <div>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg h-48" src={car} alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Car</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See All</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg h-48" src={bike} alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Bike</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>

                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See All</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg h-48" src={truck} alt="" />
                            </a>
                            <div class="p-6">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Truck</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    Some quick example text to build on the card title and make up the bulk of the card's
                                    content.
                                </p>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;