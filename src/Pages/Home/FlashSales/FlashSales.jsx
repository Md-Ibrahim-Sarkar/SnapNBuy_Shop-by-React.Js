import date from '../../../assets/Images/date.png'
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import FlashItem from './FlashItem';

function FlashSales() {
    return (
        <div className="mt-16">
            <div className="flex items-center gap-4">
                <div className="w-6 h-11 rounded-md bg-main-color"></div>
                <span className='font-bold text-main-color'>Today's</span>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10'>
                    <h2 className='text-4xl py-5 pb-0'>Flash Sales</h2>
                    <img src={date} alt="" />
                </div>
                <div className='flex gap-6'>
                    <div className='bg-[#F5F5F5] w-14 h-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-slate-400 transform transition-all ease-linear duration-300'>
                        <FaLongArrowAltLeft className=' w-7 h-7 ' />
                    </div>
                    <div className='bg-[#F5F5F5] w-14 h-14 rounded-full flex justify-center items-center cursor-pointer hover:bg-slate-400 transform transition-all ease-linear duration-300'>
                        <FaLongArrowAltRight className=' w-7 h-7 ' />
                    </div>
                </div>
            </div>
            <div className='flex gap-4 justify-between'>
            <FlashItem />
            <FlashItem />
            <FlashItem /><FlashItem />

           </div>
        </div>
    )
}

export default FlashSales