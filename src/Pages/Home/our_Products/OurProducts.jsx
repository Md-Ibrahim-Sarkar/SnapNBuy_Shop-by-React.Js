import React, { useContext } from 'react'
import { MdOutlineStarPurple500, MdOutlineFavorite ,MdOutlineStarHalf } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { ShopContext } from '../../../Context/Context';
import { ImInsertTemplate } from 'react-icons/im';
function OurProducts() {
    const { ourProduct, flashData, addToCart } = useContext(ShopContext);

    if (!ourProduct || ourProduct.length === 0) {
        return <div className="py-8 text-center">Loading products...</div>;
    }

    return (
        <div className="py-8 mx-auto">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div className="w-2 h-8 mr-2 bg-red-500"></div>
                    <span className="font-semibold text-red-500">This Month</span>
                </div>
                <button className="px-4 py-2 text-white bg-red-500 rounded">View All</button>
            </div>
            <h1 className="mb-6 text-3xl font-bold">Best Selling Products</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {ourProduct.map((product) => (
                    <div key={product.id} className="relative p-4 bg-gray-100 rounded-lg">
                        <div className="relative z-40 group">
                            <img src={product.image} alt={product.name} className="object-cover w-full h-48 mb-4 rounded" />
                            <button
                                className={`absolute bottom-0 left-0 w-full py-2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                    addToCart.find(item => item.id === product.id) ? 'bg-rose-500' : 'bg-black'
                                }`}
                            >
                                {addToCart.find(item => item.id === product.id) ? 'Already Added' : 'Add To Cart'}
                            </button>
                        </div>
                        <div className="absolute flex flex-col space-y-2 top-5 right-6">
                            <button aria-label="Add to favorites" className="p-2 bg-white rounded-full shadow">
                                <MdOutlineFavorite />
                            </button>
                            <button aria-label="View details" className="p-2 bg-white rounded-full shadow">
                                <FaRegEye />
                            </button>
                        </div>
                        <h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
                        <div className="flex items-center mb-2">
                            <span className="mr-2 text-xl font-bold text-red-500">{product.price}</span>
                            {product.oldPrice && <span className="text-gray-500 line-through">{product.oldPrice}</span>}
                        </div>
                        <Rating rate={product.rating?.rate} count={product.rating?.count} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center w-full mt-4">
                <button className="px-6 py-3 text-white bg-rose-600">View All Products</button>
            </div>
        </div>
    );
}

const Rating = ({ rate, count }) => (
    <div className="flex items-center">
        <div className="flex">
            {[...Array(Math.floor(rate || 0))].map((_, i) => (
                <MdOutlineStarPurple500 key={i} className="text-orange-300" />
            ))}
            {rate % 1 !== 0 && <MdOutlineStarHalf className="text-orange-300" />}
        </div>
        <span className="text-gray-500">({count || 0})</span>
    </div>
);

export default OurProducts;
