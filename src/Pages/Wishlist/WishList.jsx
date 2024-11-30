import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Context'
import JustForYou from './JustForYou'

function WishList() {
    const { addToCart } = useContext(ShopContext)
    return (
        <div className="container p-4 mx-auto">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Wishlist (4)</h1>
                <button className="px-4 py-2 duration-300 border border-black hover:bg-black hover:text-white">Move All To Bag</button>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { id: 1, discount: '75%', name: 'Gucci duffle bag', price: '$250', originalPrice: '$1000', img: 'https://placehold.co/200x200', alt: 'Gucci duffle bag' },
                    { id: 2, name: 'RGB Liquid CPU Cooler', price: '$150', img: 'https://placehold.co/200x200', alt: 'RGB Liquid CPU Cooler' },
                    { id: 3, name: 'OPTI Shooter USB Gamepad', price: '$50', img: 'https://placehold.co/200x200', alt: 'OPTI Shooter USB Gamepad' },
                    { id: 4, name: 'Quilted Satin Jacket', price: '$750', img: 'https://placehold.co/200x200', alt: 'Quilted Satin Jacket' }
                ].map(item => (
                    <div key={item.id} className="p-4 border">
                        {item.discount && <div className="absolute px-2 py-1 text-white bg-red-500">{item.discount}</div>}
                        <div className='relative z-10 group'>
                            <img src={item.img} alt={item.alt} className="object-cover w-full h-40 mb-4" />
                            <button
                                className={`absolute bottom-0 left-0 w-full py-2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${addToCart.find(item => item.id === product.id) ? 'bg-rose-500' : 'bg-black'
                                    }`}
                            >
                                {addToCart.find(item => item.id === product.id) ? 'Already Added' : 'Add To Cart'}
                            </button>
                        </div>
                        <h2 className="text-lg font-bold">{(item.name).slice(0, 20)}</h2>
                        <div className="flex items-center justify-between mt-2">
                            <div>
                                <span className="text-red-500">{item.price}</span>
                                {item.originalPrice && <span className="ml-2 line-through">{item.originalPrice}</span>}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <JustForYou />
        </div>
    )
}

export default WishList