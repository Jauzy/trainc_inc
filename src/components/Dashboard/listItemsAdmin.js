import React from 'react';
import {navigate} from 'gatsby'
import { connect } from 'react-redux'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import EventIcon from '@material-ui/icons/Event';
import TrainIcon from '@material-ui/icons/Train';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import Divider from '@material-ui/core/Divider'

import LightIcon from '@material-ui/icons/Brightness7'
import DarkIcon from '@material-ui/icons/NightsStay'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { isDarkMode } from '../../../static/atoms/utils'
import { useRecoilState } from 'recoil'

import { logout as logoutFunc } from '../../../static/utils/redux/Actions/user'

export const mainListItems = (
    <div style={{marginLeft:'.5em'}}>
        <ListItem button onClick={() => navigate('/admin/dashboard')}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => navigate('/admin')}>
            <ListItemIcon>
                <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Data" />
        </ListItem>
    </div>
);

export const Component = ({dispatch}) => {
    const [darkMode, setDarkMode] = useRecoilState(isDarkMode)

    const handleToggleTheme = () => {
        setDarkMode(!darkMode)
    }

    const logout = () => {
        logoutFunc(dispatch)
    }
    return(
    <div style={{marginLeft:'.5em'}}>
        <ListItem button onClick={() => navigate('/admin/voucher')}>
            <ListItemIcon>
                <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Voucher" />
        </ListItem>
        <ListItem button onClick={() => navigate('/admin/station')}>
            <ListItemIcon>
                <EmojiTransportationIcon />
            </ListItemIcon>
            <ListItemText primary="Stasiun" />
        </ListItem>
        <ListItem button onClick={() => navigate('/admin/train')}>
            <ListItemIcon>
                <TrainIcon />
            </ListItemIcon>
            <ListItemText primary="Kereta" />
        </ListItem>
        <ListItem button onClick={() => navigate('/admin/schedule')}>
            <ListItemIcon>
                <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Jadwal" />
        </ListItem>
        <Divider/>
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