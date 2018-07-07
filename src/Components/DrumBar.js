import React, {Component} from "react";
import ControlBar from './ControlBar';
import {getId, getSymbol, bank} from '../helpers';

class DrumBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modePower: false,
      modeBank: false,
      soundName: '',
      volume: 0.3,
      bank
    };

  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    let symbol = getSymbol(this.state.modeBank, this.state.bank, event.key);
    let id = getId(this.state.modeBank, this.state.bank, event.key);
    let elem = document.getElementById(id);
    if (event.key === symbol && this.state.modePower) {
      if (elem != null) {
        setTimeout(() => {elem.className = "active"}, 0);
        setTimeout(() => {elem.className = "drum-pad"}, 200);
      }
      this.setState({soundName: id, bank});
      this.playSound(symbol);
    }
  };

  handleClick = (event) => {
    let elem = event.target;
    let id = getSymbol(this.state.modeBank, this.state.bank, elem.id);
    if (this.state.modePower) {
      this.setState({soundName: elem.id, bank});
      this.playSound(id);
      this.activeStyle(event)
    }
  };

  onVolumeChange = (newVolume) => {
    this.setState({
      volume: newVolume
    })
  };

  activeStyle = (event) => {
    let elem = event.target;
    if (elem != null) {
      setTimeout(() => {
        elem.className = "active"
      }, 0);
      setTimeout(() => {
        elem.className = "drum-pad"
      }, 200);
    }
  };

  playSound = (id) => {
    var sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.volume = this.state.volume;
    sound.play();
  };

  updatePower = (value) => {
    this.setState({modePower: value})
  };

  updateBank = (value) => {
    this.setState({modeBank: value})
  };

  render() {
    return (
      <div id="drum-machine" className="App">
        <div className="inner-container">
          {
            this.state.bank.map(button => (
                <div
                  key={this.state.modeBank ? button.idSecond : button.idFirst}
                  id={this.state.modeBank ? button.idSecond : button.idFirst}
                  className={"drum-pad"}
                  onMouseUp={this.handleClick}
                >
                  <audio
                    id={button.symbol}
                    src={this.state.modeBank ? button.urlSecond : button.urlFirst}
                  >
                  </audio>
                  {button.symbol.toUpperCase()}
                </div>
              )
            )
          }
        </div>
        <ControlBar
          sound={this.state.soundName}
          updateBank={this.updateBank}
          updatePower={this.updatePower}
          volume={this.state.volume}
          volumeChange={this.onVolumeChange}
        />
      </div>
    )
  }
}

export default DrumBar;