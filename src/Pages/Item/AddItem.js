import React from 'react';

const AddItem = () => {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-6 lg:mb-10">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div class="mb-10 md:mb-16">
                        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Add Item</h2>
                    </div>

                    <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                        <div>
                            <label for="name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Product name*</label>
                            <input name="name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div>
                            <label for="Price" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Product Price*</label>
                            <input name="Price" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>
                        <div>
                            <label for="stock" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Stock*</label>
                            <input name="stock" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div>
                            <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email Id*</label>
                            <input name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Company*</label>
                            <input name="company" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>


                        <div class="sm:col-span-2">
                            <label for="description" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Description*</label>
                            <input name="description" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div class="sm:col-span-2">
                            <label for="url" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Photo URL*</label>
                            <input name="url" class="w-full h-10 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required></input>
                        </div>

                        <div class="sm:col-span-2 flex justify-between items-center">
                            <button class="inline-block bg-black hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

                            <span class="text-gray-500 text-sm">*Required</span>
                        </div>

                        <p class="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="/" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddItem;