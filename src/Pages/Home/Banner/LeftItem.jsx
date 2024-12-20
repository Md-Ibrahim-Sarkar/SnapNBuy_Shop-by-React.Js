import { MdOutlineNavigateNext } from "react-icons/md";


function LeftItem() {
  return (
      <div className="col-span-3 max-[780px]:hidden px-4 mt-10 lg:col ">
          <ul className="text-base">
              <li className="flex justify-between items-center cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Woman’s Fashion </a><span><MdOutlineNavigateNext className="w-6 h-5" /></span></li>
              <li className="flex justify-between items-center cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Men’s Fashion </a><span><MdOutlineNavigateNext className="w-6 h-5" /></span></li>
              <li className="cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Electronics</a></li>
              <li className="cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Home & Lifestyle</a></li>
              <li className="cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Medicine</a></li>
              <li className="cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Sports & Outdoor</a></li>
              <li className="cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Baby’s & Toys</a></li>
              <li className="cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Groceries & Pets</a></li>
              <li className="cursor-pointer xl:mb-5 lg:py-1.5 lg:px-1.5 rounded hover:bg-[#F5F5F5]"><a href="#">Health & Beauty</a></li>
          </ul>
    </div>
  )
}

export default LeftItem