import React from 'react'
import Layout from '../../components/Dashboard/DashboardAdmin'
import SEO from '../../components/Seo'
import { graphql } from 'gatsby'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Component = props => {
    console.log(props.data?.allMarkdownRemark.nodes)
    return (
        <Layout style={{ padding: '4em' }}>
            <SEO title='Stasiun' />
            <Container>
                <Typography align='center' variant='h2' gutterBottom style={{ fontWeight: 'bold' }}>
                    List Stasiun
                </Typography>
                {props.data?.allMarkdownRemark.nodes.map(item => (
                    <Paper elevation={3} style={{ padding: '2em', borderRadius: '5px', width: '100%', margin: '1em 0' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Nama Stasiun
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Kota
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Latitude
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.latitude}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Longitude
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.longitude}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </Container>
        </Layout>
    )
}

export default Component

export const query = graphql`
query AmbilDataStasiun {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "stations"}}}) {
    nodes {
      id
      frontmatter {
        name
        city
        latitude
        longitude
      }
    }
  }
}
`