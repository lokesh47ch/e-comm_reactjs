 const ProductReducer= (state, action) => {
  switch (action.type) {
    case 'api_err':
        return {...state, isError: true,
            isLoading: false};
    
    case 'set_loading':
        return {...state, isLoading: true};

    case 'api_data': 
    const featured =  action.payload.filter((product) => product.featured === true )
    return {
        ...state,
        products: action.payload,
        isLoading: false,
        featuredProducts: featured,
    }

    case 'SET_SINGLE_LOADING':
        return {...state, isSingleLoading: true};

    case 'SET_SINGLE_PRODUCT':
        return {...state,
                isSingleLoading: false,
               singleProduct: action.payload }

               case 'SET_SINGLE_ERR':
                return {...state, isError: true,
                    isSingleLoading: false};
  
    default:
      return {...state}
  }
} 

export default ProductReducer;