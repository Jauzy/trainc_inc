import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

const Footer = props => {
    return (
        <Box style={{ margin: '2em 5vw' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>
                        About Us
                    </Typography>
                    <Typography variant='h6'>
                        Train.Inc
                    </Typography>
                    <Typography variant='p' color='textSecondary'>
                    Train.Inc adalah Aplikasi pemesanan tiket kereta api berbasis web yang dikhususkan untuk di Pulau Jawa. Kelebihan dari aplikasi ini adalah Anda bisa melakukan pembayaran menggunakan voucher. Train.Inc siap menemani liburan kalian.
                    </Typography>
                    {/* <Typography variant='p' color='textSecondary'>
                        Alamat : SMK Assalam Bandung (Jalan Situ Tarate Jl. Cibaduyut Raya, Cangkuang Kulon, Kec. Dayeuhkolot, Kota Bandung, Jawa Barat 40265)
                    </Typography> */}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>
                        Social Media
                    </Typography>
                    <IconButton color='primary'>
                       <a href="https://wa.link/vv1ltb" target="_blank"><WhatsAppIcon /></a>
                    </IconButton>
                    <IconButton color='secondary'>
                        <EmailIcon />
                    </IconButton>
                    <Typography variant='p' color='textSecondary'>
                        WhatsApp Number : 085798097127
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>
                        Team
                    </Typography>
                    <Typography variant='' color='textSecondary'>
                        M. Syafiq Yukinanda		  (1301183281)<br/>
                        Khalifa Lyan Bohemianda	  (1301180195)<br/>
                        M Abdurrahman Al Jauzy	  (1301184074)<br/>
                        Khalisyahdini			  (1301180208)
                    </Typography>
                    {/* <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
                        Alrights Reserved to Developer.
                    </Typography> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer