import React from 'react';
import {navigate} from 'gatsby'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import EventIcon from '@material-ui/icons/Event';
import TrainIcon from '@material-ui/icons/Train';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

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

export const secondaryListItems = (
    <div style={{marginLeft:'.5em'}}>
        <ListItem button onClick={() => navigate('/admin/dashboard/voucher')}>
            <ListItemIcon>
                <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Voucher" />
        </ListItem>
        <ListItem button onClick={() => navigate('/admin/dashboard/station')}>
            <ListItemIcon>
                <EmojiTransportationIcon />
            </ListItemIcon>
            <ListItemText primary="Stasiun" />
        </ListItem>
        <ListItem button onClick={() => navigate('/admin/dashboard/train')}>
            <ListItemIcon>
                <TrainIcon />
            </ListItemIcon>
            <ListItemText primary="Kereta" />
        </ListItem>
        <ListItem button onClick={() => navigate('/admin/dashboard/schedule')}>
            <ListItemIcon>
                <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Jadwal" />
        </ListItem>
    </div>
);