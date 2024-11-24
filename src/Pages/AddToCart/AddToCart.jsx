import { useContext, useState } from "react";
import { ShopContext } from "../../Context/Context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const AddToCart = () => {

    const { addToCart } = useContext(ShopContext)

    const [cartItems, setCartItems] = useState([
        { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "lcd-monitor.png" },
        { id: 2, name: "HI Gamepad", price: 550, quantity: 2, image: "hi-gamepad.png" },
    ]);



    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            <div className="">
                {/* Cart Items Section */}
                <div className="flex-1">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-2">Product</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Quantity</th>
                                <th className="py-2">Subtotal</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addToCart.map((item) => <CartItem key={item.id} item={item} />)}
                        </tbody>
                    </table>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full">
                            <div className="flex justify-between items-center mt-4">
                                <Link to={'/'} className="bg-gray-200 px-4 py-2 rounded">Return To Shop</Link>
                                <button className="bg-gray-200 px-4 py-2 rounded">Update Cart</button>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="border px-4 py-2 rounded flex-1"
                                />
                                <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
                            </div>
                        </div>

                        {/* Cart Summary Section */}
                        <div className="w-full lg:w-1/3 border p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total:</span>
                                <span>${subtotal}</span>
                            </div>
                            <button className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddToCart;
