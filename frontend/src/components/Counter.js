import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      timerTime: 1,
      timerOn: false,
      view: []
    };
  }

  componentDidMount() {
    this.millisToMinutesAndSeconds();
  }

  millisToMinutesAndSeconds() {
    let time = 1500000;
    var minutes = Math.floor(time / 60000);
    var seconds = ((time % 60000) / 1000).toFixed(0);
    let countddown = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    this.setState({
      view: countddown
    });
  }

  render() {
    return (
      <div className='mainCounterContainer'>
        <h1 className='counter'>{this.state.view}</h1>;
        <div className='buttonActions'>
          <button onClick={this.startTimer}>Start</button>

          <button>Break</button>
        </div>
      </div>
    );
  }
}

export default Counter;
