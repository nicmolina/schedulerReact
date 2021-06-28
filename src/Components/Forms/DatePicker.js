/** DatePicker component
 * @const DatePicker
 * input component that controls 'day'(its used for arriveDate, exitDate and also to set a specific day).
 * @param id 
 * id that will be passed so we have control on that specific id.
 * @param label
 * label string that will be displayed on input.
 * @param value
 * value that will be displayed and changed on input.
 * @param setValue
 * updates the value of the day.
 * @param backgroundPageColor
 * values that can change background on material ui component.
 * @param enableButtons
 * set if it will save and cancel button on day pick component.
 */

import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { makeStyles } from '@material-ui/core/styles';
import { SingleDatePicker } from 'react-dates';
import { Button, Dialog, DialogActions } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import CloseIcon from '@material-ui/icons/Close';
import InputField from './InputField';
import './DatePicker.css';

const useStyles = makeStyles((theme) => ({
    cancelButton: {
        color: 'var(--grey-medium-color)',
        textTransform: 'initial',
        fontWeight: '600',
        fontSize: '1em',
        fontFamily: 'Objektiv'
    },
    saveButton: {
        textTransform: 'initial',
        fontWeight: '600',
        fontSize: '1em',
        color: 'var(--main-color)',
        fontFamily: 'Objektiv'
    },
    closeIcon: {
        textAlign: 'right',
        padding: '1em 1em 0 1em'
    }
}));

const DatePicker = ({ id, label, value, setValue, backgroundPageColor = false, enableButtons }) => {
    const classes = useStyles();
    const [focused, setFocused] = React.useState(true);
    const [date, setDate] = React.useState();
    const [modal, setModal] = React.useState(null);
    const [tempHour, setTempHour] = React.useState(null);

    React.useEffect(() => {
        setTempHour(date)

        return () => null

    }, [])

    const handleWeekDays = (day) => {
        //Change week day with custom day array
        day._locale._weekdaysMin = ['D', 'S', 'T', 'Q', 'Q ', 'S ', 'S  '];
        day._locale._months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return (<div className="day-container">
            <div className="day-element">{(day.format('D'))}</div>
        </div>);
    }

    const closeModal = () => setModal(false);

    return (
        <div style={{ height: 'fit-content' }}>
            <div onClick={() => setModal(true)}>
                <InputField
                    label={label}
                    type=""
                    name={id + "-date-picker"}
                    placeholder="dd-mm-yyyy"
                    shrink={true}
                    backgroundPageColor={backgroundPageColor}
                    value={new Date(value).toLocaleDateString()}
                    successMessage="" isValid={date == ''}
                    successMessage=""
                    endAdornment={<TodayIcon />}
                />
            </div>

            <Dialog open={modal}>
                <div className="calendar-single-date">
                    {/* className={`${styles.closeIcon}`} */}
                    <div onClick={closeModal} className={`${classes.closeIcon} pointer`}><CloseIcon /></div>

                    <SingleDatePicker
                        noBorder={true}
                        daySize={40}
                        date={value}
                        isOutsideRange={() => false}
                        renderDayContents={handleWeekDays}
                        onDateChange={value => {
                            setValue(value);
                        }} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        focused={true} // PropTypes.bool
                        hideKeyboardShortcutsPanel={true}
                        onFocusChange={(focused) => setFocused(true)} // PropTypes.func.isRequired
                        id={`single_calendar_${id}`}
                    />

                </div>

                <div className="divider"></div>

                {enableButtons &&
                    <DialogActions>
                    <Button onClick={closeModal} className={classes.cancelButton}>
                        Return
                    </Button>
                    <Button className={classes.saveButton} onClick={() => {
                        closeModal();
                        setDate(tempHour);
                    }} color='primary'>
                        Save
                    </Button>
                </DialogActions>}
            </Dialog>
        </div>
    )
}

export default DatePicker;