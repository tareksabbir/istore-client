import React from 'react';

const MyItems = () => {
    return (
        <div>
            <div class="mb-10 md:mb-16">
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">My Items</h2>
            </div>
            <section class="text-gray-600">
                <div class="container px-5 lg:mb-32 mx-auto">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div class="overflow-hidden sm:rounded">
                                    <table class="min-w-full">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase">Product Name</th>
                                                <th scope="col" class="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase">Supplier</th>
                                                <th scope="col" class="px-6 py-3 text-sm font-bold tracking-wider text-left text-black  uppercase">Email ID</th>
                                                <th scope="col" class="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase">Stocks</th>
                                                <th scope="col" class="relative px-6 py-3 text-black ">
                                                    <span class="sr-only">Status</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr class="bg-white">
                                                <td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Iphone 13</td>
                                                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Apple</td>
                                                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">tareksabbir4599@gmail.com</td>
                                                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Total 140</td>
                                                <td class="px-6 py-4 text-sm font-bold text-right whitespace-nowrap">
                                                    <a href="/" class="text-blue-600 hover:text-blue-900">
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyItems;