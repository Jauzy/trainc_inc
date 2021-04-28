import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'

import {updateUserData} from '../../static/utils/redux/Actions/user'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar'

function AddressForm({dispatch, user}) {
    const [state, setState] = React.useState({
        name: '', gender:'', alamat:'',birth_date: '', phone: ''
    })

    const onChange = e => {
        setState({...state, [e.target.id] : e.target.value})
    }

    const onSubmit = () => {
        updateUserData(dispatch, {...state})
    }

    React.useEffect(() => {
        setState({...state, ...user})
    }, [user])

    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Perubahan
        </Typography>
        <Paper style={{padding:'2em', display:'flex', alignItems:'center'}}>
            <Avatar src={user?.photoURL} style={{marginRight:'1em', width:'150px',height:'150px'}} />
            <Grid container spacing={3}>
            <Grid item xs={4}> 
                <div>
                    <TextField
                    required
                    id="name"
                    label="Nama"
                    variant="outlined"
                    value={state?.name}onChange={onChange}
                    fullWidth
                    />
                </div>
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <TextField
                    required
                    id="phone"
                    label="Telepon"
                    variant="outlined"
                    value={state?.phone}onChange={onChange}
                    fullWidth
                    />
                </div>
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <TextField
                    required
                    id="alamat"
                    label="Alamat"
                    variant="outlined"
                    value={state?.alamat}onChange={onChange}
                    fullWidth
                    />
                </div>
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <TextField
                    required
                    id="gender"
                    label="Jenis Kelamin"
                    variant="outlined"
                    value={state?.gender}onChange={onChange}
                    fullWidth
                    />
                </div>
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <TextField
                        required
                        id="birth_date"
                        label="Tanggal Lahir"
                        variant="outlined"
                        type='date'
                        value={state?.birth_date} onChange={onChange}
                        fullWidth
                    />
                </div>
            </Grid> 

            <Grid item xs={4} style={{display:"flex", alignItems:'center', justifyContent:'stretch'}}>
                <Button variant="contained" onClick={onSubmit} color="primary" fullWidth size='large' style={{margin:'0 1em'}}>Simpan</Button>
                <Button variant="contained"  fullWidth size='large'  style={{margin:'0 1em'}}>Batal</Button>
            </Grid>
            
            </Grid>
        </Paper>
    </React.Fragment>
    );
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
    user: state.user.user
}), null)(AddressForm)