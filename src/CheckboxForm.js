import React from 'react';
import './App.css';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Checkbox} from "@material-ui/core";

function CheckboxForm({label, checkboxInitial, method}) {
    return (
        <div className='checkbox'>
            <FormControlLabel
                className={'checkbox_label'}
                control={
                    <Checkbox color={"primary"} checked={checkboxInitial} onChange={(e) => method(e.target.checked)}/>
                }
                label={label}
            /></div>
    );
}

export default CheckboxForm;
