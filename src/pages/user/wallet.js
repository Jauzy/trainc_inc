import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Dashboard/Dashboard'

import image from '../../images/wallet.svg'

export default function Album() {
  return (
    <Layout>
      <Grid container spacing={0} style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Grid item md={9}>
          <img src='https://images4.alphacoders.com/976/thumb-1920-976013.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <div style={{margin:'auto'}}>
            <center><img src={image} style={{maxWidth:'80%'}} /></center>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Wallet
            </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Rp.50.000
            </Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Detail
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Selesai
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}