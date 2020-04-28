const inintState = {
  products: []
};

export const productReducer = (state = inintState, action) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload };

    case "setProduct":
      return { ...state, products: [...state.products, action.payload] };

    //define more cases as your project builds.
    default:
      return state;
  }
};

export default productReducer;
