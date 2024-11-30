/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

 


export const ShopContext = createContext();


export const ContextProvider = ({ children }) => {


    const [flashData, setFlashData] = useState([])
    const [bestSelling, setBestSelling] = useState([])
    const [ourProduct, setOurProduct] = useState([])
    const [addToCart,setAddToCart] = useState([])
    const [favorite, setFavorite] = useState([])
    const [onOpen,setOnOpen] = useState(false)

 console.log(addToCart);
 
    useEffect(() => {
        async function todayData() {
            let data = await axios.get('https://fakestoreapi.com/products?limit=7')

            setFlashData(data.data);
            
        }
        todayData()
    }, [])
    
    useEffect(() => {
        async function todayData() {
            let data = await axios.get('https://fakestoreapi.com/products?limit=4')

            setBestSelling(data.data);
            
        }
        todayData()
    }, [])
    
    useEffect(() => {
        async function todayData() {
            let data = await axios.get('https://fakestoreapi.com/products?limit=8')

            setOurProduct(data.data);
            
        }
        todayData()
    },[])
    

    const value = {
        flashData,
        setFlashData,
        addToCart,
        setAddToCart,
        favorite,
        setFavorite,
        onOpen,
        setOnOpen,
        bestSelling,
        ourProduct
    }
console.log(favorite);


    return (
        <ShopContext.Provider value={value}>
         {children}
        </ShopContext.Provider>
    )
}