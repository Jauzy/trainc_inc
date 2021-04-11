import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux'
import { order_ticket } from '../../../static/utils/redux/Actions/user'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper'

import ShopIcon from '@material-ui/icons/Shop';

function Wallet({ dispatch, stations, trains, schedule, date }) {
    const [openDetail, setOpenDetail] = React.useState(false);
    const [state, setState] = React.useState({

    })
    const handleClickHasilOpen = () => {
        setOpenDetail(true);
    };

    const handleHasilClose = () => {
        setOpenDetail(false);
    };

    const onSubmit = () => {
        const payload = {
            price: schedule?.frontmatter.price,
            schedule: schedule,
            order_for_date: date
        }
        order_ticket(dispatch, payload)
        handleHasilClose()
    }

    React.useEffect(() => {
        setState({
            train: trains?.filter(item => (item.frontmatter.name == schedule.frontmatter.train))[0],
            depart: stations?.filter(item => (item.frontmatter.name == schedule.frontmatter.depart_station))[0],
            destination: stations?.filter(item => (item.frontmatter.name == schedule.frontmatter.destination_station))[0]
        })
    }, [stations, trains, schedule])

    return (
        <div>
            <Paper variant="outlined" style={{ padding: '2em', margin: '1em' }}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Typography variant='caption'>
                            Kereta
                        </Typography>
                        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                            {state.train?.frontmatter.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='caption'>
                            Kelas
                        </Typography>
                        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                            {state.train?.frontmatter.class}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} >
                        <Typography variant='caption'>
                            Waktu Berangkat
                        </Typography>
                        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                            {schedule?.frontmatter.depart_day}, {schedule?.frontmatter.time}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='caption'>
                            Harga Tiket Per 1 Orang
                        </Typography>
                        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                            <CurrencyFormat value={schedule?.frontmatter.price || 0} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                        </Typography>
                    </Grid>
                    <Grid item xs={3} >
                        <Typography variant='caption'>
                            Stasiun Keberangkatan - Stasiun Tujuan
                        </Typography>
                        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                            {schedule?.frontmatter.depart_station} - {schedule?.frontmatter.destination_station}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ display: 'flex' }}>
                        <Button fullWidth variant="contained" style={{ margin: 'auto' }} color="primary" onClick={() => handleClickHasilOpen()}>
                            <ShopIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Dialog
                open={openDetail}
                onClose={handleHasilClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg" fullWidth
            >
                <DialogContent>
                    <Grid container spacing={3} style={{ textAlign: 'center' }}>
                        <Grid item xs={2}>
                            <Typography variant='caption'>
                                Kereta
                            </Typography>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                                {state.train?.frontmatter.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='caption'>
                                Kelas
                        </Typography>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                                {state.train?.frontmatter.class}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} >
                            <Typography variant='caption'>
                                Waktu Berangkat
                        </Typography>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                                {schedule?.frontmatter.depart_day}, {schedule?.frontmatter.time}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='caption'>
                                Harga Tiket Per 1 Orang
                        </Typography>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                                <CurrencyFormat value={schedule?.frontmatter.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                            </Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant='caption'>
                                Stasiun Keberangkatan - Stasiun Tujuan
                            </Typography>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                                {schedule?.frontmatter.depart_station} - {schedule?.frontmatter.destination_station}
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{ margin: '1em 0' }}>
                        <iframe src={schedule?.frontmatter.src} width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <Button variant="contained" color="primary" onClick={onSubmit} fullWidth startIcon={<ShopIcon />} style={{ marginBottom: '1em' }}>
                        Pesan Sekarang
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default connect(state => ({
    user: state.user.user,
}), null)(Wallet)