import React from 'react'
import { Link } from 'react-router-dom'

function Billing_Details() {
    return (
        <div class="container mx-auto p-4">
            <nav class="text-sm text-gray-500 mb-6">
                <a class="hover:underline" href="#">
                    Account
                </a>
                /
                <a class="hover:underline" href="#">
                    My Account
                </a>
                /
                <a class="hover:underline" href="#">
                    Product
                </a>
                /
                <Link to={'/add-to-cart'} class="hover:underline" href="#">
                    View Cart
                </Link>
                /
                <span class="text-black">
                    CheckOut
                </span>
            </nav>
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-2/3">
                    <h2 class="text-2xl font-bold mb-4">
                        Billing Details
                    </h2>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="first-name">
                                First Name*
                            </label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="first-name" required="" type="text" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="company-name">
                                Company Name
                            </label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="company-name" type="text" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="street-address">
                                Street Address*
                            </label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="street-address" required="" type="text" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="apartment">
                                Apartment, floor, etc. (optional)
                            </label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="apartment" type="text" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="town-city">
                                Town/City*
                            </label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="town-city" required="" type="text" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="phone-number">
                                Phone Number*
                            </label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="phone-number" required="" type="text" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="email-address">
                                Email Address*
                            </label>
                            <input class="mt-1 block w-full p-2 border border-gray-300 rounded-md" id="email-address" required="" type="email" />
                        </div>
                        <div class="flex items-center">
                            <input class="h-4 w-4 text-red-600 border-gray-300 rounded" id="save-info" type="checkbox" />
                            <label class="ml-2 block text-sm text-gray-700" for="save-info">
                                Save this information for faster check-out next time
                            </label>
                        </div>
                    </form>
                </div>
                <div class="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
                    <div class="border border-gray-300 p-4 rounded-md">
                        <div class="flex items-center mb-4">
                            <img alt="LCD Monitor" class="w-12 h-12 object-cover mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/U2sjY9j6v9pJA1TSw1Tq2sBO2eva3sAt03PzAxci00IUOD7JA.jpg" width="50" />
                            <span class="flex-1">
                                LCD Monitor
                            </span>
                            <span>
                                $650
                            </span>
                        </div>
                        <div class="flex items-center mb-4">
                            <img alt="HI Gamepad" class="w-12 h-12 object-cover mr-4" height="50" src="https://storage.googleapis.com/a1aa/image/zvHe0ExsSkWLQiQ0hgyf9px1rP6oI7I6Bq22ShBdpNtqcG2TA.jpg" width="50" />
                            <span class="flex-1">
                                HI Gamepad
                            </span>
                            <span>
                                $1100
                            </span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>
                                Subtotal:
                            </span>
                            <span>
                                $1750
                            </span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <span>
                                Shipping:
                            </span>
                            <span>
                                Free
                            </span>
                        </div>
                        <div class="flex justify-between font-bold mb-4">
                            <span>
                                Total:
                            </span>
                            <span>
                                $1750
                            </span>
                        </div>
                        <div class="mb-4">
                            <label class="flex items-center mb-2">
                                <input class="h-4 w-4 text-red-600 border-gray-300 rounded" name="payment-method" type="radio" />
                                <span class="ml-2">
                                    Bank
                                </span>
                                <img alt="Bank logos" class="ml-2" height="20" src="https://storage.googleapis.com/a1aa/image/RNVyzskpv55gNV8svi1Mzle0uQ6pfVf2HHiueSTWWHymyZYPB.jpg" width="100" />
                            </label>
                            <label class="flex items-center">
                                <input checked="" class="h-4 w-4 text-red-600 border-gray-300 rounded" name="payment-method" type="radio" />
                                <span class="ml-2">
                                    Cash on delivery
                                </span>
                            </label>
                        </div>
                        <div class="flex mb-4">
                            <input class="flex-1 p-2 border border-gray-300 rounded-l-md" placeholder="Coupon Code" type="text" />
                            <button class="bg-red-600 text-white p-2 rounded-r-md">
                                Apply Coupon
                            </button>
                        </div>
                        <button class="w-full bg-red-600 text-white p-2 rounded-md">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing_Details