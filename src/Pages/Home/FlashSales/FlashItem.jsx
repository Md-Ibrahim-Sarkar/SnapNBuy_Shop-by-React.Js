import img from '../../../assets/Images/flash img.png'
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FiEye } from "react-icons/fi";



function FlashItem() {
    return (
        <div className='mt-10'>
            <div className='relative xl:w-[300px] lg:w-[230px] h-[250px] flex justify-center items-center bg-[#F5F5F5]'>
                <img className='w-4/6' src={img} alt="" />
                <div className='absolute top-3 left-3 w-16 h-9 bg-main-color rounded-lg flex justify-center items-center text-white'>
                    <span>-40%</span>
                </div>
                <div className='absolute top-4 right-2'>
                    <div className='w-11 bg-white mb-1 flex justify-center items-center rounded-full h-11 cursor-pointer hover:bg-slate-300 transform transition-all ease-linear duration-300'>
                        <MdFavoriteBorder className='w-8 h-8' />
                    </div>
                    <div className='w-11 bg-white mb-1 flex justify-center items-center rounded-full h-11 cursor-pointer hover:bg-slate-300 transform transition-all ease-linear duration-300'>
                        <FiEye className='w-8 h-8' />
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='font-semibold'>HAVIT HV-G92 Gamepad</h3>
                <div className='mt-2 flex gap-3'>
                    <span>$120</span>
                    <span className='line-through'>$160</span>
                </div>
                <div className='flex gap-1 items-center text-orange-300 mt-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className='text-black'>(88)</span>
                </div>
            </div>
        </div>
    )
}

export default FlashItem