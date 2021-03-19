import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'top_up_date', headerName: 'Tanggal Top Up', width: 300 },
    { field: 'price', headerName: 'Nominal', width: 200 },
];

function createData(id, top_up_date, price, tiket, jadwal) {
    return { id, top_up_date, price, tiket, jadwal };
}

const rows = [
    createData(1, (new Date()).toLocaleDateString(), 'Rp.20.000'),
    createData(2, (new Date()).toLocaleDateString(), 'Rp.20.000', '2 Tiket'),
    createData(3, (new Date()).toLocaleDateString(), 'Rp.20.000'),
    createData(4, (new Date()).toLocaleDateString(), 'Rp.20.000'),
];

export default function DataTable() {
    return (
        <div style={{ height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}

