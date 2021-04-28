import React from 'react';
import Layout from '../../components/Dashboard/Dashboard'

import Header from '../../components/Header'
import SEO from '../../components/Seo'
import Advantages from '../../components/Advantages'
import A_Profile from '../../components/A_Profile'
import Change from '../../components/Change'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title='Home' />
            <Header image={'https://images.pexels.com/photos/1986932/pexels-photo-1986932.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'} 
                blur={0} height='100vh' title='Your Profile' social />

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

