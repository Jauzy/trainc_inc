import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import Layout from '../../components/Dashboard/Dashboard'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from '../../../static/atoms/utils'

import Carrousel from '../../components/Carrousel'
import Filter from '../../components/Filter'
import Header from '../../components/Header'
import SEO from '../../components/Seo'
import StreamingSvg from '../../components/StreamingSVG'
import Advantages from '../../components/Advantages'
import R_Kosong from '../../components/R_Kosong'
import R_SVG from '../../components/R_SVG'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const IndexPage = () => {
  return(
    <Layout>
      <SEO title='Home' />
            <Header image={'https://images.hdqwalls.com/wallpapers/train-anime-art-4k-yp.jpg'} 
                blur={0} />
      
      {/* <div style={{padding:'2em 0'}}>
      <Advantages firstRow={firstRow} secondRow={secondRow} svg={StreamingSvg} title1='Menampilkan Riwayat Pemesananmu' title2='Riwayat Pemesanan' />
      </div> */}

      <div style={{padding:'2em 0'}}>
      <Advantages svg={StreamingSvg} title1='Menampilkan Riwayat Pemesananmu' title2='Riwayat Pemesanan' />
      </div>

      <div style={{padding:'0em 5vw', marginBottom:'3em'}}>
        <Filter/>
      </div>

      <div style={{padding:'0em 5vw', marginBottom:'3em'}}>
        <R_Kosong/>
      </div>

      {/* <div style={{padding:'2em 0'}}>
      <Advantages svg={R_SVG} />
      </div> */}

      {/* carrousel */}
      {/* <div style={{padding:'0em 5vw', marginBottom:'3em'}}>
        <Form/>
      </div> */}
      
    </Layout>
  )
}

export default IndexPage

const firstRow = [
  {
      icon: FastForwardIcon,
      title: 'Jadwal Lengkap!',
      desc: 'Jadwal kereta lengkap, sehingga kamu tidak akan tertinggal kereta untuk urusan pentingmu!'
  },
  {
      icon: PhonelinkIcon,
      title: 'Fleksibel',
      desc: 'Cari jadwal yang kamu inginkan kapanpun dimanapun kamu suka dengan Smartphonemu atau Desktopmu.'
  }
]

const secondRow = [
  {
      icon: AddShoppingCartIcon,
      title: 'Order Instan!',
      desc: 'Order cepat tanpa menunggu antrian. Yuk Order Sekarang !',
      btnLabel: 'Login',
      url: '/login'
  },
  {
      icon: AttachMoneyIcon,
      title: 'Sistem Terpercaya',
      desc: 'Sistem kami sudah diakui dengan sertifikasi keamanan nasional. Buruan TopUp Sekarang juga!',
      btnLabel: 'Top Up',
      url: '/user/wallet'
  }
]

// export default function Album() {
//   const darkMode = useRecoilValue(isDarkMode)
//   const [state, setState] = React.useState({
//     age: '',
//     name: 'hai',
//   });

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };
//   const useStyles = makeStyles((theme) => ({
//     icon: {
//       marginRight: theme.spacing(2),
//     },
//     heroContent: {
//       //backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(8, 0, 6),
//       backgroundColor: darkMode ? '#2196F3' : '#E6F2FF'
//     },
//     heroButtons: {
//       marginTop: theme.spacing(4),
//     },
//     cardGrid: {
//       paddingTop: theme.spacing(8),
//       paddingBottom: theme.spacing(8),
//     },
//     card: {
//       display: 'flex',
//       flexDirection: 'column',
//       backgroundColor: darkMode ? '#2196F3' : '#E6F2FF'
//     },
//     cardMedia: {
//       paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//       flexGrow: 1,
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

  
  //   const classes = useStyles();

  //   return (
  //     <Layout style={{ margin: '4em 0' }}>

  //       {/* <div className={classes.root}>
  //         <Grid container spacing={3}>
  //           <Grid item xs={12}>
  //             <Paper className={classes.paper}>Riwayat Pemesanan</Paper>
  //           </Grid>
  //         </Grid>
  //       </div> */}

        
  //       <main>
  //         <div className={classes.heroContent}>
  //           <Container maxWidth="sm">
  //             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
  //               Riwayat Transaksi Tiket
  //             </Typography>
  //             <Typography variant="h6" align="center" color="textSecondary" paragraph>
  //               Riwayat pemesanan tiket yang telah anda lakukan.
  //             </Typography>
  //             <center>
  //               <Button variant='contained' color='primary'>Pesan Tiket</Button>
  //             </center>
  //             <div className={classes.heroButtons}>
  //               <Grid container spacing={2} justify="center">
  //               </Grid>
  //             </div>
  //           </Container>
  //         </div>
  //         <Container className={classes.cardGrid} maxWidth="md">
  //           <Grid container spacing={3}>
  //             <Grid item xs={12} md={4}>
  //               <Box component="span" m={1}>
  //                 {/* select ke-1 */}
  //                 <FormControl variant="filled" className={classes.formControl}>
  //                   <InputLabel htmlFor="filled-age-native-simple">Dari</InputLabel>
  //                   <Select
  //                     native
  //                     value={state.age}
  //                     onChange={handleChange}
  //                     inputProps={{
  //                       name: 'age',
  //                       id: 'filled-age-native-simple',
  //                     }}
  //                   >
  //                     <option aria-label="None" value="" />
  //                     <option value={10}>Bandung (Kiara Condong)</option>
  //                     <option value={20}>Jakarta (Manggarai)</option>
  //                     <option value={30}>Banten (Merak)</option>
  //                   </Select>
  //                 </FormControl>

  //                 {/* select ke-2 */}
  //                 <FormControl variant="filled" className={classes.formControl}>
  //                   <InputLabel htmlFor="filled-age-native-simple">Ke</InputLabel>
  //                   <Select
  //                     native
  //                     value={state.age}
  //                     onChange={handleChange}
  //                     inputProps={{
  //                       name: 'age',
  //                       id: 'filled-age-native-simple',
  //                     }}
  //                   >
  //                     <option aria-label="None" value="" />
  //                     <option value={10}>Bandung (Kiara Condong)</option>
  //                     <option value={20}>Jakarta (Manggarai)</option>
  //                     <option value={30}>Banten (Merak)</option>
  //                   </Select>
  //                 </FormControl>

  //               </Box>
  //             </Grid>
  //             <Grid item xs={12} md={8}>
  //               {cards.map((card) => (
  //                 <Card className={classes.card} style={{ margin: "1em 0" }}>
  //                   <CardContent className={classes.cardContent}>
  //                     <Grid container spacing={3}>
  //                       <Grid item md={8}>
  //                         <Typography gutterBottom variant="h5" component="h2">
  //                         Kereta Cepat Kilat Kelas Ekonomi
  //                       </Typography>
  //                       <Typography>
  //                       Jakarta (Manggarai), 15:32 WIB
  //                     </Typography>
  //                       </Grid>
  //                       <Grid item md={4} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  //                         <Button variant='contained' color='primary'>Detail</Button>
  //                       </Grid>
  //                     </Grid>
  //                   </CardContent>

  //                 </Card>
  //               ))}
  //             </Grid>
  //           </Grid>
  //         </Container>
  //       </main>
  //     </Layout>
  //   );
  // }
