import logo from '../../assets/Images/logo.png'
import Header_Input from './Header_Input'
import { GrFavorite } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { RiMenuFoldFill } from "react-icons/ri";
import { useContext } from 'react';
import { ShopContext } from '../../Context/Context';

function Header() {

  const { addToCart, favorite } = useContext(ShopContext)
  return (
    <div className='border-b sticky top-0 z-20 bg-white'>
      <div className='container mx-auto flex justify-between items-center py-3 '>
        <div>
          <Link to={'/'}> <img src={logo} alt="SnapnBuy shop" className='cursor-pointer' /></Link>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-8 font-semibold'>
            <li className='hover:text-rose-600 duration-300'><Link to={'/'}>Home</Link></li>
            <li className='hover:text-rose-600 duration-300'><Link to={'/contact'}>Contact</Link></li>
            <li className='hover:text-rose-600 duration-300'><Link to={'/about'}>About</Link></li>
            <li className='hover:text-rose-600 duration-300'><Link to={'/sign-up'}>Sign Up</Link></li>
          </ul>
        </div>
        <div className='flex items-center justify-between gap-4 max-[640px]:hidden'>
          <Header_Input />
          <div className='relative'>
            <GrFavorite className='w-10 h-6 cursor-pointer' />
            {favorite.length === 0? '': <div className='w-5 h-5  absolute -top-3 -right-1  rounded-full flex justify-center items-center text-white font-semibold bg-red-500'>
              <span className='text-[13px]'>{favorite.length}</span>

            </div>}
          </div>
          <div className='relative'>
            <AiOutlineShoppingCart className='w-10 h-6 cursor-pointer' />
            {
              addToCart.length === 0 ? '' : <div className='w-5 h-5  absolute -top-3 -right-1  rounded-full flex justify-center items-center text-white font-semibold bg-red-500'>
                <span className='text-[13px]'>{addToCart.length}</span>

            </div>
            }
          </div>
        </div>
        <RiMenuFoldFill className='hidden max-[640px]:block w-10 h-7' />

      </div>
    </div>
  )
}

export default Header

