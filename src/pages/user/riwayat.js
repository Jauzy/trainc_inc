import React from 'react';
import Layout from '../../components/Dashboard/Dashboard'

import Header from '../../components/Header'
import SEO from '../../components/Seo'

import Advantages from '../../components/Advantages'
import R_Kosong from '../../components/R_Kosong'
import R_SVG2 from '../../components/R_SVG2'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title='Home' />
            <Header image={'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=863&q=80'} 
                blur={0} height='100vh' social title='Transactions' />
      
      {/* <div style={{padding:'2em 0'}}>
      <Advantages firstRow={firstRow} secondRow={secondRow} svg={StreamingSvg} title1='Menampilkan Riwayat Pemesananmu' title2='Riwayat Pemesanan' />
      </div> */}

      <div style={{padding:'3em 0', marginTop:'5em'}}>
      <Advantages svg={R_SVG2} title1='Menampilkan Riwayat Pemesananmu' title2='Riwayat Pemesanan' disableParallax />
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
