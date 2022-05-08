import React from 'react';

const MyItems = () => {
    return (
        <div>
            <div className="mb-10 md:mb-16">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">My Items</h2>
            </div>
            <section className="text-gray-600">
                <div className="container px-5 lg:mb-32 mx-auto">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden sm:rounded">
                                    <table className="min-w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase">Product Name</th>
                                                <th scope="col" className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase">Supplier</th>
                                                <th scope="col" className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black  uppercase">Email ID</th>
                                                <th scope="col" className="px-6 py-3 text-sm font-bold tracking-wider text-left text-black uppercase">Stocks</th>
                                                <th scope="col" className="relative px-6 py-3 text-black ">
                                                    <span className="sr-only">Status</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr className="bg-white">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Iphone 13</td>
                                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Apple</td>
                                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">tareksabbir4599@gmail.com</td>
                                                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Total 140</td>
                                                <td className="px-6 py-4 text-sm font-bold text-right whitespace-nowrap">
                                                    <a href="/" className="text-blue-600 hover:text-blue-900">
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