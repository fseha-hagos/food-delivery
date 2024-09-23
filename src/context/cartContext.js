

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
    const [likedProducts, setLikedProducts] = useState([])

    useEffect(() => {
        console.log("carts----------", carts)
        //totalSum(carts);
        //loadCartItems();
        //loadLikedItems();
    },[carts])

    const loadCartItems = async () => {
        let getCarts =  localStorage.getItem("carts");
        // let getCarts = await AsyncStorage.getItem("carts");
        let savedCarts = getCarts ? JSON.parse(getCarts) : [{}];
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
   

    const deleteAllCartItems = async () => {
        setCarts(null);
        localStorage.setItem("carts", JSON.stringify(carts))
        
    }
    const onAddToCart = async (item) => {
        await loadCartItems()
        if (carts === null) {
            setCarts([item]);
            localStorage.setItem("carts", JSON.stringify(carts))
            return
        }
        else{
            const itemExists = carts.findIndex((cart) => cart.menu_id === item.menu_id);
            if(itemExists !== -1){
                alert("you have ordered this item, pease go to your cart to edit your items..")
            }
            else{
                const newCarts = [...carts , item]
                localStorage.setItem("carts", JSON.stringify(newCarts))
                setCarts(newCarts);
            }
        }
    
    }


    const handleQuantityChange = (id, quantity) => {
        loadCartItems()
        setCarts(
            carts.map(item => {
                if (item.menu_id === id) {
                    return { ...item, quantity };
                }
                return item;
            }),
        )
        localStorage.setItem("carts", JSON.stringify(carts))
    };


    const handleRemoveItem = id => {
        loadCartItems()
        setCarts(carts.filter(item => item.menu_id !== id));
        localStorage.setItem("carts", JSON.stringify(carts))
    };

    const calculateItemTotal = (item) => {
        return item.price * item.quantity;
    };

    const calculateSubtotal = () => {
       const acc = carts ? ( carts.reduce((acc, item) => acc + item.price * item.quantity, 0)) : ( 0)
        return acc
    };

    const calculateTax = () => {
        return calculateSubtotal() * 0.1;
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax();
    };

    const value = {
        carts,
        onAddToCart,
        likedProducts,
        handleLiked,
        deleteAllCartItems,

        
        handleQuantityChange,
        handleRemoveItem,
        calculateItemTotal,
        calculateSubtotal,
        calculateTax,
        calculateTotal
       
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}


