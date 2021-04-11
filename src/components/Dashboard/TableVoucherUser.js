import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { connect } from 'react-redux'


function DataTable({dispatch, user}) {
    const columns = [
        { field: 'top_up_date', headerName: 'Tanggal Top Up', width: 300 },
        { field: 'price', headerName: 'Nominal', width: 200 },
    ];
    
    function createData(id, top_up_date, price, tiket, jadwal) {
        return { id, top_up_date, price, tiket, jadwal };
    }

    const [rows, setRows] = React.useState([])

    function formatRupiah(angka, prefix){
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split   		= number_string.split(','),
        sisa     		= split[0].length % 3,
        rupiah     		= split[0].substr(0, sisa),
        ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        let separator = null
        if(ribuan){
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }
    
    React.useEffect(() => {
        if(user){
            setRows(
                user?.historyTopUp.map((item,idx) => {
                    return createData(idx+1, (new Date(item.date)).toDateString(), formatRupiah(item.nominal.toString(), 'Rp.'))
                })
            )
        }
    },[user])

    return (
        <div style={{ height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}


export default connect(state => ({
    user: state.user.user,
}), null)(DataTable)
