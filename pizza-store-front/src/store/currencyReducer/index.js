const inintState = {
  currentCurrency: "USD"
};

export const currencyReducer = (state = inintState, action) => {
  switch (action.type) {
    case "changeCurrency":
      return {
        ...state,
        currentCurrency: state.currentCurrency == "USD" ? "EUR" : "USD"
      };
    default:
      return state;
  }
};

export default currencyReducer;
