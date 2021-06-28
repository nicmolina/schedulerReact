/** TimePicker component
 * @const TimePicker
 * input component that controls 'hour'(its used for arriveTime, exitTime and for LunchBreak).
 * @param id
 * id that will be passed so we have control on that specific id.
 * @param label
 * label string that will be displayed on time input modal.
 * @param value
 * value that will be displayed and changed on input, for this component it is an hour value.
 * @param setValue
 * updates the value that is displayed on the input.
 * @param backgroundPageColor
 * bool that can change background on material ui component.
 */

import React from 'react';
import InputField from './InputField';
import { TimePicker } from 'material-ui-time-picker';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .TimePickerHeader8': {
            backgroundColor: 'var(--pink-color)!important'
        },
        fontFamily: 'Objektiv',
        fontSize: '0.8em',
        textTransform: 'lowercase'
    },
    cancelButton: {
        color: 'var(--grey-medium-color)',
        textTransform: 'initial',
        fontWeight: '600',
        fontFamily: 'Objektiv',
        fontSize: '1em'
    },
    saveButton: {
        textTransform: 'initial',
        fontWeight: '600',
        fontFamily: 'Objektiv',
        fontSize: '1em'
    },
}));

const HourPicker = ({ id, label, value, setValue, backgroundPageColor = false }) => {
    const [open, setOpen] = React.useState(false);
    const [tempTime, setTempTime] = React.useState(null);
    const classes = useStyles();
    
    return (
        <div style={{ height: 'fit-content' }}>

            <div onClick={() => setOpen(true)}>
                <InputField
                    label={label}
                    type=""
                    name={id + "-time-picker"}
                    placeholder="HH:mm"
                    shrink={true}
                    backgroundPageColor={backgroundPageColor}
                    value={value}
                    successMessage=""
                    endAdornment={<AccessTimeIcon />}
                />
            </div>

            <Dialog maxWidth='xs' open={open}>
                <TimePicker
                    value={tempTime}
                    InputProps={{ className: classes.input }}
                    mode='24h'
                    onChange={(time) => {
                        setTempTime(time);
                    }} />
                <DialogActions>
                    <Button className={classes.cancelButton} onClick={() => setOpen(false)}>
                        Return
                    </Button>
                    <Button
                        className={classes.saveButton}
                        onClick={() => {
                            setOpen(false);
                            setValue(tempTime);
                        }} color='primary'>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default HourPicker;
