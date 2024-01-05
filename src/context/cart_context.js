import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer";

const CartContext = createContext();

const setCartFromLocalStorage = () => {

let items = localStorage.getItem("myCart")

if(items)
{
    return(JSON.parse(items))
}
else{
    return []
}


}

const initialState = {
        cart: setCartFromLocalStorage(),
        totalItem: "",
        totalAmount: "",
        shippingFee: 50000,
}

const CartProvider = ({children}) => {

   
    const [state, dispatch] = useReducer(reducer, initialState)


    const addToCart =(id, color, amount, product) => {
   
        dispatch({type:"ADD_TO_CART",
         payload:{id, color, amount,product}})
        //  console.log(state.cart)
         
    }

    // To remove an item from cart--------------------------------------------------------------------

const removeItem  = (id) => {
 dispatch({type: "REMOVE_ITEM", payload: id})
}

// TO clear all Items from cart ----------------------------------------------------------------------

const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
}

const setIncrement = (id) => {
    
    dispatch({type: 'INCREASE_AMOUNT' , payload: id })
    
}

const setDecrement = (id) => {
    dispatch({type: 'DECREASE_AMOUNT' , payload: id })
 
}

useEffect(() => {
    dispatch({type: 'SET_TOTAL_ITEM'})
    dispatch({type: 'SET_TOTAL_PRICE'})

  localStorage.setItem("myCart", JSON.stringify(state.cart))
}, [state.cart])



return<CartContext.Provider value ={{ ...state,addToCart, removeItem, clearCart,setIncrement, setDecrement}}>{children}</CartContext.Provider>;

}

export const useCartContext = () => useContext(CartContext)

export {CartProvider}
