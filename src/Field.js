import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";

import './App.css';

function Field({name, value, title, method, errorNecessarilyText, necessarily, errorValues, disabledValue}) {
    const chang = (e) => {
        method({...value, value: e.target.value})
    };
    console.log(value.errorValidation)

    return (
        <div className={'formInput'}>
            <span className='titleField'>{title}<span>{necessarily ? '*' : null}</span></span>
            <TextField
                error={value.isError|| value.errorValidation }
                name={name}
                defaultValue={value}
                value={value.value}
                disabled={disabledValue}
                className='formInput_input'
                variant="outlined"
                label={value.isError ? 'Введите данные' : 'Введите данные' || value.errorValidation  ? value.errorText : 'Ваши данные'}
                style={{width: '300px'}}
                size="small"
                onChange={chang}/>
        </div>
    );
}

export default Field;