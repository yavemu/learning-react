import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0
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

    console.log(this.video);
    

    this.setState({
        duration: this.video.duration
    })
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
        />
        <PlayPause
          pause={this.state.pause}
          handlePause={this.handlePause}
        />
        <Timer 
            duration={this.state.duration}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;