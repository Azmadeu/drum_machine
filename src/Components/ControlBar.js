import React, {Component} from "react";
import Switch from './Switch';

class ControlBar extends Component {

  onVolumeChange = (event) => {
    this.props.onVolumeChange(event.target.value);
  };

  render() {
    const {
      onPowerClick,
      modePower,
      text,
      volume,
      modeBank,
      onBankClick,
    } = this.props;

    return (
      <div className="controls-container">
        <Switch
          label='Power'
          onClick={onPowerClick}
          mode={modePower}
        />
        <p id="display">
          {modePower && text}
        </p>
        <div className="volume-slider">
          <input
            type={"range"}
            max={1}
            min={0}
            step={0.01}
            value={volume}
            onChange={this.onVolumeChange}
          />
        </div>
        <Switch
          label='Bank'
          mode={modeBank}
          onClick={onBankClick}
        />
      </div>
    )
  }
}

export default ControlBar;