/** HoursForms component
 * @const HoursForms
 * component that controll the creation of new working days using
 * the components of datepickers(only for days) and using the components of 
 * timepickers(only for hours). It uses the endpoint of CREATE_WORK_DAY for 
 * trying to create the new workday object(with lunchbreak, arrivetime, exittime, day, and the 
 * userId of the employee)
 * @param specificData
 * Homepage page passes specificData that is displayed.
 * @param setSpecificDay
 * Homepage page passes the param for changing the day that is displayed
 * so it controls when the page needs to be reloaded. Ex: if you add a working day for 28/09
 * the page its reloaded with the hours of 28/09.
 */

import React from 'react';
import moment from 'moment';
import DatePicker from '../../../Components/Forms/DatePicker';
import TimePicker from '../../../Components/Forms/TimePicker';
import useService from '../../../Hooks/useService';
import AddButton from '../../../Components/Buttons/AddButton';
import styles from './HoursForms.module.css';
import { AuthContext } from '../../../Context/UserContext';
import { toast } from 'react-toastify';
import { CREATE_WORK_DAY } from '../../../Utils/Endpoints';

const HoursForms = ({specificData, setSpecificDay}) => {
    const { cookies } = React.useContext(AuthContext);
    const { request, loading } = useService();
    const [appointmentDate, setAppointmentDate] = React.useState(moment());
    const [arriveTime, setArriveTime] = React.useState(moment());
    const [lunchTime, setLunchTime] = React.useState(moment());
    const [exitTime, setExitTime] = React.useState(moment());

    const createWorkDay = async () => {
        const hours = parseInt((exitTime - arriveTime) / (1000 * 60 * 60));

        const payload = {
            userId: cookies.get('userId'),
            day: appointmentDate._d,
            hours: hours - 1,
            lunchBreak: lunchTime,
            arriveTime: arriveTime,
            exitTime: exitTime
        }

        const options = CREATE_WORK_DAY(payload);
        await request(options, (response) => {
            if(response == undefined){
                toast.error('Ops, there is already one register for this day')
            } else {  
                toast.dark('Appointment registered');
                setSpecificDay(moment(new Date(appointmentDate._d)))
            }
        });
    }

    return (
        <div className={styles.formsContainer}>
            <div className={styles.dayContainer}>
                <p>Day:</p>

                <DatePicker
                    id="arriveTime"
                    label="Day"
                    value={appointmentDate} setValue={setAppointmentDate}
                    backgroundPageColor={true}
                    blockPastDays={true}
                    enableButtons={true}
                />
            </div>

            <div className={styles.createRegisterContainer}>
                <div className={styles.dateRegister}>
                    <p>Lunch break:</p>
                    <TimePicker
                        id="lunchTime"
                        label="Time"
                        backgroundPageColor={true}
                        value={new Date(lunchTime).toTimeString().substring(0, 5)}
                        setValue={setLunchTime}
                    />
                </div>
            </div>

            <div className={styles.createRegisterContainer}>
                <div className={styles.dateRegister}>
                    <p>Arrive time:</p>
                    <TimePicker
                        id="arriveHour"
                        label="Time"
                        backgroundPageColor={true}
                        value={new Date(arriveTime).toTimeString().substring(0, 5)}
                        setValue={setArriveTime}
                    />
                </div>

                <div style={{ marginLeft: '20px' }} className={styles.dateRegister}>
                    <p>Exit time:</p>
                    <TimePicker
                        id="exitHour"
                        label="Time"
                        backgroundPageColor={true}
                        value={new Date(exitTime).toTimeString().substring(0, 5)}
                        setValue={setExitTime}
                    />
                </div>
            </div>

            <AddButton
                handleClick={() => {
                    createWorkDay();
                }}
                loading={loading}
                error={false}
                text="Add working day"
                edit={false}
            />
        </div>
    )
}

export default HoursForms;
