const initialState = {
  darkMode: false,
};

export const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIGHT_MODE":
      return { ...state, darkMode: false };
    case "DARK_MODE":
      return { ...state, darkMode: true };
    default:
      return state;
  }
};
