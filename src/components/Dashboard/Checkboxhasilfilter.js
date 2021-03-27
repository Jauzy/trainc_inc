import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = withStyles({
    root: {
    color: green[400],
    '&$checked': {
        color: green[600],
    },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
});

const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
    <FormGroup row>
        <FormControlLabel
        control={<CustomCheckbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Custom color"
        />
        <FormControlLabel
        control={<CustomCheckbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
        label="Custom color"
        />
        <FormControlLabel
        control={<CustomCheckbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
        label="Custom color"
        />
        <FormControlLabel
        control={<CustomCheckbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
        label="Custom color"
        />
    </FormGroup>
    );
}