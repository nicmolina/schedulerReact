/**
 * @const Loading
 * component when useService hook is returning that the loading is true;
 * @param text
 * text string that will be displayed when the loading is rendered
 */

import React from 'react';
import './styles.css';
import CachedIcon from '@material-ui/icons/Cached';

const Loading = ({text}) => {
    return (
        <div aria-label='loadingContainer' className={"loadingContainer"}>
            <CachedIcon className={"rotate"}/>
            <p>{text}</p>
        </div>
    )
}
export default Loading;