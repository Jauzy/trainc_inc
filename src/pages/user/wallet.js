import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import QrReader from 'react-qr-reader'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Layout from '../../components/Dashboard/Dashboard'

import image from '../../images/wallet.svg'

export default function Wallet() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({

  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleScan = data => {
    if (data) {
      setState({
        result: data
      })
      alert(data)
      handleClose()
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <Layout>
      <Grid container spacing={0} style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Grid item md={9}>
          <img src='https://images4.alphacoders.com/976/thumb-1920-976013.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <div style={{ margin: 'auto' }}>
            <center><img src={image} style={{ maxWidth: '80%' }} /></center>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Saldo Anda
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Rp.50.000
            </Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => handleClickOpen()}>
                  Isi Saldo
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Detail
                </Button>
              </Grid>
            </Grid>
            <center style={{ marginTop: '2em' }}>
              <Typography variant='caption' color='textSecondary'>
                * Note: Untuk Isi Saldo Klik "Isi Saldo".
              </Typography>
            </center>
          </div>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Izinkan akses Kamera device Anda?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Nyalakan kamera dan arahkan ke kode QR untuk melakukan pembayaran.
          </DialogContentText>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
}