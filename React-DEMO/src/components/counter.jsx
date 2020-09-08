import React, { Component } from "react";

class Counter extends Component {
  /* constructor() {
    super();
    console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getbadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
