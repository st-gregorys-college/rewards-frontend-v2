import * as AuthActionTypes from '../actions/authActionTypes.js';
import firebase from '../../firebase';

const INITIAL_STATE = {
  isLoading: false,
  authUser: firebase.auth().currentUser,
  authError: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    // Sign-in actions
    case AuthActionTypes.LOGIN_USER_REQUEST:
      return {
          ...state,
          isLoading: true
      };

    case AuthActionTypes.LOGIN_USER_SUCCESS:
      return {
          ...state,
          isLoading: false,
          authUser: action.payload
      };
    case AuthActionTypes.LOGIN_USER_ERROR:
      return {
          ...state,
          isLoading: false,
          authUser: null,
          authError: action.error.code
      };

    // Sign-out actions
    case AuthActionTypes.SIGNOUT_USER_REQUEST:
      return {
          ...state,
          isLoading: true
      };

    case AuthActionTypes.SIGNOUT_USER_SUCCESS:
      return {
          ...state,
          isLoading: false,
          authUser: null
      };

    case AuthActionTypes.SIGNOUT_USER_ERROR:
      return {
          ...state,
          isLoading: false,
          authError: action.error.code
      };
      
    default:
      return state;
  }
};

export default authReducer;