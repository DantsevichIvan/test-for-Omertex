import React, {useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import {makeStyles} from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio/Radio";
import clsx from "clsx";

function RadioButtons({label, value, method, initMethod}) {
    const useStyles = makeStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        icon: {
            borderRadius: '50%',
            width: 16,
            height: 16,
            boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
            backgroundColor: '#f5f8fa',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',

        },
        checkedIcon: {
            backgroundColor: '#137cbd',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
            '&:before': {
                display: 'block',
                width: 16,
                height: 16,
                backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
                content: '""',
            },
            'input:hover ~ &': {
                backgroundColor: '#106ba3',
            },
        },
        label: {fontSize: '10px'}
    });

    function StyledRadio({props, value}) {
        const classes = useStyles();
        return (
            <Radio
                className={classes.root}
                color="default"
                checked={value}
                onChange={event => {
                    method(event.target.checked);
                    initMethod(!event.target.checked);
                }}
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
                icon={<span className={classes.icon}
                            {...props}
                />}
            />
        );
    }

    return (
        <FormControlLabel
            control={<StyledRadio value={value}/>}
            className='radio-group-label'
            label={label}
            style={{margin: '0', paddingLeft: '10px'}}
        />
    );
}

export default RadioButtons;