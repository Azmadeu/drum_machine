import React from 'react';
import './App.css';

// const volumeSlider = () => {
//     return (
//         <div className="volume-slider">
//             <input type="range" step="0.01" min="0" max="1" value="0.6"/>
//         </div>
//     )
// };

// const Bank = () => {
//     return (
//         <div className="control">
//             <p>Bank</p>
//             <div className="outer-select" onClick={this.bankClick}>
//                 <div className={this.state.bank} style={{float: "left"}} onClick={this.bankClick}></div>
//             </div>
//         </div>
//     )
// };

// const Power = () => {
//     return (
//         <div className="control">
//             <p>Power</p>
//             <div className="outer-select" onClick={this.powerClick}>
//                 <div className={this.state.power} onClick={this.powerClick}></div>
//             </div>
//         </div>
//     )
// };

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bitSounds: ["Heater 1", "Heater 2", "Heater 3", "Heater 4",
                "Clap", "Open HH", "Kick n' Hat", "Kick", "Closed HH"],
            pianoSounds: ["Chord 1", "Chord 2", "Chord 3", "Shaker",
                "Open HH", "Closed HH", "Punchy Kick", "Side Stick", "Snare"],
            soundName: '',
            modePower: false,
            modeBank: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        if (this.state.modePower) {
            (this.state.modeBank) ?
                this.setState({soundName: this.state.pianoSounds[event.target.id]}) :
                this.setState({soundName: this.state.bitSounds[event.target.id]});
        }
    }
    updatePower = (value) => {
        this.setState({ modePower: value })
    };
    updateBank = (value) => {
        this.setState({ modeBank: value })
    };
    render() {
        return (
            <div id="drum-machine" className="App">
                <div className="inner-container">

                </div>
                <ControlContainer sound={this.state.soundName}
                                  updateBank={this.updateBank}
                                  updatePower={this.updatePower}
                />
            </div>
        )
    }
}

class ControlContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: "inner-select",
            bank: "inner-select",
            modePower: false,
            modeBank: false
        };

        this.powerClick = this.powerClick.bind(this);
        this.bankClick = this.bankClick.bind(this);

    }

    powerClick() {
        if (this.state.power === "inner-select") {
            this.setState({power: "inner-select right"});
            this.state.modePower = true;
            this.props.updatePower(this.state.modePower)
        } else {
            this.setState({power: "inner-select"});
            this.state.modePower = false;
            this.props.updatePower(this.state.modePower)
        }
    }

    bankClick() {
        if (this.state.bank === "inner-select") {
            this.setState({bank: "inner-select right"});
            this.state.modeBank = true;
            this.props.updateBank(this.state.modeBank)
        } else {
            this.setState({bank: "inner-select"});
            this.state.modeBank = false;
            this.props.updateBank(this.state.modeBank);
        }
    }

    render() {
        return (
            <div className="controls-container">
                <div className="control">
                    <p>Power</p>
                    <div className="outer-select" onClick={this.powerClick}>
                        <div className={this.state.power} onClick={this.powerClick}> </div>
                    </div>
                </div>
                <p id="display">
                    {(this.state.modePower) ? this.props.sound : ''}
                    </p>
                <div className="volume-slider">
                    <input type="range" step="0.01" min="0" max="1" value="0.6"/>
                </div>
                <div className="control">
                    <p>Bank</p>
                    <div className="outer-select" onClick={this.bankClick}>
                        <div className={this.state.bank} style={{float: "left"}} onClick={this.bankClick}> </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: "inner-select",
            bank: "inner-select",
            mode: ''
        };
    }

    render() {
        return (
            <div>
                <ControlPanel/>
            </div>

        );
    }
}

export default Container;
