import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

import Advantages from '../components/Advantages'
import R_SVG from '../components/R_SVG'
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AddressForm() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Perubahan
        </Typography>
        <Paper style={{padding:'2em'}}>
            <Grid container spacing={3}>
            <Grid item xs={4}> 
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Nama Depan"
                    defaultValue="Dini"
                    variant="outlined"
                    fullWidth
                    />
                </div>
              
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Nama Belakang"
                    defaultValue="Chan"
                    variant="outlined"
                    fullWidth
                    />
                </div>
                
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <KeyboardDatePicker
                        required
                        id="date-picker-dialog"
                        label="Tanggal Lahir"
                        format="MM/dd/yyyy"
                        variant="outlined"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        fullWidth
                    />
                </div>
                
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    defaultValue="*******"
                    variant="outlined"
                    fullWidth
                    />
                </div>
                
            </Grid> 

            <Grid item xs={4} >            
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Telepon"
                    defaultValue="08135966822"
                    variant="outlined"
                    fullWidth
                    />
                </div>
            
            </Grid> 
            
            
            <Grid item xs={4} style={{display:"flex", alignItems:'center', justifyContent:'stretch'}}>
                <Button variant="contained" color="primary" fullWidth size='large' style={{margin:'0 1em'}}>Simpan</Button>
                <Button variant="contained"  fullWidth size='large'  style={{margin:'0 1em'}}>Batal</Button>
                
            </Grid>
            
            </Grid>
        </Paper>
    </React.Fragment>
    );
}
