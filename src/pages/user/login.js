import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'

import Typography from '@material-ui/core/Typography';

import Button from '../../components/Button'
import Input from '../../components/Input'
import Wrapper from '../../containers/LoginRegister'

import { loginWithEmailPassword } from '../../../static/utils/redux/Actions/user'

const Component = ({ dispatch, isLoading, error }) => {
    const [state, setState] = React.useState({
        email: '', password: '',
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const onLoginWithPassword = () => loginWithEmailPassword(dispatch, { email: state.email, password: state.password })

    return (
        <Wrapper title='Login' bgImage={'https://images3.alphacoders.com/966/thumb-1920-966054.jpg'}>
            <Typography variant='h4' align='center' gutterBottom style={{ color: 'white' }}>
                LOGIN
            </Typography>
            <Input onChange={onChange} id='email' value={state.email} label='Email' placeholder='youremail@example.com' style={{ marginBottom: '.5em' }} />
            <Input onChange={onChange} id='password' value={state.password} label='Password' placeholder='Masukan password disini' type='password' />
            {error && <Typography variant='subtitle2' align='center' style={{ color: 'red', marginTop:'.5em' }}>
                {error}
            </Typography>}
            <Button onClick={onLoginWithPassword} variant='contained' color='primary' fullWidth>
                Login
            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='subtitle2' gutterBottom style={{ color: "white" }}>
                    Belum punya akun ? <Link to='/register' style={{ fontWeight: 'bold', color: "#418DFF" }}>Register</Link>
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                    <Link to='' style={{ fontWeight: 'bold', color: "#418DFF" }}>
                        Lupa Password ?
                    </Link>
                </Typography>
            </div>
        </Wrapper>
    )
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
}), null)(Component)