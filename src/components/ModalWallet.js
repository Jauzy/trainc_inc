import React from 'react';
import QrReader from 'react-qr-reader'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from 'react-redux'
import { topup } from '../../static/utils/redux/Actions/user'

const Component = ({ open, handleClose, dispatch, state, setState}) => {
    
    const handleScan = data => {
        if (data) {
            handleClose()
            topup(dispatch, parseInt(data)) 
        }
    }
    const handleError = err => {
        console.error(err)
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Izinkan akses Kamera device Anda?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Nyalakan kamera dan arahkan ke kode QR untuk melakukan pembayaran.
                    </DialogContentText>
                    <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default connect(state => ({
    user: state.user.user,
}), null)(Component)