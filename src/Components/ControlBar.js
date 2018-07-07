import React, { Component } from "react";
import Switch from './Switch';

class ControlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modePower: false,
      modeBank: false,

    }
  }

  onChange = (event) => {
    this.props.volumeChange(event.target.value);
 
  };

  powerClick = () => {
    this.setState(
      prevState => ({modePower: !prevState.modePower}),
      () => (this.props.updatePower(this.state.modePower))
    );
  };

  bankClick = () => {
    this.setState(
      prevState => ({modeBank: !prevState.modeBank}),
      () => (this.props.updateBank(this.state.modeBank))
    );
  };

  render() {
    return (
      <div className="controls-container">
        <Switch
          label='Power'
          onClick={this.powerClick}
          mode={this.state.modePower}
        />
        <p id="display">
          {this.state.modePower && this.props.text}
        </p>
        <div className="volume-slider">
          <input
            type={"range"}
            max={1}
            min={0}
            step={0.01}
            value={this.props.volume}
            onChange={this.onChange}
          />
        </div>
        <Switch
          label='Bank'
          mode={this.state.modeBank}
          onClick={this.bankClick}
        />
      </div>
    )
  }
}

export default ControlBar;