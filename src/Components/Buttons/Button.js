import React from 'react';
import PropTypes from 'prop-types';
import IconLogin from '@material-ui/icons/PeopleOutline';
import CachedIcon from '@material-ui/icons/Cached';
import './Buttons.css';

const AddButton = ({text, handleAdd, loading, icon = <IconLogin />}) => {

    console.log('loadingButton', loading)

    return (
            <button className="flex add-btn btn-white-icon" onClick={handleAdd}>
                <div className="svg_container">
                    {icon}
                </div>
                <p style={{display: 'flex', alignItems: 'center'}} className="">{text} </p>
                {loading? <CachedIcon style={{marginLeft: '0.5em'}} className='rotate'/> : null}
            </button>
    )
}
export default AddButton;

AddButton.propTypes = {
    text: PropTypes.string.isRequired,
    handleAdd: PropTypes.func,
    icon: PropTypes.any
  }


