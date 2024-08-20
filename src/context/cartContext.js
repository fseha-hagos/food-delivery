

import {useContext, createContext, useEffect, useState} from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';






// interface AuthProps {
//     totalPrice?: number,
//     carts?: myProductsFromDatabasePeopsWithId[],
//     onAddToCart?: (item: myProductsFromDatabasePeopsWithId) => Promise<void | any>;
//     deleteFromCart?: (item: myProductsFromDatabasePeopsWithId) => Promise<void | any>;
//     handleLiked?:  (item: myProductsFromDatabasePeopsWithId) => Promise<void | any>;
//     refreshCart?: () => Promise<void | any>;
//     likedProducts?: myProductsFromDatabasePeopsWithId[];
// }

//const TOKEN_KEY = 'my-jwt';
//export const API_URL = 'https://api.developbetterapps.com';
const AuthContext = createContext({});

export const useCartAuth = () => {
    return useContext(AuthContext);
}

export const CartProvider = ({children})=>{

    const [carts, setCarts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [likedProducts, setLikedProducts] = useState([])

    useEffect(() => {
       
        //totalSum(carts);
        //loadCartItems();
        //loadLikedItems();
    },[totalPrice,carts])

    const loadCartItems = async () => {
        let getCarts = localStorage.getItem("carts");
        // let getCarts = await AsyncStorage.getItem("carts");
         let savedCarts = getCarts ? JSON.parse(getCarts) : [];
        setCarts(savedCarts)
        totalSum(savedCarts)
        //console.log("getCarts : ",getCarts)
    }
    const loadLikedItems = async () => {
        let getLiked = localStorage.getItem("liked-products");
        // let getLiked = await AsyncStorage.getItem("liked-products");
        let savedLikes = getLiked ? JSON.parse(getLiked) : [];
        setLikedProducts(savedLikes);
    }

    const totalSum = (carts) => {
        const totalSum = carts.reduce((accumulator, item) => accumulator + (Number(item.price)*Number(item.totalPurchase)), 0);
        setTotalPrice(totalSum);
        console.log(totalSum)
      //  const totalSum ()=  carts.reduce((ammount, item) => ammount+ item.price , 0);
    }

    const handleLiked = async (items) => { 
         
         const isLiked = likedProducts.some((liked) => liked.id === items.id);
         
         if (isLiked) {
            const newItems = likedProducts.filter((liked) => liked.id !== items.id) ;
            localStorage.setItem("liked-products", JSON.stringify(newItems));
            // await AsyncStorage.setItem("liked-products", JSON.stringify(newItems));
            setLikedProducts(newItems);
          } else {
            const dislike =  [...likedProducts, items]
            localStorage.setItem("liked-products", JSON.stringify(dislike));
            // await AsyncStorage.setItem("liked-products", JSON.stringify(dislike));
            setLikedProducts(dislike);
          }      
          console.log("context liked products: ",likedProducts)
          return Promise.resolve();
      }
   
     
    const deleteFromCart = async (item) => {
        const newItems = carts.filter((cart) => cart.id !== item.id) ;
        localStorage.setItems("carts", JSON.stringify(newItems));
        // await AsyncStorage.setItem("carts", JSON.stringify(newItems));
        setCarts(newItems)
        totalSum(newItems);
    }
    const refreshCart = async () => {
        loadCartItems();
        loadLikedItems();
    }

    const onAddToCart = async (item) => {
        const itemExists = carts.findIndex((cart) => cart.id === item.id);
        if(itemExists !== -1){
            const updatedCarts = [...carts];
            updatedCarts[itemExists].totalPurchase = (item.totalPurchase); // Add 1 to quantity
            updatedCarts[itemExists].color = (item.color ); // Add 1 to quantity

      localStorage.setItem("carts", JSON.stringify(updatedCarts))
    //   await AsyncStorage.setItem("carts", JSON.stringify(updatedCarts));
      setCarts(updatedCarts);
      totalSum(updatedCarts);
        }
       else{
        const newCarts = [...carts , item]
        localStorage.setItem("carts", JSON.stringify(newCarts))
        // await AsyncStorage.setItem("carts",JSON.stringify(newCarts))
       setCarts(newCarts);
       totalSum(newCarts)
       }
        
console.log(" item--------- : ",item)
       // return Promise.resolve();
    }

    const value = {
        totalPrice,
        carts,
        onAddToCart,
        deleteFromCart,
        likedProducts,
        handleLiked,
        refreshCart,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}


