import React from 'react';
import './App.css';

class Panel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="drum-machine" className="App">
                <div className="inner-container">
                    <div className="drum-pad">Q</div>
                    <div className="drum-pad">W</div>
                    <div className="drum-pad">E</div>
                    <div className="drum-pad">A</div>
                    <div className="drum-pad">S</div>
                    <div className="drum-pad">D</div>
                    <div className="drum-pad">Z</div>
                    <div className="drum-pad">X</div>
                    <div className="drum-pad">C</div>
                </div>
                <div className="controls-container">
                    <div className="control">
                        <p>Power</p>
                        <div className="outer-select">
                            <div className="inner-select"> </div>
                        </div>
                    </div>
                    <p id="display">Open HH</p>
                    <div className="volume-slider">
                        <input type="range" step="0.01" min="0" max="1" value="0.3"/>
                    </div>
                    <div className="control">
                        <p>Bank</p>
                        <div className="outer-select">
                            <div className="inner-select" style={{float: "left"}}> </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Panel;
