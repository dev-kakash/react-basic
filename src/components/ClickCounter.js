import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

export class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // IncrementCount = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
