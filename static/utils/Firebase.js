import firebase from 'gatsby-plugin-firebase'
import {navigate} from 'gatsby'
import {registerNewUserWithEmail} from './redux/Actions/user'

export let firebaseAuth
export let firebaseDb

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

export const loginGoogle = (callback) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth
        .signInWithPopup(provider)
        .then((result) => {
            callback()
        }).catch((error) => {});
}

export const loginFacebook = (callback) => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebaseAuth
        .signInWithPopup(provider)
        .then((result) => {
            callback()
        }).catch((error) => {});
}

export const loginTwitter = (callback) => {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebaseAuth
        .signInWithPopup(provider)
        .then((result) => {
            callback()
        }).catch((error) => {});
}