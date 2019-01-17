import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import ProgressBar from '../components/progress-bar';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
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
        duration: this.video.duration
    })
  }
  
  handleTimeUpdate = e => {
      this.video = e.target;
      this.setState({
        currentTime: this.video.currentTime
      });
  }
  
  handleProgressChange = e => {
      this.video.currentTime = e.target.value
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
        <ProgressBar 
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;