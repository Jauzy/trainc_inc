import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, firebaseAuth } from '../../../static/utils/Firebase'
import { loginWithEmailPassword, registerWithEmailPassword } from '../../../static/utils/redux/Actions/user'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout'

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn({ dispatch, error }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        email: '', password: '', name: ''
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const onLoginWithPassword = () => registerWithEmailPassword(dispatch, { email: state.email, password: state.password, name: state.name, role:"finance" })

    return (
        <Layout style={{margin:'4em 0'}}>
            <SEO title='Register Finance' />
            <Container component="main" maxWidth='md'>
                <CssBaseline />
                <div style={{display:'flex', alignItems:'center'}}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <div style={{marginLeft:".5em"}}>
                        <Typography component="h1" variant="h5" style={{fontWeight:'bold'}}>
                            Mendaftar
                        </Typography>
                        <Typography color='textSecondary' variant="caption" style={{fontWeight:'bold'}}>
                            Sebagai Finance
                        </Typography>
                    </div>
                </div>
                <Grid container spacing={3} alignItems='center'>
                    <Grid item md={8}>
                        <div className={classes.paper}>
                            <div className={classes.form}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    onChange={onChange}
                                    value={state.name}
                                    label="Nama Lengkap"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    onChange={onChange}
                                    value={state.email}
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    onChange={onChange}
                                    value={state.password}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={onLoginWithPassword}
                                >
                                    Mendaftar
                                </Button>
                                {error && <Typography variant='subtitle2' align='center' style={{ color: 'red', marginTop:'.5em', marginBottom:'1em' }}>
                                    {error}
                                </Typography>}
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <center>
                            <Typography variant='caption' style={{fontWeight:'bold'}} color='textSecondary' >
                                Atau Login Dengan
                            </Typography>
                        </center>
                        <StyledFirebaseAuth uiConfig={uiConfig(dispatch, 'finance')} firebaseAuth={firebaseAuth} />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
}), null)(SignIn)