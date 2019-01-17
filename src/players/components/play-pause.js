import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

function PlayPause(props) {
    return (
        <div className="PlayPause">
            {
                props.pause ?
                    <button
                        onClick={props.handlePause}
                    >
                        <Play size={25} color="grey" />
                    </button>
                :
                    <button
                        onClick={props.handlePause}
                    >
                        <Pause size={25} color="grey" />
                    </button>
            }
        </div>
    )
}

export default PlayPause;