import React from 'react';
import './styles.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Unauthorizated = () => {

    return (
        <div className='unauthContainer'>
            <AccountCircleIcon/>
            <h1 style={{textAlign: 'center'}} >You need to login to have access</h1>
        </div>
    )
}

export default Unauthorizated;
