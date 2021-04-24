import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ReactToPrint from 'react-to-print';
import GetAppIcon from '@material-ui/icons/GetApp';
import QRCode from "react-qr-code";

const Component = ({ item }) => {
    const ref = React.useRef()
    return (
        <div>
            <ReactToPrint
                trigger={() => <Button color='primary' variant='contained' style={{ marginBottom: '-4em' }}><GetAppIcon /></Button>}
                content={() => {
                    return ref.current
                }}
            />
            <Paper elevation={3} ref={ref} style={{ padding: '2em', borderRadius: '5px', background: '#fff', maxWidth:'350px' }}>
                <center>
                    {Blob && <QRCode value={item.frontmatter.nominal.toString()} />}
                    <Typography variant='h5' style={{ color: "#000", marginTop: '1em', fontWeight: 'bold' }}>
                        {item.frontmatter.name}
                    </Typography>
                </center>
                <Grid container spacing={3} style={{ marginTop: '1em' }}>
                    <Grid item xs={9}>
                        <Typography variant='subtitle2' style={{ color: 'grey' }}>
                            {(new Date()).toLocaleString()}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: 'right' }}>
                        <Typography variant='subtitle2' style={{ color: 'grey' }}>
                            Train.Inc
                    </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Component