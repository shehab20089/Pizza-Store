const inintState = {
  cart: []
};

export const cartReducer = (state = inintState, action) => {
  switch (action.type) {
    case "addTocart":
      let filterdArray = state.cart.filter((item, index) => {
        return item._id != action.payload._id;
      });
      return { ...state, cart: [...filterdArray, action.payload] };
    case "edititem":
      let newArr = state.cart.map((item, index) => {
        if (item._id != action.payload._id) item.quantity = action.payload;
        return item;
      });
      return { ...state, cart: [...newArr] };
    case "removeItem":
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, action.payload),
          ...state.cart.slice(action.payload + 1)
        ]
      };
    case "restCart":
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};

export default cartReducer;
