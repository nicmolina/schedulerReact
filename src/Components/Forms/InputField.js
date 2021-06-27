import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import { InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'var(--pink-color)',
        '& .MuiInputBase-root': {
            fontFamily: 'Objektiv',
            color: 'var(--pink-color)',
            marginBottom: '16px'
        },
        '& .MuiFormLabel-root': {
            fontFamily: 'Objektiv',
            color: 'var(--pink-color)',
        },
        '& .MuiInputBase-input': {
            color: 'var(--pink-color)',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--pink-color)!important',
        },
        '& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
        },
    }
}));

const InputField = ({ label, limit, type, name, value, onChange, error, onBlur, shrink = false, fullWidth = true, placeholder = "", isValid = false, successMessage, endAdornment, startAdornment, backgroundPageColor = false }) => {
    const classes = useStyles();

    if (limit === undefined) {
        limit = 50;
    }

    var components = {
        classes: {
            root: isValid ? classes.cssLabelValid : classes.cssLabel
        }
    }

    if (shrink)
        components.shrink = true;

    return (
        <TextField
            aria-label='inputFieldContainer'
            label={label}
            id={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            className={classes.root}
            error={error != null}
            variant="outlined"
            size="small"
            fullWidth={fullWidth}
            helperText={error ? error : isValid ? successMessage : ''}
            InputLabelProps={components}
            inputProps={
                {
                    maxLength: limit,
                    autoComplete: 'new-password',
                    form: {
                        autoComplete: 'off',
                    },
                }
            }
            InputProps={
                {
                    classes: {
                        root: classes.cssOutlinedInput,
                    },
                    endAdornment: (
                        (endAdornment && <InputAdornment position="end">
                            <div className="main-color-svg">
                                {endAdornment}
                            </div>
                        </InputAdornment>)
                    ),
                    startAdornment: (
                        (startAdornment && <InputAdornment position="start">
                            <div className="main-color-svg">
                                {startAdornment}
                            </div>
                        </InputAdornment>)
                    ),
                }
            }
        />
    )
}

export default InputField;

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    error: PropTypes.string,
    onBlur: PropTypes.func,
    shrink: PropTypes.bool,
    fullWidth: PropTypes.bool,
    placeholder: PropTypes.string,
    isValid: PropTypes.bool,
    successMessage: PropTypes.string,
    endAdornment: PropTypes.any,
    startAdornment: PropTypes.any
}


