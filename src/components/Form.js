import React from 'react';
import {navigate} from 'gatsby'

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


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AddressForm(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        asal: '', tujuan: '',
    })

    const handleChange = (event, id) => {
        setState({...state, [id] : event.target.value});
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const onSubmit = () => {
        if(state.asal != '' && state.tujuan != '' && selectedDate)
            navigate(`/user/hasilpencarian?asal=${state.asal}&tujuan=${state.tujuan}&date=${selectedDate}`)
    }

    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Pesan Tiket Kereta Api
        </Typography>
        <Paper style={{padding:'2em'}}>
        <Grid container spacing={3}> 
            <Grid item xs={12} sm={3}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">Stasiun Asal</InputLabel>
                    <Select
                        value={state.asal}
                        fullWidth
                        onChange={event => handleChange(event, 'asal')}
                        required
                        >
                        {props.data?.map(item => (
                            <MenuItem value={item.frontmatter.name}>{item.frontmatter.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Stasiun Tujuan</InputLabel>
                    <Select
                        value={state.tujuan}
                        fullWidth
                        onChange={event => handleChange(event, 'tujuan')}
                        required
                        >
                        {props.data?.map(item => (
                            <MenuItem value={item.frontmatter.name}>{item.frontmatter.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Tanggal Keberangkatan"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        fullWidth
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
            </Grid>
            <Grid item xs={12} sm={3} style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
                <Button variant="contained" color="primary" fullWidth size='large' onClick={onSubmit}>Cari Kereta</Button>
            </Grid>
        </Grid>
        <Typography variant='caption' color='textSecondary'>
            Harap isikan tanggal pemesanan, jika tidak maka tiket akan dipesan untuk hari ini!.
        </Typography>
        </Paper>
    </React.Fragment>
    );
}