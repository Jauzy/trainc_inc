import React from 'react';
import Layout from '../../components/Dashboard/Dashboard'

import Filter from '../../components/Filter'
import Header from '../../components/Header'
import SEO from '../../components/Seo'

import Advantages from '../../components/Advantages'
import R_Kosong from '../../components/R_Kosong'
import R_SVG2 from '../../components/R_SVG2'

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
      <Advantages svg={R_SVG2} title1='Menampilkan Riwayat Pemesananmu' title2='Riwayat Pemesanan' />
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
