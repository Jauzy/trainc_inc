import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Layout from '../../components/Layout'
import Alert from '../../components/Alert'

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2), 
  },
  heroContent: {
    //backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6), 
    backgroundColor: '#e6f2ff'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e6f2ff'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <Layout style={{margin:'4em 0'}}>
    <React.Fragment>
        
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Riwayat Transaksi Voucher
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        {/* <Layout style={{margin:'4em 0'}}> */}
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Riwayat Transaksi Voucher
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Pembelian voucher yang telah anda lakukan.
            </Typography>
            <center>
                <Alert/>
            </center>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              </Grid>
            </div>
            
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          {cards.map((card) => (
                <Card className={classes.card} style={{margin:"1em 0"}}>
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
        </Container>
        {/* </Layout> */}
      </main>
     
     
    </React.Fragment>
    </Layout>
  );
}