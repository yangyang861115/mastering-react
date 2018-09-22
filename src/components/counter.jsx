import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //   constructor() {
  //     super();
  //     console.log("constructor ", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("Increment Clicked");
  //   }

  handleIncrement = product => {
    //console.log("Increment Clicked ", this);
    console.log(product);
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
