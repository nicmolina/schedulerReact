import React from 'react';
import Header from '../../Components/Common/Header/Header';
import styles from './Homepage.module.css';
import useService from '../../Hooks/useService';
import WorkIcon from '@material-ui/icons/Work';
import { AuthContext } from '../../Context/UserContext';
import { fadeInUp } from 'react-animations'
import { GET_SPECIFIC_DAY } from '../../Utils/Endpoints';
import Loading from '../../Components/Common/Loading/Loading';
import HoursForms from './Components/HoursForms';
import NoneContent from '../../Components/Common/Content/NoneContent';
import { formatHours } from '../../Utils/Helper';
import { ToastContainer } from 'react-toastify';
import DatePicker from '../../Components/Forms/DatePicker';
import 'react-toastify/dist/ReactToastify.css';
import Radium, { StyleRoot } from 'radium';
import moment from 'moment';

const stylesProps = {
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

const HomePage = () => {
    const { cookies } = React.useContext(AuthContext);
    const { request, data, loading } = useService();
    const [specificDay, setSpecificDay] = React.useState(moment(new Date()));

    React.useEffect(() => {
        async function loadWorkData(day = new Date()) {

            const payload = {
                userId: cookies.get('userId'),
                day: day
            }
    
            console.log('userData', day);
            console.log('payload', payload);
    
            const options = GET_SPECIFIC_DAY(payload)
            var response = await request(options)
    
            if (response.response === undefined) {
                console.log('error')
            } else {
                console.log('succes');
            }
        }

        loadWorkData(specificDay)
    }, [specificDay])

    return (
        <div className={styles.homePageContainer}>
            <Header />
            <ToastContainer />
            {loading &&
                <Loading text={'Loading data...'} />
            }

            <div className={styles.workedHoursContainer}>
                <h1 className={styles.workedHoursDetails}>
                    <WorkIcon/> Total worked hours: {data?.hours? parseInt(data?.hours) : 0}
                </h1>
                {data?.hours < 8? <p className={styles.hoursAvalation}>Your working hours are below expected on this day!</p> : null}
                <div className={styles.specificDay}>
                    <DatePicker
                        id="specificDay"
                        label="Working Day"
                        value={specificDay} setValue={setSpecificDay}
                        backgroundPageColor={true}
                        blockPastDays={true}
                    />
                </div>
                {!loading && data != "" && data != null &&
                    <StyleRoot style={{ width: '100%' }}>
                        <div className={styles.workHoursFade} style={stylesProps.fadeInUp}>
                            <div className={`${styles.workedHoursInfo} ${styles.arriveTime}`}>
                                <h1>Arrive time:</h1>
                                <span > {formatHours(new Date(data?.arriveTime))}</span>
                            </div>
                            <div className={`${styles.workedHoursInfo} ${styles.lunchBreak}`}>
                                <h1>Lunch break:</h1>
                                <span> {formatHours(new Date(data.lunchBreak))}</span>
                            </div>
                            <div className={`${styles.workedHoursInfo} ${styles.exitTime}`}>
                                <h1>Exit time:
                                </h1>
                                <span> {formatHours(new Date(data?.exitTime))}</span>
                            </div>
                        </div>
                    </StyleRoot>
                }
                {data == "" &&
                    <NoneContent />
                }

                {!loading &&
                    <div className={styles.registerTitle}>
                        <h1>Create New Working Day</h1>
                    </div>}

                {!loading && <HoursForms specificDay={specificDay} setSpecificDay={setSpecificDay} />}
            </div>
        </div>
    )
}

export default HomePage;
