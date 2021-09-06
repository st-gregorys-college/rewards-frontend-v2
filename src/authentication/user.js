import firebase from '../firebase';

export function signOut() {
  firebase.auth().signOut();  
}

export function getUser() {
  const { email } = firebase.auth().currentUser;
  const userID = email.split('@')[0];

  return userID;
}

export function getUserName() {
  return firebase.auth().currentUser.displayName;
}

export function getUserAvatar() {
  return firebase.auth().currentUser.photoURL;
}

export function getUserEmail() {
  return firebase.auth().currentUser.email;
}

export function getUserID() {
  return firebase.auth().currentUser.uid;
}