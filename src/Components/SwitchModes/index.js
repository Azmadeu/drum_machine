import React, {Component} from "react";

class Switch extends Component {
  render() {
    return (
      <div className="control">
        <p>{this.props.label}</p>
        <div className="outer-select" onClick={() => this.props.onClick(!this.props.mode)}>
          <div className={this.props.mode ? "inner-select right" : "inner-select"}
               style={{float: "left"}} >
          </div>
        </div>
      </div>
    )
  }
}

export default Switch;