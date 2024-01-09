import { createStore, combineReducers } from 'redux';
import { modalReducer } from './reducersModal';
import { darkModeReducer } from "./reducersDarkMode"

const rootReducer = combineReducers({
  modal: modalReducer,
  darkMode: darkModeReducer,
});

const store = createStore(rootReducer);

export default store;