import firebase from '../firebase';

export function signOut() {
  firebase.auth().signOut();  
}