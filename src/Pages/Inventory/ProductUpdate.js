import React, { useEffect, useState } from 'react';

const ProductUpdate = () => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <>
            <div class="mb-6 sm:mb-10 lg:mb-10">
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Manage Inventory</h2>
            </div>



            <div class="bg-white py-6 sm:py-8 lg:py-2">
                <div class="max-w-screen-lg px-4 md:px-8 mx-auto">


                    <div class="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">

                        <div class="py-5 sm:py-8">
                            <div class="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
                                <div class="sm:-my-2.5">
                                    <a href="/" class="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
                                        <img src={products.img} loading="lazy" alt="" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                    </a>
                                </div>

                                <div class="flex flex-col justify-between flex-1">
                                    <div>
                                        <a href="/" class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-2xl font-bold transition duration-100 mb-1">{products.name}</a>
                                        <span class="mb-2 flex items-center text-gray-500 text-sm gap-1">

                                            Supplier : {products.supplier}
                                        </span>

                                        <span class="block text-gray-500"></span>
                                        <span class="block text-gray-500 mb-2"><b>Description :</b> {products.description}</span>
                                    </div>

                                    <div>
                                        <span class="block text-gray-800 md:text-lg font-bold mb-1">$ <span>{products.price}</span> <span><small> /per product</small></span></span>

                                        <span class="flex items-center text-gray-500 text-sm gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>

                                            In stock
                                        </span>

                                    </div>
                                </div>

                                <div class="w-full sm:w-auto border-t sm:border-none pt-4 sm:pt-0 lg:mt-8">
                                    <div class="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-10 lg:mr-8 lg:mb-5">
                                        <span class="block text-gray-800 md:text-lg font-bold">Total stock {products.stock}</span>
                                    </div>
                                    <form action="">
                                        <input name="reset" className=" w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-2 py-2 mb-5" required type="text" placeholder='Reset stock' />
                                    </form>

                                    <div>
                                        <button class="text-white hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 bg-black px-2 py-1  rounded lg:ml-16 ">Delete</button>
                                    </div>
                                    <div className='lg:mt-5'>
                                        <button class="text-white hover:text-black active:text-indigo-700 text-sm font-semibold transition duration-100 bg-gray-500 px-2 py-1  rounded lg:ml-16 ">Update</button>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>

    );
};

export default ProductUpdate;