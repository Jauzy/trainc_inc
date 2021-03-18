import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Tooltip from '@material-ui/core/Tooltip'

import IconButton from '@material-ui/core/IconButton';
import DarkIcon from '@material-ui/icons/NightsStay'
import LightIcon from '@material-ui/icons/Brightness7'

import { isDarkMode } from '../../static/atoms/utils'
import { useRecoilState } from 'recoil'

const Navbar = props => {
    const classes = useStyles();
    const section = ['Register', 'Login']
    const [darkMode, setDarkMode] = useRecoilState(isDarkMode)

    const handleToggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={classes.root}>
            <AppBar elevation={0} color='inherit' position='static'>
                <Container>
                    <Toolbar>
                        <Typography variant="h5" style={{ margin: '0 .5em', marginRight:'auto' }}>
                            <Link to={`/`}
                                style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>TRAIN•INC</Link>
                        </Typography>
                        {section.map(item => (
                            <Typography variant="h6" key={item} style={{ margin: '0 .5em' }}>
                                <Link to={`/${item.toLowerCase()}`}
                                    style={{ color: 'inherit', textDecoration: 'none' }}>{item}</Link>
                            </Typography>
                        ))}
                        <Tooltip style={{ marginLeft: '1em' }} title='Toggle Light/Dark Theme'>
                            <IconButton color="inherit" onClick={handleToggleTheme}>
                                {!darkMode ? <LightIcon /> : <DarkIcon />}
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Navbar

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
}));