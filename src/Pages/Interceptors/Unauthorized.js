/** NoneContent component
 * @const Unauthorized
 * component that will be if the user dont have a token
 */


import React from 'react';
import './styles.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Unauthorized = () => {

    return (
        <div aria-label='unauthorizedContainer' className='unauthContainer'>
            <AccountCircleIcon/>
            <h1 style={{textAlign: 'center'}} >You need to login so you can have access</h1>
        </div>
    )
}

export default Unauthorized;
