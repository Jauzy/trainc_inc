import React from 'react';
import Layout from '../../components/Dashboard/DashboardAdmin'
import SEO from '../../components/Seo'

import Container from '@material-ui/core/Container'
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography'

import { connect } from 'react-redux'
import { get_user_data } from '../../../static/utils/redux/Actions/user'

const columns = [
    { field: 'name', headerName: 'Nama', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
];

function createData(id, name, email) {
    return { id, name, email};
}


const Component = props => {
    const [rows,setRows] = React.useState([])

    React.useEffect(() => {
        get_user_data(props.dispatch)
    },[]) 

    React.useEffect(() => {
        if (props.users){
            function mapUser(user,index) {
                return (createData(index+1, user.name, user.email))
            }
            let row = props.users.map(mapUser)
            setRows(row)
        }
    },[props.users]) 

    return(
            <Layout>
                <SEO title='users' />
                <Container>
                    <Typography align='center' variant='h2' gutterBottom style={{ fontWeight: 'bold' }}>
                        List User
                    </Typography>
                    <div style={{ margin:'3em 0', height: 300, width: '100%'}}>
                        <DataGrid rows={rows} columns={columns} pageSize={5} />
                    </div>
                </Container>
            </Layout>
        )
    }

export default connect(state => ({
    error: state.user.error,
    isLoading: state.user.loading,
    users: state.user.users
}), null)(Component)