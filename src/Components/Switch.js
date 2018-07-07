import React, {Component} from "react";

class Switch extends Component {
  render() {
    return (
      <div className="control">
        <p>{this.props.label}</p>
        <div className="outer-select" onClick={this.props.onClick}>
          <div className={this.props.mode ? "inner-select right" : "inner-select"}
               style={{float: "left"}} onClick={this.props.onClick}>
          </div>
        </div>
      </div>
    )
  }
}

export default Switch;