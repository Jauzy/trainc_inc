import firebase from 'gatsby-plugin-firebase'

export let firebaseAuth
export let firebaseDb

export const uiConfig = () => {
    return ({
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
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