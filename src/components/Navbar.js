import React from 'react'
import { Link, navigate } from 'gatsby'
import { connect } from 'react-redux'
import Cookies from 'universal-cookie'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

import IconButton from '@material-ui/core/IconButton';
import DarkIcon from '@material-ui/icons/NightsStay'
import LightIcon from '@material-ui/icons/Brightness7'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { isDarkMode } from '../../static/atoms/utils'
import { useRecoilState } from 'recoil'

import { getUserData, logout as logoutFunc } from '../../static/utils/redux/Actions/user'

import logoDark from "../images/logo-dark.png"
import logoLight from "../images/logo-light.png"

const cookies = new Cookies()

const Navbar = ({ dispatch, user, children, position, className }) => {
    const classes = useStyles();
    const section = [{ name: 'Login', uri: '/login' }]
    const [darkMode, setDarkMode] = useRecoilState(isDarkMode)

    const handleToggleTheme = () => {
        setDarkMode(!darkMode)
    }

    const logout = () => {
        logoutFunc(dispatch)
    }

    React.useEffect(() => {
        if (!user && cookies.get('user')) getUserData(dispatch)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.root}>
            <AppBar elevation={0} color='inherit' className={className} position={position || 'static'}>
                <Container>
                    <Toolbar>
                        <Link to={`/`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold', marginRight: 'auto' }}>
                            <img width={"120px"} src={darkMode ? logoLight : logoDark} />
                        </Link>

                        {user ? <div style={{ display: 'flex', justifyContent: 'stretch', }}>
                            <Button color='inherit' onClick={() => navigate(`/${user.role}`)} endIcon={
                                <Avatar alt={user.name} src={user.photoURL} className={classes.small} />
                            }>
                                {user.name}
                            </Button>
                            <Tooltip style={{ marginLeft: '0em' }} title='Logout'>
                                <IconButton color="inherit" onClick={logout}>
                                    <ExitToAppIcon />
                                </IconButton>
                            </Tooltip>
                        </div> : <div>
                            {section.map(item => (
                                <Typography variant="subtitle1" key={item} style={{ margin: '0 .5em', fontWeight: 'bold' }}>
                                    <Link to={item.uri}
                                        style={{ color: 'inherit', textDecoration: 'none' }}>{item.name}</Link>
                                </Typography>
                            ))}
                        </div>}
                        <Tooltip style={{ marginLeft: '0em' }} title='Toggle Light/Dark Theme'>
                            <IconButton color="inherit" onClick={handleToggleTheme}>
                                {!darkMode ? <LightIcon /> : <DarkIcon />}
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

export default connect(state => ({
    user: state.user.user,
}), null)(Navbar)