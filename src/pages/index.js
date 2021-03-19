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
      <div style={{margin:'3em 3em'}}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
              
          </Grid>
          <Grid item xs={6}>
            <Carrousel/>    
          </Grid>
          <Grid item xs={3}>
                
          </Grid>
        </Grid>
        <Grid>
          
          <Grid item xs={12}>
            <Form/>    
          </Grid>
          
        </Grid>

      </div>
    </Layout>
  )
}

export default IndexPage
