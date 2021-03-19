import React from 'react'
import PropTypes from "prop-types"
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const CustomTextField = withStyles(theme => ({
    root: {
        
    },
}))(TextField);

const Input = ({ size, id, type, value, onChange, label, style, placeholder, select, children, multiline, rowsMax }) => {
    const classes = useStyles()
    return (
        <div>
            {label && <Typography style={{ fontWeight: 'bold', color: 'white' }}>
                {label}
            </Typography>}
            <CustomTextField select={select} size={size ? size : 'small'} id={id} type={type} value={value} onChange={onChange}
                variant='outlined' multiline={multiline} rowsMax={rowsMax}
                className={classes.input} style={{ color: value && value.length > 0 ? 'black' : 'null', ...style }} fullWidth placeholder={placeholder}>
                {children}
            </CustomTextField>
        </div>
    )
}

export default Input

Input.propTypes = {
    style: PropTypes.object,
    size: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    select: PropTypes.bool
}

const useStyles = makeStyles((theme) => ({
    input: {
        margin: '.3em 0',
        backgroundColor: 'rgba(249, 249, 249, 0.5)',
        borderRadius: '16px',
        '&:hover': {
            background: "#f9f9f9",
        },
    }
}));