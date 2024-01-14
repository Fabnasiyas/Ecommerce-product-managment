
import { combineReducers } from 'redux';
import {
  SET_LOGGED_IN_USER,
  CLEAR_LOGGED_IN_USER,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../actions/action.js';

// User Reducer
const userInitialState = null;
const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return action.payload;
    case CLEAR_LOGGED_IN_USER:
      return null;
    default:
      return state;
  }
};

// Wishlist Reducer

const wishlistReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
