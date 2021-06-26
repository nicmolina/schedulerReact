import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import styles from './NoneContent.module.css';

const NoneContent = () => {

    return (
        <div className={styles.noneContentContainer}>
            <AssignmentIndIcon/>
            <p>Ops parece que você ainda não cadastrou nenhum horário hoje</p>
        </div>
    )
}

export default NoneContent;
