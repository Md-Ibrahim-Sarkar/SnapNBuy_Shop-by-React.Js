import React from 'react'

function Product_Details() {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center lg:items-start">
                    <div className="flex flex-col space-y-4">
                        <img src="https://placehold.co/100x100" alt="Product thumbnail 1" className="object-cover w-24 h-24" />
                        <img src="https://placehold.co/100x100" alt="Product thumbnail 2" className="object-cover w-24 h-24" />
                        <img src="https://placehold.co/100x100" alt="Product thumbnail 3" className="object-cover w-24 h-24" />
                        <img src="https://placehold.co/100x100" alt="Product thumbnail 4" className="object-cover w-24 h-24" />
                    </div>
                </div>
                <div className="flex justify-center flex-1 mt-8 lg:justify-start lg:mt-0 lg:ml-8">
                    <img src="https://placehold.co/400x400" alt="Main product image" className="object-cover w-96 h-96" />
                </div>
                <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
                    <div className="mb-2 text-sm text-gray-500">
                        <a href="#" className="hover:underline">Account</a> / <a href="#" className="hover:underline">Gaming</a> / Havic HV G-92 Gamepad
                    </div>
                    <h1 className="mb-2 text-2xl font-bold">Havic HV G-92 Gamepad</h1>
                    <div className="flex items-center mb-2">
                        <div className="flex items-center">
                            <i className="text-yellow-500 fas fa-star"></i>
                            <i className="text-yellow-500 fas fa-star"></i>
                            <i className="text-yellow-500 fas fa-star"></i>
                            <i className="text-yellow-500 fas fa-star"></i>
                            <i className="text-gray-300 fas fa-star"></i>
                        </div>
                        <span className="ml-2 text-sm text-gray-500">(150 Reviews)</span>
                    </div>
                    <div className="mb-4 text-lg text-green-500">In Stock</div>
                    <div className="mb-4 text-2xl font-bold">$192.00</div>
                    <p className="mb-4 text-gray-700">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <div className="mb-4">
                        <span className="font-bold">Colours:</span>
                        <div className="flex items-center mt-2">
                            <div className="w-6 h-6 mr-2 bg-red-500 rounded-full"></div>
                            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold">Size:</span>
                        <div className="flex items-center mt-2 space-x-2">
                            <button className="px-2 py-1 border border-gray-300 rounded">XS</button>
                            <button className="px-2 py-1 border border-gray-300 rounded">S</button>
                            <button className="px-2 py-1 border border-gray-300 rounded">M</button>
                            <button className="px-2 py-1 border border-gray-300 rounded">L</button>
                            <button className="px-2 py-1 border border-gray-300 rounded">XL</button>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <button className="px-2 py-1 border border-gray-300">-</button>
                        <input type="text" value="2" className="w-12 text-center border-t border-b border-gray-300" />
                        <button className="px-2 py-1 border border-gray-300">+</button>
                        <button className="px-4 py-2 ml-4 text-white bg-red-500 rounded">Buy Now</button>
                    </div>
                    <div className="py-4 border-t border-b border-gray-300">
                        <div className="flex items-center mb-2">
                            <i className="mr-2 text-gray-500 fas fa-truck"></i>
                            <span className="text-gray-700">Free Delivery</span>
                            <a href="#" className="ml-2 text-blue-500 hover:underline">Enter your postal code for Delivery Availability</a>
                        </div>
                        <div className="flex items-center">
                            <i className="mr-2 text-gray-500 fas fa-undo"></i>
                            <span className="text-gray-700">Return Delivery</span>
                            <a href="#" className="ml-2 text-blue-500 hover:underline">Free 30 Days Delivery Returns. Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_Details