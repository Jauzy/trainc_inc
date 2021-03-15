import React from "react"
import Layout from '../components/Layout'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const IndexPage = () => {
  return(
    <Layout>
      <div style={{margin:'3em 3em'}}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography variant='h1'>
              Ini Judul
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Button variant='contained' color='primary'>
              Klik Saya!
            </Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
