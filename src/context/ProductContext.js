import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from '../reducers/ProductReducer'
import ProductList from "../components/ProductList";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({children}) => {

    const initialState  = {
        isLoading: false,
        isError: false,
        products: [],
        featuredProducts: [],
        isSingleLoading: false,
        singleProduct: {},

        
    }
 const [state, dispatch] = useReducer(Reducer, initialState)


  const getProducts = async(url) => {
    dispatch({type: 'set_loading'})
  try {
     const response = await axios.get(url);
     const products = await response.data;
    < ProductList   products={products}  />
     dispatch({type: 'api_data', payload: products})
    //  console.log(products);
  } catch (error) {
    dispatch({type:'api_err'})
  }
   
  };

  const getSingleProduct = async(url) =>{
    dispatch({type: 'SET_SINGLE_LOADING'})
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({type: 'SET_SINGLE_PRODUCT', payload: singleProduct })
    } catch (error) {
      dispatch({type: 'SET_SINGLE_ERR'})
    }
  }
useEffect(()=> {
    getProducts(API);

},[])
    return <AppContext.Provider value= {{...state, getSingleProduct }}>{children}</ AppContext.Provider>
}


const useProductContext = () => useContext(AppContext);

export {AppContext, AppProvider, useProductContext}

