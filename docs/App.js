import React, {Component} from 'react';
import DrumBar from './Components/DrumBar/index';
import ControlBar from './Components/ControlBar/index';
import { bank } from './helpers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modePower: false,
      modeBank: false,
      volume: 0.3,
      text: '',
      soundName: '',
      bank
    };
  }



  updateSoundName = (newSound) => {
      this.setState({
        text: newSound
      })
  };

  onVolumeChange = (newVolume) => {
    this.setState({
      volume: newVolume,
      text: `volume: ${Math.round(newVolume * 100)}`
    })
  };

  onBankClick = (mode) => {
    this.setState({
      modeBank: mode
    });
  };

  onPowerClick = (mode) => {
    this.setState({
      modePower: mode
    });
  };


  render() {
    return (
      <div id="drum-machine" className="App">
        <DrumBar
          {...this.state}
          updateSoundName={this.updateSoundName}
        />
        <ControlBar
          onBankClick={this.onBankClick}
          onPowerClick={this.onPowerClick}
          onVolumeChange={this.onVolumeChange}
          {...this.state}
        />
      </div>
    )
  }
}

export default App
