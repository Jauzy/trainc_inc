
/**
* Module firebase
* @module firebase
*/

import firebase from 'gatsby-plugin-firebase'
import {registerNewUserWithEmail} from './redux/Actions/user'

/**
* Init Firebase Auth Dan Firebase RTDB
*/
export let firebaseAuth
export let firebaseDb

/**
* Pengaturan Firebase API
*/
export const uiConfig = (dispatch, role) => {
    return ({
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => {
                registerNewUserWithEmail(dispatch, role)
            }
        }
    })
}

if (typeof window !== "undefined") {
    firebaseAuth = firebase.auth()
    firebaseDb = firebase.database()
}

/**
* Pengaturan Login Via Google
*/
export const loginGoogle = (callback) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    loginBy(callback, provider)
}

/**
* Pengaturan Login Via Facebook
*/
export const loginFacebook = (callback) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    loginBy(callback, provider)
}

/**
* Pengaturan Login Via Twitter
*/
export const loginTwitter = (callback) => {
    var provider = new firebase.auth.TwitterAuthProvider();
    loginBy(callback, provider)
}

const loginBy = (callback, provider) => {
    firebaseAuth.signInWithPopup(provider)
        .then((result) => {
            callback()
        }).catch((error) => {});
}