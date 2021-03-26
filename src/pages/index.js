import React from "react"
import Layout from '../components/Layout'
import Carrousel from '../components/Carrousel'
import Form from '../components/Form'
import Header from '../components/Header'
import SEO from '../components/Seo'
import StreamingSvg from '../components/StreamingSVG'
import Advantages from '../components/Advantages'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PhonelinkIcon from '@material-ui/icons/Phonelink';


const IndexPage = () => {
  return(
    <Layout>
      <SEO title='Home' />
            <Header image={'https://images.hdqwalls.com/wallpapers/train-anime-art-4k-yp.jpg'} title='Train.Inc'
                desc='Next Generation Train Ticket Order Platform.' blur={0} social />
      <div style={{padding:'2em 0'}}>
      <Advantages firstRow={firstRow} secondRow={secondRow} svg={StreamingSvg} title1='The Next Generation Of' title2='Train Ticket Order Platform' />
      </div>
      {/* carrousel */}
      <div style={{padding:'0em 5vw', marginBottom:'3em'}}>
        <Form/>
      </div>
      <Carrousel/>
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