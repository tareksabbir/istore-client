import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handelProductDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('item is deleted');
                        const remaining = product.filter(product => product._id !== id);
                        setProduct(remaining);
                    }
                })
        }

    }

    const updateHandle = event => {
        event.preventDefault();
        const price = event.target.price.value;
        const stock = event.target.stock.value;
        const email = event.target.email.value;
        const img = event.target.img.value;

        const updateProduct = { price, stock, img, email }

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Product updated');
                event.target.reset();
            })
    }


    return (
        <>
            <div className="mb-6 sm:mb-10 lg:mb-10">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Product Update</h2>
            </div>



            <div className="bg-white py-6 sm:py-8 lg:py-2">
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">


                    <div className="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">

                        <div className="py-5 sm:py-8">
                            <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
                                <div className="sm:-my-2.5">
                                    <a href="/" className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
                                        <img src={product.img} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                                    </a>
                                </div>

                                <div className="flex flex-col justify-between flex-1">
                                    <div>
                                        <a href="/" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-2xl font-bold transition duration-100 mb-1">{product.name}</a>
                                        <span className="mb-2 flex items-center text-gray-500 text-sm gap-1">

                                            Supplier : {product.supplier}
                                        </span>

                                        <span className="block text-gray-500"></span>
                                        <span className="block text-gray-500 mb-2"><b>Description :</b> {product.description}</span>
                                    </div>

                                    <div>
                                        <span className="block text-gray-800 md:text-lg font-bold mb-1">$ <span>{product.price}</span> <span><small> /per product</small></span></span>

                                        <span className="flex items-center text-gray-500 text-sm gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>

                                            In stock
                                        </span>

                                    </div>
                                </div>

                                <div className="w-full sm:w-auto border-t sm:border-none pt-4 sm:pt-0 ">
                                    <div className="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-10 lg:mr-8 lg:mb-5">
                                        <span className="block text-gray-800 md:text-lg font-bold">Total stock {product.stock}</span>
                                    </div>


                                    <ToastContainer />
                                    <div >
                                        <button onClick={() => handelProductDelete(product._id)} className="text-white hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 bg-black px-2 py-1  rounded lg:ml-16 lg:mt-1">Delete</button>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <form onClick={updateHandle} className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                <div>
                    <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">Product Stock*</label>
                    <input type="text" name="stock" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                </div>

                <div>
                    <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">Product Price*</label>
                    <input type="text" name="price" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                </div>

                <div className="sm:col-span-2">
                    <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">Your Email ID*</label>
                    <input type="text" name="email" className="w-full h-10 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required></input>
                </div>
                <div className="sm:col-span-2">
                    <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">Photo URL*</label>
                    <input type="text" name="img" className="w-full h-10 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required></input>
                </div>

                <div className="sm:col-span-2 flex justify-between items-center lg:mb-10">
                    <button className="inline-block bg-black hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Update</button>
                </div>
                <ToastContainer />

            </form>













        </>
    );
};

export default UpdateProduct;