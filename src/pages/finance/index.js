import React from 'react'
import { Chart } from 'react-charts'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Table from '../../components/Table'
import TableVoucher from '../../components/TableVoucher'
import Layout from '../../components/Dashboard/Dashboard'
import SEO from '../../components/Seo'

import { isDarkMode } from '../../../static/atoms/utils'
import { useRecoilState } from 'recoil'

import { connect } from 'react-redux'

const Dashboard = (props) => {
    const classes = useStyles();
    const [darkMode, setDarkMode] = useRecoilState(isDarkMode)

    const [data,setData] = React.useState([
        {
            label: 'Penjualan Tiket',
            // data: [[moment.utc(), 20000], [moment.utc("2021-03-20"), 19000]]
            data : []
        },
        {
            label: 'Top Up Voucher',
            data: []
        },
    ])
    // const data = React.useMemo(
    //     () => [
    //         {
    //             label: 'Penjualan Tiket',
    //             // data: [[moment.utc(), 20000], [moment.utc("2021-03-20"), 19000]]
    //             data : props.transaksi?.map(item => {
    //                 return ([moment.utc(new Date(item.tanggal)),item.harga])
    //             })
    //         },
    //         {
    //             label: 'Top Up Voucher',
    //             data: [[moment.utc(), 20000], [moment.utc("2021-03-20"), 30000]]
    //         },
    //     ],
    //     []
    //     )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'utc', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    
    React.useEffect(() => {
        if (props.transaksi && props.topup){
            let totalTransaksi = {}
            
            props.transaksi?.map(item => {
                if (!totalTransaksi[moment.utc(new Date(item.tanggal))]){
                    totalTransaksi[moment.utc(new Date(item.tanggal))] = item.harga
                } else {
                    totalTransaksi[moment.utc(new Date(item.tanggal))] += item.harga 
                }
            })

            setData([
                    {
                        label: 'Penjualan Tiket',
                        // data: [[moment.utc(), 20000], [moment.utc("2021-03-20"), 19000]]
                        data : totalTransaksi.map(item => {
                        })
                    },
                    {
                        label: 'Top Up Voucher',
                        // data: [[moment.utc(), 20000], [moment.utc("2021-03-20"), 30000]]
                        data : props.topup?.map(item => {
                            return ([moment.utc(new Date(item.tanggal)),item.nominal])
                        })
                    },
                ]
            )
        }
    },[props.transaksi,props.topup])

    return (
        <Layout style={{overflowX:'hidden', margin:'3em 0'}}>
            <SEO title='Dashboard Finance' />
            <Container>
                <div style={{display:'flex', alignItems:'center'}}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <div style={{marginLeft:".5em"}}>
                        <Typography component="h1" variant="h5" style={{fontWeight:'bold'}}>
                            Finance Dashboard
                        </Typography>
                        <Typography color='textSecondary' variant="caption" style={{fontWeight:'bold'}}>
                            Muhammad Abdurrahman Al Jauzy
                        </Typography>
                    </div>
                </div>
                <center>
                    <Typography variant='h4' style={{fontWeight:'bold',}} gutterBottom>Grafik Penjualan Tiket dan TopUp Per Hari</Typography>
                </center>
            </Container>
            <div
                style={{
                    width: 'auto',
                    height: '300px',
                    margin:'0em 3em'
                }}
                >
                <Chart data={data} axes={axes} tooltip dark={!darkMode} />
            </div>
            <div style={{margin:'3em 0'}}>
                <Container>
                    <Typography variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                        Data Penjualan Tiket
                    </Typography>
                    <Table />
                </Container>
            </div>
            <div style={{margin:'3em 0'}}>
                <Container>
                    <Typography variant='h5' gutterBottom style={{fontWeight:'bold'}}>
                        Data Pembelian Voucher dan Top Up
                    </Typography>
                    <TableVoucher />
                </Container>
            </div>
        </Layout>
    )
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
    users: state.user.users,
    topup: state.user.topup,
    transaksi: state.user.transaksi
}), null)(Dashboard)

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));