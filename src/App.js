import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      charNum: 0,
      num: ""
    }

  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.charCounter.bind(this)}></textarea>
        <div className="counter">{this.state.charNum}</div>
      </div>
    );
  }

  charCounter(event) {
    let charNum = event.target.value.length;
    this.setState({
      num: event.target.value,
      charNum: charNum
    });
  }
}

export default App;
