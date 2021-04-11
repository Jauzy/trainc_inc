import React from 'react'
import { connect } from 'react-redux'
import { topup } from '../../../static/utils/redux/Actions/user'
import {navigate} from 'gatsby'
import Button from '@material-ui/core/Button'
import CurrencyFormat from 'react-currency-format';

const queryString = require('query-string');

const Component = props => {
    const onSubmit = () => {
        navigate('/user')
        topup(props.dispatch, parseInt(queryString.parse(props.location.search).nominal)) 
    }
    return(
        <div>
            <CurrencyFormat value={parseInt(queryString.parse(props.location.search).nominal)} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
            <Button variant='contained' color='primary' onClick={onSubmit}>OK Submit</Button>
        </div>
    )
}

export default connect(state => ({
    user: state.user.user,
}), null)(Component)