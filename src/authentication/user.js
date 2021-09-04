import firebase from '../firebase';

/**
 * Get the currently logged in username
 */
export default function getUser() {
  return firebase.auth().currentUser.email.split('@')[0];
}


/**
* Get the currently logged in users name
*/
export default function getUserName() {
  const { currentUser } = firebase.auth().currentUser;

  return currentUser.displayName;
}

/**
 * Sign out user
 */
export default async function signOut() {
  await firebase.auth().signOut();
}