import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext'
import  reducer from '../reducers/FilterReducer'




export const FilterContext = createContext();





export const FilterContextProvider = ({children}) => {
    
    
    const initialState = {
        filter_products: [],
        allProducts: [],
        gridview: true,
        sort_value: "z-a",

        filters: {
            text: "",
            category: "All",
            company: "All",
            colors: "All",
            maxPrice: 0,
            price: 0,
            minPrice: 0,
        }
        
    
    }
    const {products} = useProductContext();
   

    const [state, dispatch] = useReducer(reducer, initialState);



    useEffect(() => {
      
      
      dispatch({type: 'SORT_PRODUCTS'})
      dispatch({type: 'FILTER_PRODUCTS'})
    //   console.log("sort value changed")

},[products, state.sort_value, state.filters])
// console.log(   `filter: ${initialState.filter_products}`);


useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  },[products]);

//   console.log(state.filters.price);


// set grid view
 const setGridView = () => {
   
    return dispatch({type:'SET_GRID_VIEW'})

}
// set list view

const setListView = () => {
   
   return  dispatch({type:'SET_LIST_VIEW'})
}

//to sort product

const sortProduct = (event) => {

 dispatch({type: "SET_SORT_VALUE", payload: event.target.value})
 console.log(event.target.value);

}

// update the filter value 

const updateFilterValue = (event) => {
   const name = event.target.name;
   const value = event.target.value;
// console.log(event.target.name);
// console.log( event.target.value);

   dispatch({type: "UPDATE_FILTER_VALUE", payload:{name, value}});
}

const clearFilters = () => {
    dispatch({type: 'CLEAR_ALL_FILTERS'})
}

return   <FilterContext.Provider value = {{...state, setGridView, setListView, sortProduct,updateFilterValue, clearFilters}} >{children}</ FilterContext.Provider>

}

export const useFilterContext = () => {

    return useContext(FilterContext);
}



