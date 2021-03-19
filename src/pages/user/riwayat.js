import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Layout from '../../components/Dashboard/Dashboard'

import { useRecoilValue } from 'recoil'
import { isDarkMode } from '../../../static/atoms/utils'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const darkMode = useRecoilValue(isDarkMode)
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      //backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      backgroundColor: darkMode ? '#2196F3' : '#E6F2FF'
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: darkMode ? '#2196F3' : '#E6F2FF'
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <Layout style={{ margin: '4em 0' }}>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Riwayat Transaksi Tiket
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Riwayat pemesanan tiket yang telah anda lakukan.
            </Typography>
            <center>
              <Button variant='contained' color='primary'>Pesan Tiket</Button>
            </center>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>

            </Grid>
            <Grid item xs={12} md={8}>
              {cards.map((card) => (
                <Card className={classes.card} style={{ margin: "1em 0" }}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Voucher Rp.50.000
                    </Typography>
                    <Typography>
                      14 Mar 2021, 15:32 WIB
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </main>
    </Layout>
  );
}