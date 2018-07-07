import React, { Component } from "react";
import Switch from './Switch';
import VolumeSlider from './VolumeSlider';
class ControlBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modePower: false,
      modeBank: false
    };
  }

  powerClick = () => {
    this.setState(prevState => ({modePower: !prevState.modePower}),
      () => (this.props.updatePower(this.state.modePower)));
  };

  bankClick = () => {
    this.setState(prevState => ({modeBank: !prevState.modeBank}),
      () => (this.props.updateBank(this.state.modeBank)));
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
          {this.state.modePower && this.props.sound}
        </p>
        <div className="volume-slider">
          <VolumeSlider />
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