
import { Link } from 'react-router-dom'
import img from '../../assets/Images/Side sign up Image.png'
function Log_In() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="hidden md:block ">
                    <img src={img} alt="A smartphone leaning against a shopping cart with shopping bags" className="object-cover w-full h-full" />
                </div>
                <div className="w-full p-8 md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900">Log in to Exclusive</h2>
                    <p className="mt-2 text-sm text-gray-600">Enter your details below</p>
                    <form className="mt-4">

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
                            <input type="text" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className="mt-6">
                                <button type="submit" className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Log In</button>
                            </div>
                            <div className="mt-4">
                                <Link to={'/sign-up'}>Forget Password?</Link>
                            </div>
                        </div>
                    </form>
                   
                </div>
            </div>
        </div>
    )
}

export default Log_In