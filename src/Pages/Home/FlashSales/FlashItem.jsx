import img from '../../../assets/Images/flash img.png'
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { useContext } from 'react';
import { ShopContext } from '../../../Context/Context';

function FlashItem({ data }) {

    const { setAddToCart, addToCart,favorite,setFavorite } = useContext(ShopContext)

    let exist = addToCart.find(item => item.id === data.id)
    
    const addHandler = () => {

        if (exist === undefined) {
            
            setAddToCart([
                ...addToCart,
                data,
            ])
        }
    }

    let favoriteExist = favorite.find(item => item.id === data.id)

    const favoriteHandler = () => {
        if (favoriteExist === undefined) {
            setFavorite([
                ...favorite,
                data,
            ])
        }
    }

    return (
        <div className="mt-10 group relative">
            {/* Product Card */}
            <div className="relative xl:w-[300px] lg:w-[230px] h-[250px] flex justify-center items-center bg-[#F5F5F5]">
                {/* Product Image */}
                <img className="w-3/6" src={data.image} alt={data.title} />

                {/* Discount Badge */}
                <div className="absolute top-3 left-3 w-16 h-9 bg-main-color rounded-lg flex justify-center items-center text-white">
                    <span>-40%</span>
                </div>

                {/* Favorite and Eye Icons */}
                <div className="absolute top-4 right-2">
                    <div onClick={favoriteHandler} className={`w-11 bg-withe  mb-1 flex justify-center items-center rounded-full h-11 cursor-pointer  transform transition-all ease-linear duration-300 ${favorite.find(item => item.id === data.id)? 'bg-rose-500': 'bg-white'}`}>
                        <MdFavoriteBorder className={`w-8 h-8 ${favorite.find(item => item.id === data.id)? 'text-white': ''}`} />
                    </div>
                    <div className="w-11 bg-white mb-1 flex justify-center items-center rounded-full h-11 cursor-pointer hover:bg-slate-300 transform transition-all ease-linear duration-300">
                        <FiEye className="w-8 h-8" />
                    </div>
                </div>

                {/* Add to Cart Button (Visible on Hover) */}
                <button 
                    onClick={addHandler}
                    className={`absolute bottom-0 left-0 w-full text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${addToCart.find(item => item.id === data.id)? 'bg-rose-500': 'bg-black'}`}>
                    {addToCart.find(item => item.id === data.id)? <span>Already Added</span>: 'Add To Cart'}
                </button>
            </div>

            {/* Product Details */}
            <div className="mt-4">
                {/* Product Title */}
                <h3 className="font-semibold">
                    {data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title}
                </h3>
                {/* Price */}
                <div className="mt-2 flex gap-3">
                    <span>${data.price}</span>
                    <span className="line-through">${(data.price - 10).toFixed(2)}</span>
                </div>
                {/* Ratings */}
                <div className="flex gap-1 items-center text-orange-300 mt-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-black">(88)</span>
                </div>
            </div>
        </div>
    );
}

export default FlashItem;
