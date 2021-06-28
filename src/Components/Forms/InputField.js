/** InputFieldComponent
 * @const InputField
 * input component that controls strings, like email, name and password. Also is used to display
 * the day or the hour that was picked on datepicker or timepicker component.
 * @param label
 * label string that will be displayed on input.
 * @param limit
 * string limit for input.
 * @param type
 * type changing on material ui component, its used as 'password' and 'text'
 * @param name
 * name for the input related
 * @param value
 * value that will be displayed on input
 * @param onChange
 * function that will handle after changes on value
 * @param onBlur
 * function that will handle onBlur of specific input, it can calls validation
 * @param shrink
 * if is necessary that component shrink will be passed, otherwise its false by default
 * @param fullWidth
 * if is necessary that component have a different width of others, otherwise its true by default
 * @param placeholder
 * string that will be displayed on input placeholder
 * @param isValid
 * if is necessary that component have validation on the input text
 * @param successMessage
 * related to validation on the component, its a feedback when validation is needed
 * @param endAdornment
 * icon that will be displayed on the end of the input
 * @param startAdornment
 * icon that will be displayed on the start of the input
 * @param backgroundPageColor
 * bool that controls material ui component property if needed
 */

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


