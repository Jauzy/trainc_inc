import React from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { loginGoogle, loginFacebook, loginTwitter, uiConfig, firebaseAuth } from '../../static/utils/Firebase'

import { registerWithEmail } from '../../static/utils/redux/Actions/user'

const logo = null
const google = null
const facebook = null

const Component = ({ dispatch, children, title, bgImage }) => {
    const useStyles = makeStyles(() => ({
        root: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        },
        wrapper: {
            padding: '20px 30px',
            paddingTop: '0',
            maxWidth: '400px',
            background: 'linear-gradient(196.92deg, rgba(240, 233, 255, 0.5) 8.64%, rgba(240, 233, 255, 0.3) 92.44%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            // background: 'rgba(255,255,255,.5)',
            // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            borderRadius: '10px',
        },
        input: {
            width: '100%',
            margin: '.5em 0',
            background: 'rgba( 255, 255, 255, 0.5 )',
            borderRadius: '5px'
        },
        iconButton: {
            backgroundColor: 'rgba( 255, 255, 255, 0.5 )',
            '&:hover': {
                background: "#f9f9f9",
            },
        }
    }));

    const onLoginGoogle = () => loginGoogle(registerWithEmail(dispatch))
    const onLoginFacebook = () => loginFacebook(registerWithEmail(dispatch))
    const onLoginTwitter = () => loginTwitter(registerWithEmail(dispatch))

    const classes = useStyles()

    return (
        <Layout style={{ padding: '6em 0' }} className={classes.root}>
            <SEO title={title} />
            <Paper className={classes.wrapper} elevation={0}>
                {children}
                <Typography align='center' style={{ color: '#fff', margin: '.5em 0' }} variant='subtitle2' gutterBottom>
                    Atau login dengan
                </Typography>
                <StyledFirebaseAuth uiConfig={uiConfig()} firebaseAuth={firebaseAuth}/>
            </Paper>
        </Layout >
    )
}

export default connect(() => ({
}), null)(Component)