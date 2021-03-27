import React from 'react';
import {navigate} from 'gatsby'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export const mainListItems = (
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
        <ListItem button onClick={() => navigate('/user/settings')}>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Pengaturan" />
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
    </div>
);