import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'name', headerName: 'Nama', width: 300 },
    { field: 'top_up_date', headerName: 'Tanggal Top Up', width: 150 },
    { field: 'price', headerName: 'Nominal', width: 200 },
];

function createData(id, email, name, top_up_date, price, tiket, jadwal) {
    return { id, email, name, top_up_date, price, tiket, jadwal };
}

const rows = [
    createData(1,'al.zaujy@gmail.com', 'Muhammad Abdurrahman Al Jauzy', (new Date()).toLocaleDateString(), 'Rp.20.000'),
    createData(2,'dini_chan@gmail.com', 'Khalisyahdini', (new Date()).toLocaleDateString(), 'Rp.20.000', '2 Tiket'),
    createData(3,'syafiq@gmail.com', 'Muhammad Syafiq Yukinanda', (new Date()).toLocaleDateString(), 'Rp.20.000'),
    createData(4,'lyan@gmail.com', 'Khalifa Lyan Bohemianda', (new Date()).toLocaleDateString(), 'Rp.20.000'),
];

export default function DataTable() {
    return (
        <div style={{ height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}

