import * as AuthActionTypes from './authActionTypes.js';
import * as EmailValidator from 'email-validator';
import firebase from '../../firebase';

// Auth state observer.
// This is triggered only on sign-in or sign-out
export const authObserver = () => (dispatch) => {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: AuthActionTypes.LOGIN_USER_SUCCESS,
        payload: user
      });
    } else {
      dispatch({
        type: AuthActionTypes.SIGNOUT_USER_SUCCESS,
        payload: null
      });
    }
  });
};

// The auth state listener/observer above will dispatch
// a sign in action when the sign in is successful
export const loginAction = loginData => async (dispatch) => {
  dispatch({ type: AuthActionTypes.LOGIN_USER_REQUEST });

  try {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    let { value: loginHint } = loginData;

    // Determine if the input is an email or not
    if (!loginHint.includes('@')) {
      loginHint += '@stgregs.nsw.edu.au'
    }

    // Validate email address
    if (!EmailValidator.validate(loginHint)) {
      return dispatch({
        type: AuthActionTypes.LOGIN_USER_ERROR,
        error: {
          code: 'Invalid email or student ID'
        }
      });
    }

    // Prevent other email addresses from being used during login
    if (loginHint.split('@')[1] !== 'stgregs.nsw.edu.au') {
      return dispatch({
        type: AuthActionTypes.LOGIN_USER_ERROR,
        error: {
          code: 'Invalid email address domain'
        }
      });
    }

    // Link Azure AD
    provider.setCustomParameters({
      tenant: process.env.REACT_APP_MICROSOFT_AD_TENANT,
      login_hint: loginHint
    });

    // Set persistance
    await firebase.auth().setPersistence(
      firebase.auth.Auth.Persistence['LOCAL']
    );

    // Show login popup
    const user = await firebase.auth().signInWithPopup(provider);

    // TODO: Save Microsoft Graph API authentication token
    // TODO: Update authentication claims
    const {
      additionalUserInfo: { profile: { givenName, surname } }
    } = user;

    let fullName = `${givenName} ${surname}`;

    if (loginHint === 'training05@stgregs.nsw.edu.au') {
      fullName = 'Cooper Beltrami';
    }

    await firebase.auth().currentUser.updateProfile({
      displayName: fullName
    });
  } catch (error) {
    dispatch({
      type: AuthActionTypes.LOGIN_USER_ERROR,
      error
    });
  }
};

// The auth state listener/observer above will dispatch
// a sign out action when the user sign out is successful
export const signOutAction = () => async (dispatch) => {
  dispatch({ type: AuthActionTypes.SIGNOUT_USER_REQUEST });

  try {
    await firebase.auth().signOut();
  }
  catch (error) {
    dispatch({
      type: AuthActionTypes.SIGNOUT_USER_ERROR,
      error
    });
  };
};