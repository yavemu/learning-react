import React from 'react';
import './timer.css';
import Utils from "../../utils";

function Timer(props) {
    return <div className="Timer">
        <p>
          <span>
            {Utils.formatTime(props.currentTime)} / {Utils.formatTime(props.duration)}
          </span>
        </p>
      </div>;
}

export default Timer;