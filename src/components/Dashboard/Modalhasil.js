import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper'


export default function Wallet() {
    const [openDetail, setOpenDetail] = React.useState(false);
    const [state, setState] = React.useState({

    })

    const handleClickHasilOpen = () => {
        setOpenDetail(true);
    };

    const handleHasilClose = () => {
        setOpenDetail(false);
    };

    const handleError = err => {
        console.error(err)
    }

    return (
        <div>
            <Paper variant="outlined" style={{padding:'2em', margin:'1em'}}>
                <Grid container>
                    <Grid item xs={4}>
                        <Grid>
                            <Grid>
                                Kereta
                            </Grid>
                            <Grid>
                                Kelas
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} >
                        <Grid>
                            Waktu Berangkat : xx:xx
                        </Grid>
                    </Grid>
                    <Grid item xs={3} style={{textAlign:'center'}}>
                        <Grid>
                            Harga : Rp.xxxxx
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid>
                            <Button variant="contained" color="primary" onClick={() => handleClickHasilOpen()}>
                                Detail
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        
            <Dialog
                open={openDetail}
                onClose={handleHasilClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle id="alert-dialog-title">{"Detail Jadwal"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Lokasi Stasiun
                        </DialogContentText>
                        <div style={{margin:'3em 0'} }>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.27557841691!2d106.82624076534091!3d-6.227351445492155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fab4ca372b%3A0xd239914cb95eda76!2sRT.5%2FRW.2%2C%20Kuningan%2C%20Kuningan%20Tim.%2C%20Kecamatan%20Setiabudi%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1616858141350!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <Button variant="contained" color="primary" fullWidth>
                            Pesan
                        </Button>
                    </DialogContent>
            </Dialog>
        </div>
    );
}