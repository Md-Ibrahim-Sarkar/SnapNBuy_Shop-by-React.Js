import { useContext } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GrFavorite } from "react-icons/gr"
import { ShopContext } from "../../Context/Context"


export function Cart() {

  const {addToCart,setOnOpen, onOpen} = useContext(ShopContext)
  return (
    <div onClick={()=> console.log(setOnOpen(!onOpen))
    } className='relative'>
      <AiOutlineShoppingCart className='w-10 h-6 cursor-pointer' />
      {
        addToCart.length === 0 ? '' : <div className='w-5 h-5  absolute -top-3 -right-1  rounded-full flex justify-center items-center text-white font-semibold bg-red-500'>
          <span className='text-[13px]'>{addToCart.length}</span>

        </div>
      }
    </div>
  )
}

export function Favorite() {

  const { favorite } = useContext(ShopContext)
  


  return (
    <div className='relative'>
      <GrFavorite className='w-10 h-6 cursor-pointer' />
      {favorite.length === 0 ? '' : <div className='w-5 h-5  absolute -top-3 -right-1  rounded-full flex justify-center items-center text-white font-semibold bg-red-500'>
        <span className='text-[13px]'>{favorite.length}</span>

      </div>}
    </div>
  )
}
