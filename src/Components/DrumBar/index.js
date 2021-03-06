import React, {Component} from "react";
import {getSymbol, getId} from "../../helpers/index";

class DrumBar extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    let symbol = getSymbol(this.props.modeBank, this.props.bank, event.key);
    let id = getId(this.props.modeBank, this.props.bank, event.key);
    let elem = document.getElementById(id);
    if (event.key === symbol && this.props.modePower) {
      if (elem != null) {
        setTimeout(() => {
          elem.className = "active"
        }, 0);
        setTimeout(() => {
          elem.className = "drum-pad"
        }, 200);
      }
      this.props.updateSoundName(id);
      this.playSound(symbol);
    }
  };

  handleClick = (event) => {
    let elem = event.target;
    this.props.updateSoundName(elem.id);
    let id = getSymbol(this.props.modeBank, this.props.bank, elem.id);
    if (this.props.modePower) {
      this.playSound(id);
      this.activeStyle(event)
    }
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
    let sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.volume = this.props.volume;
    sound.play();
  };

  render() {
    const {
      modeBank,
      bank
    } = this.props;
    return (
      <div className="inner-container">
        {
          bank.map(button => (
              <div
                key={modeBank ? button.idSecond : button.idFirst}
                id={modeBank ? button.idSecond : button.idFirst}
                className={"drum-pad"}
                onMouseUp={this.handleClick}
              >
                <audio
                  id={button.symbol}
                  src={modeBank ? button.urlSecond : button.urlFirst}
                >
                </audio>
                {button.symbol.toUpperCase()}
              </div>
            )
          )
        }
      </div>
    )
  }
}

export default DrumBar;