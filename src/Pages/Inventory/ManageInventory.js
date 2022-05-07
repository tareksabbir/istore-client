import React from 'react';

const ManageInventory = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
                <div class="mb-6 sm:mb-10 lg:mb-16">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Manage Inventory</h2>
                </div>

                <div class="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">

                    <div class="py-5 sm:py-8">
                        <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
                            <div class="sm:-my-2.5">
                                <a href="/" class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1620049185596-1f16f414c448?auto=format&q=75&fit=crop&w=200" loading="lazy" alt="" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                </a>
                            </div>

                            <div class="flex flex-col justify-between flex-1">
                                <div>
                                    <a href="/" class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Iphone 13</a>

                                    <span class="block text-gray-500">Description: 128GB 4GB RAM Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits </span>
                                    <span class="block text-gray-500">Color: White</span>
                                </div>

                                <div>
                                    <span class="block text-gray-800 md:text-lg font-bold mb-1">$1000 <span><small> /per product</small></span></span>

                                    <span class="flex items-center text-gray-500 text-sm gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        In stock
                                    </span>
                                </div>
                            </div>

                            <div class="w-full sm:w-auto flex justify-between border-t sm:border-none pt-4 sm:pt-0">
                                <div class="flex flex-col items-start gap-2">
                                    <div class="w-20 h-12 flex border rounded overflow-hidden">
                                        <input type="number" value="1" class="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" />

                                        <div class="flex flex-col border-l divide-y">
                                            <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">+</button>
                                            <button class="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
                                        </div>
                                    </div>

                                    <button class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
                                </div>

                                <div class="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-16">
                                    <span class="block text-gray-800 md:text-lg font-bold">total stock 150</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default ManageInventory;