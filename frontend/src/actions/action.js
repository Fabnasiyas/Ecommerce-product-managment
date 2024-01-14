
// User Actions
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const CLEAR_LOGGED_IN_USER = 'CLEAR_LOGGED_IN_USER';

// Wishlist Actions
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

// User Action Creators
export const setLoggedInUser = (user) => ({
  type: SET_LOGGED_IN_USER,
  payload: user,
});

export const clearLoggedInUser = () => ({
  type: CLEAR_LOGGED_IN_USER,
});

// Wishlist Action Creators
export const addToWishlist = (productId) => ({
  type: ADD_TO_WISHLIST,
  payload: productId,
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});
