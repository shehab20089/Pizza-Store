const inintState = {
  cart: []
};

export const cartReducer = (state = inintState, action) => {
  switch (action.type) {
    case "intializeCart":
      let cartItems = [];
      let items = localStorage.getItem("cart-items");

      if (items) {
        cartItems = JSON.parse(items);
      }

      return { ...state, cart: [...cartItems] };
    case "addTocart":
      let filterdArray = state.cart.filter((item, index) => {
        return item._id != action.payload._id;
      });
      localStorage.setItem(
        "cart-items",
        JSON.stringify([...filterdArray, action.payload])
      );

      return { ...state, cart: [...filterdArray, action.payload] };
    case "edititem":
      let newArr = state.cart.map((item, index) => {
        if (item._id == action.payload._id)
          item.quantity = action.payload.quantity;
        console.log(item);
        return item;
      });
      localStorage.setItem("cart-items", JSON.stringify([...newArr]));

      return { ...state, cart: [...newArr] };
    case "removeItem":
      localStorage.setItem(
        "cart-items",
        JSON.stringify([
          ...state.cart.slice(0, action.payload),
          ...state.cart.slice(action.payload + 1)
        ])
      );
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, action.payload),
          ...state.cart.slice(action.payload + 1)
        ]
      };
    case "restCart":
      localStorage.setItem("cart-items", JSON.stringify([]));
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};

export default cartReducer;
