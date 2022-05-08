import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {

    const productHandle = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const stock = event.target.stock.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;

        const product = { name, price, stock, img, description, supplier, email }

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('Product added');
                event.target.reset();
            })
    }

    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-6 lg:mb-10">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div class="mb-10 md:mb-16">
                        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Add Item</h2>
                    </div>

                    <form onSubmit={productHandle} class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                        <div>
                            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Product name*</label>
                            <input type="text" name="name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div>
                            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Product Price*</label>
                            <input type="text" name="price" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>
                        <div>
                            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Stock*</label>
                            <input type="text" name="stock" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div>
                            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email Id*</label>
                            <input type="text" name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div class="sm:col-span-2">
                            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Supplier*</label>
                            <input type="text" name="supplier" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>


                        <div class="sm:col-span-2">
                            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Description*</label>
                            <input type="text" name="description" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div class="sm:col-span-2">
                            <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">Photo URL*</label>
                            <input type="text" name="img" class="w-full h-10 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required></input>
                        </div>

                        <div class="sm:col-span-2 flex justify-between items-center">
                            <button class="inline-block bg-black hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

                            <span class="text-gray-500 text-sm">*Required</span>
                        </div>
                        <ToastContainer />

                        <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="/" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddItem;