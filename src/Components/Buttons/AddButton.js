import React from 'react';
import PropTypes from 'prop-types';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CachedIcon from '@material-ui/icons/Cached';
import './Buttons.css';

const AddButton = ({ id, text, loading, handleClick}) => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '12px'}}>
            <div>
                <label onClick={handleClick} htmlFor={id} className='add-attach attach-btn'>
                    {loading? <CachedIcon className='rotate'/> : <AddBoxIcon/>}
                    <span className="text_span">{text}</span>
                </label>
            </div>
        </div>
    )
}
export default AddButton;

AddButton.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleAddMenuFile: PropTypes.func
}
