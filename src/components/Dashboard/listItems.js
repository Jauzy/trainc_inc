import React from 'react';
import {navigate} from 'gatsby'
import { connect } from 'react-redux'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Divider from '@material-ui/core/Divider'

import LightIcon from '@material-ui/icons/Brightness7'
import DarkIcon from '@material-ui/icons/NightsStay'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { isDarkMode } from '../../../static/atoms/utils'
import { useRecoilState } from 'recoil'

import { logout as logoutFunc } from '../../../static/utils/redux/Actions/user'

const Component = ({dispatch}) => {
    const [darkMode, setDarkMode] = useRecoilState(isDarkMode)

    const handleToggleTheme = () => {
        setDarkMode(!darkMode)
    }

    const logout = () => {
        logoutFunc(dispatch)
    }
    return(
    <div style={{marginLeft:'.5em'}}>
        <ListItem button onClick={() => navigate('/user')}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => navigate('/user/hasilpencarian')}>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Pesan Tiket" />
        </ListItem>
        <ListItem button onClick={() => navigate('/user/akun')}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Akun" />
        </ListItem>
        <ListItem button onClick={() => navigate('/user/wallet')}>
            <ListItemIcon>
                <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Wallet" />
        </ListItem>
        <ListItem button onClick={() => navigate('/user/riwayat')}>
            <ListItemIcon>
                <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Riwayat Transaksi" />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleToggleTheme}>
            <ListItemIcon>
                {!darkMode ? <LightIcon /> : <DarkIcon />}
            </ListItemIcon>
            <ListItemText primary="Mode Cerah" />
        </ListItem>
        <ListItem button onClick={logout}>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
)}

export default connect(state => ({
    user: state.user.user,
}), null)(Component)