import React from 'react'
import Layout from '../../components/Dashboard/Dashboard'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Modalhasil from '../../components/Dashboard/Modalhasil'

import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper'
import {graphql} from 'gatsby'

const CustomCheckbox = withStyles({
    root: {
    color: green[400],
    '&$checked': {
        color: green[600],
    },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {
const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
});

const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

// const Component = props => {
    return(
        <Layout>
            <Header image={'https://images.hdqwalls.com/wallpapers/train-anime-art-4k-yp.jpg'}
                    blur={0} />
            <Container>
                <div style={{ marginTop:'4em'}}>
                    <Form data={props.data.allMarkdownRemark.nodes}/>
                </div>
                <Grid container spacing={0} style={{ minHeight: '100vh', overflow: 'hidden' }}>
                    <Grid item xs={12} md={3} style={{ padding:'2em'}}>
                        <Typography variant="h5">Filter</Typography>
                        <Paper variant="outlined" style={{ padding:'1em', marginTop:'1em'}}>
                            <Typography variant='h6'>Kelas</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                label="Ekonomi"/>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                                label="Bisnis"/>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                                label="Eksekutif"/>
                            </FormGroup>
                            <Typography variant='h6'>Waktu</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                                label="00:00-06:00"/>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                                label="06:00-12:00"/>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
                                label="12:00-18:00"/>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                                label="18:00-24:00"/>
                            </FormGroup>
                            <Typography variant='h6'>Kereta</Typography>
                            <FormGroup row>
                                <FormControlLabel
                                control={<CustomCheckbox checked={state.checkedH} onChange={handleChange} name="checkedH" />}
                                label="Argo-Lawu"/>
                            </FormGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={9} style={{ padding:'2em'}}>
                        <Typography variant='h5'>
                            Jadwal
                        </Typography>
                        {[1,2,3,4,5].map(item => (
                            <Modalhasil/>
                        ))} 
                    </Grid>
                </Grid>  
            </Container>
        </Layout>
    )
}

export const query = graphql`
query AmbilStasiun {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "stations"}}}) {
        nodes {
        id
        frontmatter {
        name
        city
      }
    }
  }
}
`
// export default Component