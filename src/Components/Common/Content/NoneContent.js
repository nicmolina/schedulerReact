import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import styles from './NoneContent.module.css';

const NoneContent = () => {

    return (
        <div aria-label='none-contentId' className={styles.noneContentContainer}>
            <AssignmentIndIcon/>
            <p>Ops, looks like you dont have working hours registered on this day</p>
        </div>
    )
}

export default NoneContent;
