import React from 'react'
import Layout from '../../components/Dashboard/DashboardAdmin'
import SEO from '../../components/Seo'
import {graphql} from 'gatsby'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Voucher from '../../components/Dashboard/Voucher'

const Component = (props) => {
    return(
        <Layout style={{padding:'4em'}}>
            <SEO title='Voucher' />
            <Container>
                <Typography align='center' variant='h2' gutterBottom style={{fontWeight:'bold'}}>
                    List Voucher
                </Typography>
                <Grid container spacing={3}>
                    {props.data?.allMarkdownRemark.nodes.map(item => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Voucher item={item}  />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Layout>
    )
}

export default Component

export const query = graphql`
query AmbilDataVoucher {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "vouchers"}}}) {
    nodes {
      id
      frontmatter {
        name
        nominal
      }
    }
  }
}
`