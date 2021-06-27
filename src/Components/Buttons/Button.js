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


