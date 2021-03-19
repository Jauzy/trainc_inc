import React from "react"
import Layout from '../components/Layout'
import Carrousel from '../components/Carrousel'
import Form from '../components/Form'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const IndexPage = () => {
  return(
    <Layout>
      {/* carrousel */}
      <Carrousel/>    
      <div style={{margin:'3em 3em'}}>
        {/* bagian pesan tiket kereta */}
        <Grid container spacing={3}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Form/>
          </Grid>
          <Grid item xs={1}>        
          </Grid>
        </Grid>
        {/* bagian  deskripsi */}
        
      </div>

      <div style={{margin:'3em 3em'}}>
        <Grid container spacing={3}> 
          <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6" gutterBottom>
                Deskripsi
              </Typography>
              
            </Grid>
            <Grid item xs={1}>        
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
