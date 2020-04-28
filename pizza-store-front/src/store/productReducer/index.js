const inintState = {
  products: []
};

export const productReducer = (state = inintState, action) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload };

    case "setProduct":
      return { ...state, products: [...state.products, action.payload] };

    default:
      return state;
  }
};

export default productReducer;
