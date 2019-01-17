import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Utils from '../../utils';

class VideoPlayer extends Component {
  state = {
    pause: true,
      duration: Utils.formatTime('0'),
    currentTime: Utils.formatTime('0'),
  };

  componentDidMount() {
    this.setState({
      pause: !this.state.autoplay
    });
  }

  handlePause = event => {
    this.setState({
      pause: !this.state.pause
    });
  };

  handleLoadedMetadata = e => {
    this.video = e.target;
    this.setState({
        duration: Utils.formatTime(this.video.duration)
    })
  }
  
  handleTimeUpdate = e => {
      this.video = e.target;
      this.setState({
        currentTime: Utils.formatTime(this.video.currentTime)
      });    
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title title="Este es mi titulo" />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
        <PlayPause
          pause={this.state.pause}
          handlePause={this.handlePause}
        />
        <Timer 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;