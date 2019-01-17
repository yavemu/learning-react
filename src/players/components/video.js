import React, { Component } from 'react';
import './video.css'

class Video extends Component {

    setRef = element => {
        this.video = element;
    }

    tooglePlayPause(e){
        if (this.props.pause) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.tooglePlayPause();
        }
    }


    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked,
        } = this.props;


        return (
            <div className="Video">
                <video
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                />
            </div>
        )
    }
}

export default Video;