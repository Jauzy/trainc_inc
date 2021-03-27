import React from 'react';
import Layout from '../../components/Dashboard/Dashboard'

import Filter from '../../components/Filter'
import Header from '../../components/Header'
import SEO from '../../components/Seo'
import Advantages from '../../components/Advantages'
import R_Kosong from '../../components/R_Kosong'
import A_Profile from '../../components/A_Profile'
import Change from '../../components/Change'

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

      <div style={{padding:'2em 0'}}>
      <Advantages svg={A_Profile} title1='Info dasar, seperti nama dan foto, yang Anda gunakan di Aplikasi Train.inc' title2='Info Pribadi' />
      </div>

      <div style={{padding:'0em 5vw', marginBottom:'3em'}}>
        <Change/>
      </div>
      
    </Layout>
  )
}

export default IndexPage

