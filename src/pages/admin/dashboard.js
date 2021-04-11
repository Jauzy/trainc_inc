import React from 'react'
import Layout from '../../components/Dashboard/DashboardAdmin'

import {navigate} from 'gatsby'

import SEO from '../../components/Seo'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import dashadmin from '../../images/dashadmin.svg'

import EventIcon from '@material-ui/icons/Event';
import TrainIcon from '@material-ui/icons/Train';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'

const Component = props => {
    return(
        <Layout>
            <SEO title='Dashboard' />
            <Container>
                <Grid container spacing={3} style={{ margin:'2em', alignItems: 'center' }}>
                    <Grid item xs={12} md={3}>
                        <Typography align='center' variant='h2' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
                        List Data
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <center><img src={dashadmin} style={{ maxWidth: '40%' }} /></center>
                    </Grid>
                </Grid>
            
                <Grid container spacing={2}>    
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#fff', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/admin/voucher')} style={{color: '#000',width: '100%'}}>  
                                <div>
                                    <center>
                                        <AccountBalanceWalletIcon style={{ fontSize: '70pt'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                                        Voucher
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'grey' }}>
                                                Tampilkan seluruh voucher
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                                
                            </IconButton>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000', padding: '2em', borderRadius: '5px', background: '#fff', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/admin/station')}  style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <EmojiTransportationIcon style={{ fontSize: '70pt'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                                        Stasiun
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'grey' }}>
                                                Tampilkan seluruh stasiun
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </IconButton>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#fff', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/admin/train')} style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <TrainIcon style={{ fontSize: '70pt'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                                        Kereta
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'grey' }}>
                                                Tampilkan seluruh kereta
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </IconButton>
                        </Paper>                        
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#fff', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/admin/schedule')} style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <EventIcon style={{ fontSize: '70pt'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                                        Jadwal
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'grey' }}>
                                                Tampilkan seluruh jadwal
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </IconButton>
                        </Paper>                        
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#fff', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/admin/users')} style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <PersonIcon style={{ fontSize: '70pt'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                                        User
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'grey' }}>
                                                Tampilkan seluruh user
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </IconButton>
                        </Paper>                        
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} style={{ color: '#000',  padding: '2em', borderRadius: '5px', background: '#fff', maxWidth:'350px' }}>
                            <IconButton button onClick={() => navigate('/admin/admins')} style={{color: '#000',width: '100%'}}>
                                <div>
                                    <center>
                                        <AssignmentIndIcon style={{ fontSize: '70pt'}}/>
                                    </center>
                                    <Typography align='center' variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                                        Admin
                                    </Typography>
                                    <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                        <Grid>
                                            <Typography variant='subtitle2' style={{ color: 'grey' }}>
                                                Tampilkan seluruh admin
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