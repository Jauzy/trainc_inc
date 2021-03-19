import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'name', headerName: 'Nama', width: 300 },
    { field: 'order_date', headerName: 'Tanggal Kirim', width: 150 },
    { field: 'price', headerName: 'Harga', width: 200 },
    { field: 'tiket', headerName: 'Banyak Pesanan', width: 200 },
    { field: 'jadwal', headerName: 'Jadwal', width: 400 },
];

function createData(id, email, name, order_date, price, tiket, jadwal) {
    return { id, email, name, order_date, price, tiket, jadwal };
}

const rows = [
    createData(1,'al.zaujy@gmail.com', 'Muhammad Abdurrahman Al Jauzy', (new Date()).toLocaleDateString(), 'Rp.20.000', '2 Tiket', 'Merak ke Bandung Hari Minggu Jam 09:30'),
    createData(2,'dini_chan@gmail.com', 'Khalisyahdini', (new Date()).toLocaleDateString(), 'Rp.20.000', '2 Tiket', 'Merak ke Bandung Hari Minggu Jam 09:30'),
    createData(3,'syafiq@gmail.com', 'Muhammad Syafiq Yukinanda', (new Date()).toLocaleDateString(), 'Rp.20.000', '2 Tiket', 'Merak ke Bandung Hari Minggu Jam 09:30'),
    createData(4,'lyan@gmail.com', 'Khalifa Lyan Bohemianda', (new Date()).toLocaleDateString(), 'Rp.20.000', '2 Tiket', 'Merak ke Bandung Hari Minggu Jam 09:30'),
];

export default function DataTable() {
    return (
        <div style={{ height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}

