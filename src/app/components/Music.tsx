import React, { Component, RefObject } from 'react';
import audioFile from '../../../src/app/assets/audio/worlds2023audio.mp3';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

interface State {
  isPlaying: boolean;
  volume: number;
}

class MusicPlayer extends Component<{}, State> {
  audioRef: RefObject<HTMLAudioElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      isPlaying: false,
      volume: 1.0,
    };
    this.audioRef = React.createRef();
  }

  toggleAudio = () => {
    const audio = this.audioRef.current;
    if (audio) {
      if (this.state.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.setState({ isPlaying: !this.state.isPlaying });
    }
  };

  handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);
    const audio = this.audioRef.current;
    if (audio) {
      audio.volume = volume;
      this.setState({ volume });
    }
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', width: '200px', padding: '10px 0px 10px 10px', backgroundColor: '#1c2229', border: '2px solid #F1CE72' }}>
        <audio ref={this.audioRef} src={audioFile} />
        <button onClick={this.toggleAudio}>
          {this.state.isPlaying ? <PauseIcon  style={{ color: '#F1CE72' }} /> : <PlayArrowIcon style={{ color: '#F1CE72' }} />}
        </button>
        <div className="vertical-slider" style={{paddingTop: '5px', paddingRight: '15px', color: '#F1CE72'}}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.volume}
            onChange={this.handleVolumeChange}
            style={{ backgroundColor: '#F1CE72', color: '#FFF'}}
          />
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
