import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      charNum: 0,
    };

  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.charCounter.bind(this)}></textarea>
        <div className="counter">{this.state.charNum}</div>
      </div>
    );
  }

  charCounter(e) {
  
    this.setState({
      charNum:  e.target.value.length
    });
  }
}

export default App;
