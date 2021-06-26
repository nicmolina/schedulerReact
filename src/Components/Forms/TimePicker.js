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
    console.log('valor', value);
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
                        Cancelar
                    </Button>
                    <Button
                        className={classes.saveButton}
                        onClick={() => {
                            setOpen(false);
                            setValue(tempTime);
                        }} color='primary'>
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default HourPicker;
