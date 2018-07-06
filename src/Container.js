import React from 'react';
import './App.css';

const firstBank = [{
    keyCode: 81,
    symbol: 'q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    symbol: 'w',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    symbol: 'e',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    symbol: 'a',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    symbol: 's',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    symbol: 'd',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    symbol: 'z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    symbol: 'x',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    symbol: 'c',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const secondBank = [{
    keyCode: 81,
    symbol: 'q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    symbol: 'w',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    symbol: 'e',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    symbol: 'a',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    symbol: 's',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    symbol: 'd',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    symbol: 'z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    symbol: 'x',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    symbol: 'c',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

function getValue(array, value, need) {
    var i = array.length;
    while (i--) {
        if (array[i].symbol === value) {
            return array[i][need];
        }
    }
}

function getSymbol(array, value) {
    var i = array.length;
    while (i--) {
        if (array[i].id === value) {
            return array[i].symbol;
        }
    }
}

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modePower: false,
            modeBank: false,
            bank: [...firstBank],
            soundName: ''
        };

        this.playSound = this.playSound.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }


    handleKeyPress(event) {
        var modePower = this.state.modePower;
        var symbol = getValue(this.state.bank, event.key, "symbol");
        var id = getValue(this.state.bank, event.key, "id");
        if (event.key === symbol && modePower) {
            this.setState({
                soundName: id,
                bank: !this.state.modeBank ? [...firstBank] : [...secondBank]
            });
            modePower ? this.playSound(symbol) : false;
        }
    }

    handleClick(event) {
        var id = getSymbol(this.state.bank, event.target.id);
        if (this.state.modePower) {
            this.setState({
                soundName: event.target.id,
                bank: !this.state.modeBank ? [...firstBank] : [...secondBank]
            });
            this.playSound(id)
        }
    }

    playSound(id) {
        var sound = document.getElementById(id);
        sound.play();
    }

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
                                    id={button.id}
                                    className={"drum-pad"}
                                    onClick={this.handleClick}
                                    tabIndex="0"
                                >
                                    <audio
                                        id={button.symbol}
                                        src={button.url}
                                    >
                                    </audio>
                                    {button.symbol.toUpperCase()}
                                </div>
                            )
                        )
                    }
                </div>
                <ControlContainer
                    sound={this.state.soundName}
                    updateBank={this.updateBank}
                    updatePower={this.updatePower}
                />
            </div>
        )
    }
}

class ControlContainer
    extends React
        .Component {
    constructor(props) {
        super(props);
        this.state = {
            modePower: false,
            modeBank: false
        };

        this.powerClick = this.powerClick.bind(this);
        this.bankClick = this.bankClick.bind(this);

    }

    powerClick() {
        this.setState(prevState => ({modePower: !prevState.modePower}),
            () => (this.props.updatePower(this.state.modePower)));
    }

    bankClick() {
        this.setState(prevState => ({modeBank: !prevState.modeBank}),
            () => (this.props.updateBank(this.state.modeBank)));
    }

    render() {
        return (
            <div className="controls-container">
                <div className="control">
                    <p>Power</p>
                    <div className="outer-select" onClick={this.powerClick}>
                        <div className={this.state.modePower ? "inner-select right" : "inner-select"}
                             onClick={this.powerClick}>
                        </div>
                    </div>
                </div>
                <p id="display">
                    {(this.state.modePower) ? this.props.sound : ''}
                </p>
                <div className="volume-slider">
                    <input type="range" min="0" max="100" step="1"/>
                </div>
                <div className="control">
                    <p>Bank</p>
                    <div className="outer-select" onClick={this.bankClick}>
                        <div className={this.state.modeBank ? "inner-select right" : "inner-select"}
                             style={{float: "left"}} onClick={this.bankClick}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Container extends React.Component {
    render() {
        return (
            <div>
                <ControlPanel/>
            </div>

        );
    }
}

export default Container;
