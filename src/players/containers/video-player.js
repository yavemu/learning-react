import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls.js';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false
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
    });
  };

  handleTimeUpdate = e => {
    this.video = e.target;
    this.setState({
      currentTime: this.video.currentTime
    });
  };

  handleProgressChange = e => {
    this.video.currentTime = e.target.value;
  };

  handleSeeking = event => {
    this.setState({
      loading: true
    });
  };

  handleSeeked = event => {
    this.setState({
      loading: false
    });
  };

  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }
  
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            // mando a full screen
            this.player.webkitRequestFullscreen()
        } else {
            // salgo del full screen
            document.webkitExitFullscreen();
        }
    }

    setRef = element => {
        this.player = element
    }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title title="Este es mi titulo" />
        <Controls>
          <PlayPause pause={this.state.pause} handlePause={this.handlePause} />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume 
            handleVolumeChange={this.handleVolumeChange} 
          />
          <FullScreen 
            handleFullScreenClick = {this.handleFullScreenClick}
          />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;