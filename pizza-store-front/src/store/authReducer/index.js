const inintState = {
  isLoggedIn: false,
  user: {}
};

export const authReducer = (state = inintState, action) => {
  switch (action.type) {
    case "changeStatus":
      return { ...state, isLoggedIn: action.payload };
    case "setUser":
      return { ...state, user: action.payload };

    //define more cases as your project builds.
    default:
      return state;
  }
};

export default authReducer;
