import React from 'react';
import './styles.css';
import CachedIcon from '@material-ui/icons/Cached';

const Loading = ({text}) => {
    return (
        <div className={"loadingContainer"}>
            <CachedIcon className={"rotate"}/>
            <p>{text}</p>
        </div>
    )
}
export default Loading;