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
            <SEO title='Jadwal' />
            <Container>
                <Typography align='center' variant='h2' gutterBottom style={{ fontWeight: 'bold' }}>
                    List Jadwal
                </Typography>
                {props.data?.allMarkdownRemark.nodes.map(item => (
                    <Paper elevation={3} style={{ padding: '2em', borderRadius: '5px', width: '100%', margin: '1em 0' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Stasiun Keberangkatan
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.depart_station}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Stasiun Tujuan
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.destination_station}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Kereta
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.train}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant='caption' color='textSecondary' style={{ fontWeight: "bold" }}>
                                    Hari dan Waktu
                                </Typography>
                                <Typography variant='h5' style={{ fontWeight: "bold" }}>
                                    {item.frontmatter.depart_day}, {item.frontmatter.depart_time}
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
query AmbilDataJadwal {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "schedules"}}}) {
    nodes {
      id
      frontmatter {
        depart_station
        destination_station
        train
        depart_day
      }
    }
  }
}
`