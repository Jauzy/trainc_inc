import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Advantages from '../components/Advantages'
import R_SVG from '../components/R_SVG'
import { connect } from 'react-redux'

function AddressForm({user}) {

    return (
        <React.Fragment>
            {!(user && user.historyOrder && user.historyOrder.length > 0) ? <Paper style={{ padding: '2em' }}>

                <Grid container spacing={3}>
                    <div style={{ padding: '2em 0' }}>
                        <Advantages svg={R_SVG} disableParallax />
                    </div>
                </Grid>

                <center>
                    <Typography variant="h6" gutterBottom >
                        Riwayat Pesanan Kosong
                    </Typography>
                </center>

                <center>
                    <Typography variant="h6" gutterBottom >
                        Pesanan yang sudah dipesan akan disimpan disini
                    </Typography>
                </center>

            </Paper> : 
                <Paper style={{ padding: '1em 2em' }}>
                    {user?.historyOrder?.map(item => (
                    <Paper elevation={3} style={{ background:'#3F51B5', color:'white', padding: '2em', borderRadius: '5px', width: '100%', margin: '1em 0' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Typography variant='caption' style={{ fontWeight: "bold" }}>
                                    Keberangkatan
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.schedule.frontmatter.depart_day} - {item.schedule.frontmatter.time}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' style={{ fontWeight: "bold" }}>
                                    Asal / Tujuan
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.schedule.frontmatter.depart_station} / {item.schedule.frontmatter.destination_station}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' style={{ fontWeight: "bold" }}>
                                    Harga
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.price}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' style={{ fontWeight: "bold" }}>
                                    Tanggal Pesan
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.order_date}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    ))}
                </Paper>
            }
        </React.Fragment>
    );
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
    user: state.user.user
}), null)(AddressForm)