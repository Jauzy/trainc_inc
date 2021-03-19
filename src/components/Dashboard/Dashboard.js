import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import Navbar from '../Navbar'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from '../../../static/atoms/utils'

const drawerWidth = 240;

export default function Dashboard(props) {
    const darkMode = useRecoilValue(isDarkMode)
    let theme = createMuiTheme({
        palette: {
            type: !darkMode ? 'light' : 'dark',
            background: {
                // EDF1F5
                default: !darkMode ? '#FAFAFA' : '#0B1622',
                paper: !darkMode ? '#FAFAFA' : '#151F2E'
            }
        },
    });
    theme = responsiveFontSizes(theme)

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: open ? 'flex-end' : 'center',
            ...theme.mixins.toolbar,
        },
        drawerPaper: {
            position: 'auto',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        content: {
            flexGrow: 1,
            minHeight: '100vh',
            overflow: 'auto',
        },
    }));

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <div style={{ width: '100%' }}>
                    <Navbar />
                    <main className={classes.content}>
                        {props.children}
                    </main>
                </div>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerOpen}>
                            {open ? <ChevronLeftIcon /> : <MenuIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
            </div>
        </ThemeProvider>
    );
}