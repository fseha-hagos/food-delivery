

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
// availability: true
// catagory_id: 2
// color: undefined
// description: "wewewe"
// image: "/media/item-images/b24f613f-72e8-475c-bc59-98a95383cf3c31.jpg"
// item_name: "wewewe"
// menu_id: "XFTBMY"
// price: "45.43"
// totalPurchase: undefined

//const TOKEN_KEY = 'my-jwt';
//export const API_URL = 'https://api.developbetterapps.com';
const AuthContext = createContext({});

export const useCartAuth = () => {
    return useContext(AuthContext);
}

export const CartProvider = ({children})=>{

    const [carts, setCarts] = useState(() =>
        localStorage.getItem("carts")
            ? JSON.parse(localStorage.getItem("carts")) : []
            
    );
    console.log("carts----------", carts)
    const [totalPrice, setTotalPrice] = useState(0);
    const [likedProducts, setLikedProducts] = useState([])

    useEffect(() => {
       
        //totalSum(carts);
        //loadCartItems();
        //loadLikedItems();
    },[totalPrice,carts])

    const loadCartItems = async () => {
        let getCarts =  localStorage.getItem("carts");
        // let getCarts = await AsyncStorage.getItem("carts");
        let savedCarts = getCarts ? JSON.parse(getCarts) : [];
        setCarts(savedCarts)
        //totalSum(savedCarts)
        console.log("getCarts : ",getCarts)
        console.log("getCarts : ",carts)
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
    // const refreshCart = async () => {
    //     loadCartItems();
    //     loadLikedItems();
    // }

    const onAddToCart = async (item) => {
        await loadCartItems()
        const itemExists = carts.findIndex((cart) => cart.menu_id === item.menu_id);
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
        
console.log(" cart item--------- : ",carts.length)
       // return Promise.resolve();
    }

    const value = {
        totalPrice,
        carts,
        onAddToCart,
        deleteFromCart,
        likedProducts,
        handleLiked,
        //refreshCart,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}


