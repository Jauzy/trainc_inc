import Cookies from 'universal-cookie';
import { navigate } from 'gatsby'

import { firebaseAuth, firebaseDb } from '../../Firebase'

const cookies = new Cookies()
//action type
export const LOADING = 'USER_LOADING';
export const FINISH = 'USER_FINISH'
export const RESET = 'USER_RESET'

const reset = () => ({
    type: RESET
})

const enableLoading = () => ({
    type: LOADING, data: { loading: true }
});

const finishReq = (data) => ({
    type: FINISH, data: { loading: false, ...data }
});

const retriveLoginUserData = (dispatch) => {
    const userRef = firebaseDb.ref('users')
    userRef.child(firebaseAuth.currentUser?.uid).on('value', result => {
        const token = { uid: firebaseAuth.currentUser?.uid, data: result.val() }
        cookies.set('user', token)
        dispatch(finishReq({ user: result.val() }))
        navigate('/user')
    })
}

const registerNewUser = (dispatch, user) => {
    const userRef = firebaseDb.ref('users')
    if (!user) {
        userRef.child(firebaseAuth.currentUser?.uid).set({
            name: firebaseAuth.currentUser?.displayName,
            email: firebaseAuth.currentUser?.email
        });
    } else {
        userRef.child(firebaseAuth.currentUser?.uid).set({
            name: user.name,
            email: user.email
        });
    }
    dispatch(finishReq())
    navigate('/login')
}

export const updateUserData = (dispatch, { gender, date_of_birth, name }) => {
    dispatch(enableLoading())
    try {
        firebaseDb.ref(`users/${firebaseAuth.currentUser?.uid}`).update({
            gender, date_of_birth, name
        })
        dispatch(finishReq())
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const registerWithEmailPassword = (dispatch, { name, email, password }) => {
    dispatch(enableLoading())
    try {
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                registerNewUser(dispatch, { name, email })
            })
            .catch((error) => {
                dispatch(finishReq({ error: error.message }))
            });
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const registerWithEmail = (dispatch) => {
    dispatch(enableLoading())
    try {
        const userRef = firebaseDb.ref('users')
        userRef.child(firebaseAuth.currentUser?.uid).on('value', result => {
            if (result.val()) {
                retriveLoginUserData(dispatch)
            } else {
                registerNewUser(dispatch, null)
            }
        })
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const loginWithEmailPassword = (dispatch, { email, password }) => {
    dispatch(enableLoading())
    firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
            retriveLoginUserData(dispatch)
        })
        .catch((error) => {
            dispatch(finishReq({ error: error.message }))
        });
}

export const loginWithEmail = (dispatch) => {
    dispatch(enableLoading())
    try {
        retriveLoginUserData(dispatch)
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const getUserData = (dispatch) => {
    dispatch(enableLoading())
    try {
        const token = cookies.get('user')
        const userRef = firebaseDb.ref('users')
        userRef.child(token.uid).on('value', result => {
            dispatch(finishReq({ user: result.val() }))
        })
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const logout = (dispatch) => {
    cookies.remove('user', '/')
    firebaseAuth.signOut()
    dispatch(reset())
    navigate('/user/login')
}