import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default function AddressForm() {
    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Pesan Tiket Kereta Api
        </Typography>
        <Grid container spacing={3}> 
            <Grid item xs={12} sm={3}>
                <TextField
                    required
                    id="keberangkatan"
                    name="keberangkatan"
                    label="Keberangkatan"
                    fullWidth
                    autoComplete="shipping address-line1"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    id="tujuan"
                    name="tujuan"
                    label="Tujuan"
                    fullWidth
                    autoComplete="shipping address-line2"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Grid sm={6}>
                    <TextField
                        required
                        id="tanggal"
                        name="tanggal"
                        label="dd/mm/yyyy"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Pulang-Pergi ?"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary">Cari Kereta</Button>   
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
    );
}