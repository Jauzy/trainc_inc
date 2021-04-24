import Cookies from 'universal-cookie';
import { navigate } from 'gatsby'

import { firebaseAuth, firebaseDb } from '../../Firebase'

const defaultAvatar = 'https://i.pinimg.com/564x/89/99/d3/8999d3a5111ae9ddd22476c9d289f351.jpg'
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
        if(result.val().role != 'admin')
            navigate(`/${result.val().role}`)
        else navigate(`/admin/dashboard`)
    })
}

export const registerNewUser = (dispatch, user, role) => {
    const userRef = firebaseDb.ref('users')
    userRef.child(firebaseAuth.currentUser?.uid).set({
        name: user.name,
        email: user.email,
        photoURL: defaultAvatar,
        budget: 0,
        role
    });
    dispatch(finishReq())
    navigate('/login')
}

export const registerNewUserWithEmail = (dispatch, role) => {
    const userRef = firebaseDb.ref('users')
    userRef.child(firebaseAuth.currentUser?.uid).on('value', result => {
        if(!result.val()){
            userRef.child(firebaseAuth.currentUser?.uid).set({
                name: firebaseAuth.currentUser?.displayName,
                email: firebaseAuth.currentUser?.email,
                photoURL: firebaseAuth.currentUser?.photoURL || defaultAvatar,
                budget: 0,
                role
            });
            registerNewUserWithEmail(dispatch, role)
        }   
        else {
            const token = { uid: firebaseAuth.currentUser?.uid, data: result.val() }
            cookies.set('user', token)
            dispatch(finishReq({ user: result.val() }))
            navigate(`/${result.val().role}`)
        }
    })
}

export const updateUserData = (dispatch, { gender, birth_date, phone, alamat ,name }) => {
    dispatch(enableLoading())
    try {
        firebaseDb.ref(`users/${firebaseAuth.currentUser?.uid}`).update({
            gender, birth_date, phone, alamat ,name
        })
        dispatch(finishReq())
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const registerWithEmailPassword = (dispatch, { name, email, password, role }) => {
    dispatch(enableLoading())
    try {
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                registerNewUser(dispatch, { name, email }, role)
            })
            .catch((error) => {
                dispatch(finishReq({ error: error.message }))
            });
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const registerWithEmail = (dispatch, role) => {
    dispatch(enableLoading())
    try {
        const userRef = firebaseDb.ref('users')
        userRef.child(firebaseAuth.currentUser?.uid).on('value', result => {
            if (result.val()) {
                retriveLoginUserData(dispatch)
            } else {
                registerNewUser(dispatch, null, role)
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
            let data = result.val()
            if(!data?.historyOrder){
                data = {...data, historyOrder: []}
            }
            if(!data?.historyTopUp){
                data = {...data, historyTopUp: []}
            }
            dispatch(finishReq({ user: data }))
        })
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const logout = (dispatch) => {
    cookies.remove('user', '/')
    firebaseAuth.signOut()
    dispatch(reset())
    navigate('/login')
}

export const topup = (dispatch, amount) => {
    dispatch(enableLoading())
    try {
        const userRef = firebaseDb.ref('users')
        userRef.child(firebaseAuth.currentUser?.uid).get().then(result => {
            if (result.val()) {
                let budget = result.val().budget + amount
                let historyTopUp = result.val().historyTopUp
                if (!historyTopUp)
                    historyTopUp = []
                historyTopUp.push({date: (new Date()).toDateString(), nominal: amount})
                userRef.child(firebaseAuth.currentUser?.uid).set({
                    ...result.val(), budget, historyTopUp
                });
                dispatch(finishReq({ user: {...result.val(), budget} }))
            }
        })
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const order_ticket = (dispatch, payload) => {
    dispatch(enableLoading())
    try {
        const userRef = firebaseDb.ref('users')
        userRef.child(firebaseAuth.currentUser?.uid).get().then(result => {
            if (result.val()) {
                let budget = result.val().budget - payload.price
                let historyOrder = result.val().historyOrder
                if (!historyOrder)
                    historyOrder = []
                let order_for_date = new Date()
                if(payload.order_for_date)
                    order_for_date = payload.order_for_date
                historyOrder.push({...payload, order_for_date, order_date: (new Date()).toDateString()})
                userRef.child(firebaseAuth.currentUser?.uid).set({
                    ...result.val(), budget, historyOrder
                });
                dispatch(finishReq({ user: {...result.val(), budget} }))
                navigate('/user/riwayat')
            }
        })
    } catch (error) {
        dispatch(finishReq(error))
    }
}

export const get_user_data = (dispatch) => {
    dispatch(enableLoading())
    try{
        const userRef = firebaseDb.ref('users')
        userRef.get().then(result => {
            function checkRole(user) {
                return (user.role == 'user')
            }
            if (result.val()) {
                dispatch(finishReq({ users: Object.values(result.val()).filter(checkRole)}))
            }
        })
    } catch (error){
        dispatch(finishReq(error))
    }
}

export const get_admin_data = (dispatch) => {
    dispatch(enableLoading())
    try{
        const userRef = firebaseDb.ref('users')
        userRef.get().then(result => {
            function checkRole(user) {
                return (user.role == 'admin')
            }
            if (result.val()) {
                dispatch(finishReq({ users: Object.values(result.val()).filter(checkRole)}))
            }
        })
    } catch (error){
        dispatch(finishReq(error))
    }
}

export const get_penjualan_data = (dispatch) => {
    dispatch(enableLoading())
    try{
        const userRef = firebaseDb.ref('users')
        userRef.get().then(result => {

            function checkRole(user) {
                return (user.role == 'user')
            }

            let transaksi = []
            function getTransaksi(user){
                user.historyOrder?.map(item => {
                    let jadwal = item.schedule.frontmatter
                    transaksi.push({
                        tanggal: item.order_date,
                        nama: user.name,
                        email: user.email,
                        harga: item.price,
                        jadwal: `${jadwal.depart_station} ke ${jadwal.destination_station} hari ${jadwal.depart_day} jam ${jadwal.time}`
                    })
                })
            }
            
            let usertemp = Object.values(result.val()).filter(checkRole)
            usertemp.map(getTransaksi)

            if (result.val()) {
                dispatch(finishReq({ transaksi }))
            }
        })
    } catch (error){
        dispatch(finishReq(error))
    }
}

export const get_topup_data = (dispatch) => {
    dispatch(enableLoading())
    try{
        const userRef = firebaseDb.ref('users')
        userRef.get().then(result => {
            function checkRole(user) {
                return (user.role == 'user')
            }

            let topup = []
            function getTopup(user){
                user.historyTopUp?.map(item => {
                    topup.push({
                        tanggal: item.date,
                        nama: user.name,
                        email: user.email,
                        nominal: item.nominal,
                    })
                })
            }
            
            let usertemp = Object.values(result.val()).filter(checkRole)
            usertemp.map(getTopup)

            if (result.val()) {
                dispatch(finishReq({ topup }))
            }
        })
    } catch (error){
        dispatch(finishReq(error))
    }
}