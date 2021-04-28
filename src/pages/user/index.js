import React from 'react'
import Layout from '../../components/Dashboard/Dashboard'

import {navigate} from 'gatsby'

import SEO from '../../components/Seo'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import dashuser from '../../images/dashuser.svg'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import IconButton from '@material-ui/core/IconButton'


const Component = props => {
    return(
        <Layout>
            <SEO title='Dashboard' />
            <Container>
                <Grid container spacing={3} style={{ margin:'2em', alignItems: 'center' }}>
                    <Grid item xs={12} md={3}>
                        <Typography align='center' variant='h2' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
                            Menu
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <center><img src={dashuser} style={{ maxWidth: '40%' }} /></center>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>    
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#6C63FF', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/user/hasilpencarian')} style={{color: '#000',width: '100%'}}>  
                                <div>
                                    <center>
                                        <ShoppingCartIcon style={{ fontSize: '70pt', color: 'white'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold', color: 'white'}}>
                                        Pencarian Tiket
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'white' }}>
                                                Mencari tiket kereta api (untuk pulau Jawa)
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                                
                            </IconButton>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000', padding: '2em', borderRadius: '5px', background: '#6C63FF', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/user/akun')}  style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <PeopleIcon style={{ fontSize: '70pt', color: 'white'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold', color: 'white'}}>
                                        Akun
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'white' }}>
                                                Informasi tentang anda
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </IconButton>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#6C63FF', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/user/wallet')} style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <AccountBalanceWalletIcon style={{ fontSize: '70pt', color: 'white'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold', color: 'white'}}>
                                        Wallet
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'white' }}>
                                                Isi saldo dan history pengisian saldo
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </IconButton>
                        </Paper>                        
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#6C63FF', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/user/riwayat')} style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <MonetizationOnIcon style={{ fontSize: '70pt', color: 'white'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold', color: 'white'}}>
                                        Riwayat
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'white' }}>
                                                Riwayat pemesanan anda
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </IconButton>
                        </Paper>                        
                    </Grid>

                </Grid>
            </Container>
        </Layout>
    )
}

export default Component