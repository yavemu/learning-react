import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {
    state = {
        pause: true
    };

    componentDidMount(){
        this.setState({
            pause: (!this.state.autoplay)
        })
    }

    handlePause = event => {
        this.setState({
            pause: !this.state.pause
        });
    };

    render() {
        return (
        <VideoPlayerLayout>
            <Title title="Este es mi titulo" />
            <Video
                autoplay={this.props.autoplay}
                pause={this.state.pause}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
            />
            <PlayPause 
                pause={this.state.pause}
                handlePause={this.handlePause}
            />
        </VideoPlayerLayout>
        );
    }
}

export default VideoPlayer;