import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'gatsby'

import Typography from '@material-ui/core/Typography'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Wrapper from '../../containers/LoginRegister'

import { registerWithEmailPassword } from '../../../static/utils/redux/Actions/user'

const Component = ({ dispatch, error }) => {

    const [state, setState] = React.useState({
        email: '', password: '', name: ''
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const onRegisterWithPassword = () => registerWithEmailPassword(dispatch, { email: state.email, password: state.password, name: state.name })

    return (
        <Wrapper title='Register' bgImage={'https://images.alphacoders.com/280/thumb-1920-280633.jpg'}>
            <Typography variant='h4' align='center' gutterBottom style={{ color: 'white' }}>
                DAFTAR
            </Typography>
            <Input onChange={onChange} id='name' value={state.name} label='Nama' placeholder='Masukan namamu' style={{ marginBottom: '.5em' }} />
            <Input onChange={onChange} id='email' value={state.email} label='Email' placeholder='Masukan emailmu' style={{ marginBottom: '.5em' }} />
            <Input onChange={onChange} id='password' value={state.password} label='Password' placeholder='Masukan passwordmu' type='password' />
            {error && <Typography variant='subtitle2' align='center' style={{ color: 'red', marginTop: '.5em' }}>
                {error}
            </Typography>}
            <Button onClick={onRegisterWithPassword} variant='contained' color='primary' fullWidth>
                Register
            </Button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='subtitle2' gutterBottom style={{ color: "white" }}>
                    Sudah punya akun ? <Link to='/login' style={{ fontWeight: 'bold', color: "#418DFF" }}>Login</Link>
                </Typography>
            </div>
        </Wrapper>
    )
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
}), null)(Component)