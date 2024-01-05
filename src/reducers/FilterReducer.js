 const FilterReducer = (state, action) => {
     switch(action.type) {
        case 'LOAD_FILTER_PRODUCTS' : 
        let priceArr = action.payload.map((product) => product.price )

        let maxPrice = Math.max(...priceArr);
        // console.log(priceArr)
         
        return {...state ,
              allProducts: [...action.payload],
              filter_products:[...action.payload],
              filters: { ...state.filters, maxPrice, price: maxPrice },
            };

        case 'SET_GRID_VIEW' : 
        return {...state,
            gridview:true,
        }

        case 'SET_LIST_VIEW' : 
        return {...state,
             gridview:false,
            }

            case "SET_SORT_VALUE": 
            return {...state,
                 sort_value: action.payload,
                }



                //  To sort products------------------
            case 'SORT_PRODUCTS' : 
            let newSortData;
      
            const { filter_products, sort_value } = state;
            let tempSortProduct = [...filter_products];
      
            const sortingProducts = (a, b) => {
              if (sort_value === "lowest") {
          
                return a.price - b.price;
               
              }
      
              if (sort_value === "highest") {
                return b.price - a.price;
              }
      
              if (sort_value === "a-z") {
                return a.name.localeCompare(b.name);
              }
      
              if (sort_value === "z-a") {
                return b.name.localeCompare(a.name);
              }
            };
      
            newSortData = tempSortProduct.sort(sortingProducts);
            return {
              ...state,
              filter_products: newSortData,
            };


            case "UPDATE_FILTER_VALUE" : 
            const {name, value} = action.payload;
            return{
                ...state , filters:{
                    ...state.filters,
                    [name]: value,
                }
            }


            case 'FILTER_PRODUCTS': 
             const {allProducts} = state
            let tempProducts = [...allProducts];
          

            const {text,category, company,colors,price} = state.filters;
          
            
            if(text) {

                tempProducts =   tempProducts.filter((product) => {
                    return product.name.toLowerCase().includes(text);
                })
            }

            // if(category === 'all'){
            //   // console.log(tempProducts)
            //   return tempProducts
            // }


            if(category !== "All") {

              tempProducts =   tempProducts.filter((product) => {
                return product.category === category;
                
              })
              
          }

          if(company !== "All") {
                
            tempProducts =   tempProducts.filter((product) => {
              return product.company === company;
              
            })
            
        }

        if(colors !== "All") {
                
          tempProducts =   tempProducts.filter((product) => {
            return product.colors.includes(colors);
            
          })
          
      }


      if(price !==0) {
                
        tempProducts =   tempProducts.filter((product) => {
          return product.price <= price;
          console.log(tempProducts)
          
        })
        
    }


            return {
                ...state, 
                filter_products: tempProducts,
            }

            // To clear all filters

            case 'CLEAR_ALL_FILTERS' : 
            return  {
              ...state , filters: {
                ...state.filters, 
                text: "",
                category: "All",
                company: "All",
                colors: "All",
                price: 0,
                minPrice: 0,
              }
            }

        
        default:
            return state;
     }
 }

 export default FilterReducer;