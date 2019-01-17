import React from 'react';
import './progress-bar.css'
import Utils from './../../utils'

function ProgressBar(props) {
    return(
        <div>
            <input 
                type='range'
                min= {0}
                max={Utils.convertToInt(props.duration)}
                value={Utils.convertToInt(props.currentTime)}
                onChange={props.handleProgressChange}

            />
        </div>
    )
}

export default ProgressBar;