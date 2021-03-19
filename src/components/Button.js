import React from 'react'
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles'

const Component = ({ onClick, variant, isLoading, disabled, color, fullWidth, style, size, children }) => {
    const classes = useStyles()
    return (
        <Button onClick={onClick} variant={variant ? variant : ''} size={size ? size : 'medium'} startIcon={isLoading && <CircularProgress color="#fff" size={20} />}
            disabled={isLoading || disabled} color={color ? color : 'default'} fullWidth={fullWidth} style={style} className={classes.root}>
            {children}
        </Button>
    )
}

export default Component

Component.propTypes = {
    style: PropTypes.object,
    size: PropTypes.string,
    variant: PropTypes.string,
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    fullWidth: PropTypes.bool,
    onClick:PropTypes.func,
    children:PropTypes.node
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1em 0',
        borderRadius:'16px'
    }
}));