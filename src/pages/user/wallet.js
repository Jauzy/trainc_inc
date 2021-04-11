import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CurrencyFormat from 'react-currency-format';

import Layout from '../../components/Dashboard/Dashboard'
import TableVoucherUser from '../../components/Dashboard/TableVoucherUser'
import SEO from '../../components/Seo'

import { connect } from 'react-redux'

import image from '../../images/wallet.svg'

import ModalWallet from '../../components/ModalWallet'

function Wallet({user}) {
  const [state, setState] = React.useState({
      budget : 0
  })
  const [open, setOpen] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDetailOpen = () => {
    setOpenDetail(true);
  };

  const handleDetailClose = () => {
      setOpenDetail(false);
  };

  React.useEffect(() => {
      setState({ ...state, budget: user?.budget })
  }, [])

  return (
    <Layout>
      <SEO title='Wallet' />
      <Grid container spacing={0} style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Grid item xs={12} lg={9}>
          <img src='https://images.hdqwalls.com/wallpapers/train-anime-art-4k-yp.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} lg={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <div style={{ margin: 'auto' }}>
            <center><img src={image} style={{ maxWidth: '80%' }} /></center>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Saldo Anda
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              <CurrencyFormat value={user?.budget || 0} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
            </Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => handleClickOpen()}>
                  Isi Saldo
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => handleClickDetailOpen()}>
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
      <ModalWallet open={open} handleClose={handleClose} state={state} setState={setState} />
      <Dialog
          open={openDetail}
          onClose={handleDetailClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
      >
          <DialogContent>
              <div style={{ margin: '3em 0', width: '700px' }}>

                  <Typography variant='h5' gutterBottom style={{ fontWeight: 'bold' }}>
                      History Top Up
          </Typography>
                  <TableVoucherUser />

              </div>
          </DialogContent>
      </Dialog>
    </Layout>
  );
}

export default connect(state => ({
  user: state.user.user,
}), null)(Wallet)