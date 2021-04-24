import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { connect } from 'react-redux'
import { get_topup_data } from '../../static/utils/redux/Actions/user'

const columns = [
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'name', headerName: 'Nama', width: 300 },
    { field: 'top_up_date', headerName: 'Tanggal Top Up', width: 150 },
    { field: 'price', headerName: 'Nominal', width: 200 },
];

function createData(id, email, name, top_up_date, price) {
    return { id, email, name, top_up_date, price};
}

// const rows = [
//     createData(1,'al.zaujy@gmail.com', 'Muhammad Abdurrahman Al Jauzy', (new Date()).toLocaleDateString(), 'Rp.20.000'),
//     createData(2,'dini_chan@gmail.com', 'Khalisyahdini', (new Date()).toLocaleDateString(), 'Rp.20.000', '2 Tiket'),
//     createData(3,'syafiq@gmail.com', 'Muhammad Syafiq Yukinanda', (new Date()).toLocaleDateString(), 'Rp.20.000'),
//     createData(4,'lyan@gmail.com', 'Khalifa Lyan Bohemianda', (new Date()).toLocaleDateString(), 'Rp.20.000'),
// ];

function DataTable(props) {
    const [rows,setRows] = React.useState([])

    React.useEffect(() => {
        get_topup_data(props.dispatch)
    },[]) 

    React.useEffect(() => {
        if (props.topup){
            function mapTopup(item,index) {
                return (createData(index+1, item.email, item.nama, item.tanggal, item.nominal))
            }
            let row = props.topup.map(mapTopup)
            setRows(row)
        }
    },[props.topup])

    return (
        <div style={{ height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
    topup: state.user.topup
}), null)(DataTable)