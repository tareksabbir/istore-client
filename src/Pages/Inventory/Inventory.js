import React from 'react';

const Inventory = () => {
    return (
        <>
            <section>
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12 mt-5">Inventory Items</h2>
                <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div class="relative mx-auto max-w-7xl">
                        <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div class="flex-shrink-0">
                                    <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
                                </div>
                                <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div class="flex-1">

                                        <p class=" block mt-2 text-xl font-semibold text-neutral-600">Iphone X</p>
                                        <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                        <p class="text-lg font-semibold text-neutral-600 mt-5">Available Product 100</p>
                                        <div className="flex items-end gap-1 mt-3">
                                            <span className="self-start text-gray-600">$</span>
                                            <span className="text-2xl text-gray-800 font-bold">1000</span>
                                            <span className="text-gray-500">per/product</span>
                                        </div>


                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex items-center mt-6">
                                            <div>
                                                <p class="text-sm font-medium text-neutral-600">
                                                    Michaerl Andreuzza
                                                </p>

                                            </div>

                                        </div>
                                        <div className='mt-6'>
                                            <button class="inline-block bg-gray-800 hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Update</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Inventory;