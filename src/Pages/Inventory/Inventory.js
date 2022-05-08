import React, { useEffect, useState } from 'react';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const displayContent = (text) => {
        return text.length < 60 ? text : text.slice(0, 60) + "...";
    };

    return (
        <>

            <section>
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12 mt-5">Inventory Items</h2>
                <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">In official product you get the guarantee to get inactive/intact product along with original accessories. On the other hand, in unofficial product we have observed replacement of original accessories with lookalike copy, aside in more than 60% cases customer gets active product.</p>
                <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div class="relative mx-auto max-w-7xl lg:px-10">
                        <div class="grid max-w-lg gap-5 lg:gap-16 mx-auto lg:grid-cols-3 lg:max-w-none">

                            {
                                products.slice(0, 6).map(product => <div
                                    key={product._id}>

                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48" src={product.img} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">

                                                <p class=" block mt-2 text-xl font-semibold text-neutral-600">{product.name}</p>
                                                <p class="mt-3 text-base text-gray-500">{displayContent(product.description)}</p>

                                                <p class="text-lg font-semibold text-neutral-600 mt-5">Available Product {product.stock}</p>
                                                <div className="flex items-end gap-1 mt-3">
                                                    <span className="self-start text-gray-600">$</span>
                                                    <span className="text-2xl text-gray-800 font-bold">{product.price}</span>
                                                    <span className="text-gray-500">per/product</span>
                                                </div>


                                            </div>
                                            <div class="flex justify-between">
                                                <div class="flex items-center mt-6">
                                                    <div>
                                                        <p class="text-sm font-medium text-neutral-600">
                                                            Supplier : {product.supplier}
                                                        </p>

                                                    </div>

                                                </div>
                                                <div className='mt-6'>
                                                    <button class="inline-block bg-gray-800 hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Update</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>)

                            }




                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Inventory;