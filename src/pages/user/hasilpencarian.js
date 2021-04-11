import React from 'react'
import Layout from '../../components/Dashboard/Dashboard'
import Form from '../../components/Form'
import Header from '../../components/Header'
import Modalhasil from '../../components/Dashboard/Modalhasil'

import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { graphql } from 'gatsby'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SEO from '../../components/Seo'

const queryString = require('query-string');

export default function CheckboxLabels(props) {
    const [state, setState] = React.useState({
        class: '',
        train: ''
    });

    const [data, setData] = React.useState({
        stations: [], schedules: [], trains: []
    })

    const handleChange = (event, id) => {
        setState({...state, [id] : event.target.value});
    };

    React.useEffect(() => {
        let queryDatas = props.data.allMarkdownRemark.nodes
        let day = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
        let url = {
            asal : queryString.parse(props.location.search).asal,
            tujuan : queryString.parse(props.location.search).tujuan,
            date : new Date(queryString.parse(props.location.search).date),
            date_no : new Date(queryString.parse(props.location.search).date).getUTCDay()
        }
        if(url.asal){
            setData({
                ...data,
                stations: queryDatas.filter(item => (item.frontmatter.type == 'stations')),
                trains: queryDatas.filter(item => (item.frontmatter.type == 'trains')),
                schedules: queryDatas.filter(item => (item.frontmatter.type == 'schedules'))
                    .filter(item => (item.frontmatter.depart_station == url.asal && item.frontmatter.destination_station == url.tujuan && item.frontmatter.depart_day == day[url.date_no])),
                date: url.date
            })
        } else 
        setData({
            ...data,
            stations: queryDatas.filter(item => (item.frontmatter.type == 'stations')),
            trains: queryDatas.filter(item => (item.frontmatter.type == 'trains')),
            schedules: queryDatas.filter(item => (item.frontmatter.type == 'schedules'))
        })
    }, [props.data, props.location])

    React.useEffect(() => {
        if(data.trains){
            let tempTrain = []
            let tempSchedules = []
            if(state.class && state.class != '' && state.train && state.train != ''){
                tempTrain = data.trains?.filter(item => (item.frontmatter.class == state.class && item.frontmatter.name == state.train))
                tempSchedules = data.schedules?.filter(item => (tempTrain.map(item => (item.frontmatter.name)).includes(item.frontmatter.train)))
            } else if(state.class && state.class != ''){
                tempTrain = data.trains?.filter(item => (item.frontmatter.class == state.class))
                tempSchedules = data.schedules?.filter(item => (tempTrain.map(item => (item.frontmatter.name)).includes(item.frontmatter.train)))
            } else if(state.train && state.train != ''){
                tempTrain = data.trains?.filter(item => (item.frontmatter.name == state.train))
                tempSchedules = data.schedules?.filter(item => (tempTrain.map(item => (item.frontmatter.name)).includes(item.frontmatter.train)))
            } else {
                tempSchedules = data.schedules
            }
            setState({...state, res: tempSchedules})
        } else {
            let tempSchedules = data.schedules
            setState({...state, res: tempSchedules})
        }
    },[state.class, state.train, data.trains])

    // const Component = props => {
    return (
        <Layout>
            <SEO title='Pesan Tiket' />
            <Header image={'https://images7.alphacoders.com/724/thumb-1920-724369.jpg'}
                blur={0} height='100vh' title='Pesan Tiket Sekarang!' desc='Perjalanan Anda Akan Nyaman Dengan Kami.' social />
                <div style={{ margin: '0 4vw' }} >
                <div style={{ marginTop: '2em' }}>
                    <Form data={data.stations} />
                </div>
                <Grid container spacing={0} style={{ minHeight: '100vh', overflow: 'hidden' }}>
                    <Grid item xs={12} md={3} style={{ padding: '2em 0' }}>
                        <Typography variant="h5">Filter</Typography>
                        <Paper variant="outlined" style={{ padding: '1em', marginTop: '1em' }}>
                            <FormControl variant="filled" fullWidth style={{marginBottom:'1em 0'}}>
                                <InputLabel id="demo-simple-select-filled-label">Kelas</InputLabel>
                                <Select
                                    value={state.class}
                                    fullWidth
                                    onChange={event => handleChange(event, 'class')}
                                    >
                                    <MenuItem value={''}>Pilih Kelas</MenuItem>
                                    {['Ekonomi','Bisnis','Eksekutif'].map((item,idx) => (
                                        <MenuItem value={item} key={idx}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl variant="filled" fullWidth style={{margin:'1em 0', marginBottom:'0'}}>
                                <InputLabel id="demo-simple-select-filled-label">Kereta</InputLabel>
                                <Select
                                    value={state.train}
                                    fullWidth
                                    onChange={event => handleChange(event, 'train')}
                                    >
                                    {data.trains?.map(item => (
                                        <MenuItem key={item.id} value={item.frontmatter.name}>{item.frontmatter.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={9} style={{ padding: '2em 0' }}>
                        <Typography variant='h5' style={{ margin: '0 1em' }}>
                            Jadwal
                        </Typography>
                        {state?.res?.length > 0 ? state?.res?.map(item => (
                            <Modalhasil date={data.date} key={item.id} schedule={item} stations={data?.stations} trains={data?.trains} />
                        )) : <div>
                            <center>
                                <Typography variant='h6'>
                                    Tidak ada jadwal yang sesuai ditemukan
                                </Typography>
                            </center>
                        </div>}
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export const query = graphql`
query HasilPencarianQuery {
    allMarkdownRemark{
        nodes {
            id
            frontmatter {
                train
                depart_station
                destination_station
                name
                depart_day
                time
                class
                seat
                price
                src
                latitude
                longitude
                city
                type
            }
        }
    }
}
`
// export default Component