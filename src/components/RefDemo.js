import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.CbRef = null; // for call back ref
    this.setCbRef = (e) => {
      this.CbRef = e;
    };
  }
  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    // for call back ref
    if (this.CbRef) {
      this.CbRef.focus();
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* for call back ref */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
