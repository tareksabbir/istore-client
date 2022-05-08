import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { id } = useParams();

    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <>
            <div className="mb-6 sm:mb-10 lg:mb-10">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Product Update {id}</h2>
            </div>



            <div className="bg-white py-6 sm:py-8 lg:py-2">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">


                    <div className="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">

                        <div className="py-5 sm:py-8">
                            <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
                                <div className="sm:-my-2.5">
                                    <a href="/" className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
                                        <img src={products.img} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                    </a>
                                </div>

                                <div className="flex flex-col justify-between flex-1">
                                    <div>
                                        <a href="/" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-2xl font-bold transition duration-100 mb-1">{products.name}</a>
                                        <span className="mb-2 flex items-center text-gray-500 text-sm gap-1">

                                            Supplier : {products.supplier}
                                        </span>

                                        <span className="block text-gray-500"></span>
                                        <span className="block text-gray-500 mb-2"><b>Description :</b> {products.description}</span>
                                    </div>

                                    <div>
                                        <span className="block text-gray-800 md:text-lg font-bold mb-1">$ <span>{products.price}</span> <span><small> /per product</small></span></span>

                                        <span className="flex items-center text-gray-500 text-sm gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>

                                            In stock
                                        </span>

                                    </div>
                                </div>

                                <div className="w-full sm:w-auto border-t sm:border-none pt-4 sm:pt-0 lg:mt-8">
                                    <div className="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-10 lg:mr-8 lg:mb-5">
                                        <span className="block text-gray-800 md:text-lg font-bold">Total stock {products.stock}</span>
                                    </div>
                                    <form action="">
                                        <input name="reset" className=" w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-2 py-2 mb-5" required type="text" placeholder='Reset stock' />
                                    </form>

                                    <div>
                                        <button className="text-white hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 bg-black px-2 py-1  rounded lg:ml-16 ">Delete</button>
                                    </div>
                                    <div className='lg:mt-5'>
                                        <Link>
                                            <button className="text-white hover:text-black active:text-indigo-700 text-sm font-semibold transition duration-100 bg-gray-500 px-2 py-1  rounded lg:ml-16 ">Update</button>
                                        </Link>
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