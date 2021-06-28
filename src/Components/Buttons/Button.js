/** Button component
 * @const Button
 * component for login button styles.
 * @param text
 * text that will be displayed on the button.
 * @param loading
 * bool that will be passed so the button can have the loading displayed.
 * @param handleAdd
 * function that will handle onClick of that button.
 * @param icon
 * param that can pass an icon, if its not passed the icon will be the <IconLogin/> by default.
 */

import React from 'react';
import PropTypes from 'prop-types';
import IconLogin from '@material-ui/icons/PeopleOutline';
import CachedIcon from '@material-ui/icons/Cached';
import './Buttons.css';

const Button = ({ text, handleAdd, loading, icon = <IconLogin /> }) => {

    return (
        <button testid='button' aria-label='button' className="flex add-btn btn-white-icon" onClick={handleAdd}>
            <div className="svg_container">
                {icon}
            </div>
            <p style={{ display: 'flex', alignItems: 'center' }} className="">{text} </p>
            {loading ? <CachedIcon aria-label='loading-icon' style={{ marginLeft: '0.5em' }} className='rotate' /> : null}
        </button>
    )
}
export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleAdd: PropTypes.func,
    icon: PropTypes.any
}


