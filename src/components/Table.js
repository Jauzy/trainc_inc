import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { connect } from 'react-redux'
import { get_penjualan_data } from '../../static/utils/redux/Actions/user'

const columns = [
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'name', headerName: 'Nama', width: 300 },
    { field: 'order_date', headerName: 'Tanggal Pesan', width: 150 },
    { field: 'price', headerName: 'Harga', width: 200 },
    { field: 'jadwal', headerName: 'Jadwal', width: 400 },
];

function createData(id, email, name, order_date, price, jadwal) {
    return { id, email, name, order_date, price, jadwal };
}

function DataTable(props) {
    const [rows,setRows] = React.useState([])

    React.useEffect(() => {
        get_penjualan_data(props.dispatch)
    },[]) 

    React.useEffect(() => {
        if (props.transaksi){
            function mapTransaksi(item,index) {
                return (createData(index+1, item.email, item.nama, item.tanggal, item.harga, item.jadwal))
            }
            let row = props.transaksi.map(mapTransaksi)
            setRows(row)
        }
    },[props.transaksi]) 

    return (
        <div style={{ height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
    transaksi: state.user.transaksi
}), null)(DataTable)

