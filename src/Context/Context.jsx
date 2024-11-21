/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

 


export const ShopContext = createContext();


export const ContextProvider = ({ children }) => {


    const [flashData, setFlashData] = useState([])
    const [addToCart,setAddToCart] = useState([])
    const [favorite,setFavorite] = useState([])

 console.log(addToCart);
 
    useEffect(() => {
        async function todayData() {
            let data = await axios.get('https://fakestoreapi.com/products?limit=7')

            setFlashData(data.data);
            
        }
        todayData()
    },[])
    

    const value = {
        flashData,
        setFlashData,
        addToCart,
        setAddToCart,
        favorite,
        setFavorite
    }
console.log(favorite);


    return (
        <ShopContext.Provider value={value}>
         {children}
        </ShopContext.Provider>
    )
}