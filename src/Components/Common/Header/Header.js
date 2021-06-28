/**
 * @const Header
 * component Header after login;
 * uses cookies for always have the name of the user displayed;
 * uses materialui popover when user needs to logout(this is why we have the anchorEl);
 * classes = useStyles() is stablished so we can change styles of materialui component
 */

import React from 'react';
import { AuthContext } from '../../../Context/UserContext';
import styles from './Header.module.css';
import { makeStyles } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiPaper-rounded': {
            borderRadius: '8px',
            border: '1px solid var(--pink-color)'
        }
    }
}));

const Header = () => {
    const { userLogout, cookies } = React.useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header aria-label={'headerContainer'} className={styles.headerContainer}>
            <div className={styles.title}>
                WorkSpace Hours+
            </div>
            <div className={styles.userSpace} onClick={handleClick}>
                Welcome {cookies.get('userName')}!
            </div>

            <Popover
                elevation={1}
                border={0}
                id={open ? 'simple-popover' : ''}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                className={classes.root}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className={styles.popoverSelect}>
                    <div aria-label='logoutContainer' onClick={() => {userLogout()}}>
                        <div>
                            Sair
                        </div>
                    </div>
                </div>
            </Popover>
        </header>
    )
}

export default Header;