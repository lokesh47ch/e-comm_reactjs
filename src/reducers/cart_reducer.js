const CartReducer = (state, action) => {



  switch (action.type) {

    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      let itemExist = state.cart.find((item) => {
        return item.id == id + color;
      })


      if (itemExist) {

        let updatedCart = state.cart.map((item) => {
          console.log(item)
          if (item.id === id + color) {
            let newAmount = item.amount + amount;

            return {
              ...item,
              amount: newAmount,
            };

          }
          else {
            return item;
          }

        });
      

        return {
          ...state,
          cart: updatedCart,
        }

      }

      else {

        let productToAdd = {
          id: id + color,
          image: product.image[0].url,
          name: product.name,
          amount,
          color,
          price: product.price,
          max: product.stock,

        }

        return {
          ...state,
          cart: [...state.cart, productToAdd]
        }
      }

    // return {...state}


    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id != action.payload;
        })
      }

    case "CLEAR_CART":

      return {
        ...state, cart: []
      }

    case 'INCREASE_AMOUNT':
      let updatedCart = state.cart.map((item) => {
        // console.log(item.id, action.payload);
        if (item.id == action.payload ) {
        
          let newAmount = item.amount + 1;
          return {
            ...item, amount: newAmount
          }
        }
        else {
          return item
        }
      })
      return {
        ...state,
        cart: updatedCart,
      }


    case 'DECREASE_AMOUNT':
     let decreasedCart = state.cart.map((item) => {
        // console.log(item.id, action.payload);
        if (item.id == action.payload && item.amount > 1) {
          let newAmount = item.amount - 1;
          return {
            ...item, amount: newAmount
          }
        }
        else {
          return item
        }
      })
      return {
        ...state,
        cart: decreasedCart,
      }


      case 'SET_TOTAL_ITEM' : 
      let totalItems = state.cart.reduce((accu, currItem) => {
        let numberofItem = accu + currItem.amount;
       
        return numberofItem;
      },0)

      return {
        ...state, 
        totalItem: totalItems,
      }


      case 'SET_TOTAL_PRICE': 
      let totalPrice = state.cart.reduce((accu, currItem) => {
        let price = accu + currItem.amount* currItem.price;
       
        return price;
      },0)
  
       console.log(totalPrice);

      return {
        ...state,
        totalAmount: totalPrice,
      }


    default:
      return { ...state }
  }


}

export default CartReducer; 