import React, { Component } from "react";
import RefWithClassComp from "./RefWithClassComp";

class FoucsInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <RefWithClassComp ref={this.componentRef} />
        <button onClick={this.clickHandler}>Click to Focus</button>
      </div>
    );
  }
}

export default FoucsInput;
