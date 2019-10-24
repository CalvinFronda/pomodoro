import React, { Component } from 'react';
import Timer from './Timer'
import Option from './Option'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
      breakTime: 250,
      workTime: 1500,
      seconds: 1500
    };
    this.playStop = this.playStop.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    this.setState(function (prevState, props) {
      const currentState = Object.assign(prevState);
      const stillActive = (prevState.seconds - 1) > 0;
      const nextTimer = prevState.active === 'workTime' ? 'breakTime' : 'workTime'

      currentState.seconds = stillActive ? currentState.seconds - 1 : currentState[nextTimer];
      currentState.active = stillActive ? currentState.active : nextTimer;
      if (this.timerID) {
        currentState.timerId = this.timerID;
      }
      return currentState;
    });
  }
  playStop() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
      return this.setState({
        seconds: this.state.workTime,
        timerId: false,
        active: 'workTime'
      });
    }

    this.timerID = setInterval(() => this.updateTime(), 1000)
  }
  // 
  updateLength(timer, e) {
    if (this.state.timerId) {
      return false;
    }

    const state = Object.assign({}, this.state);
    state[timer] = e.target.value * 60;
    state.seconds = timer === 'workTime' ? e.target.value * 60 : state.seconds
    this.setState(state);
  }


  render() {
    const buttonString = this.state.timerId ? 'Stop' : 'Start';
    const Button = (props) => <button className="btn" onClick={props.action}>{props.children}</button>
    const divStyle = {
      textAlign: "center",

    }
    return (
      <div className="app" style={divStyle}>

        <Timer active={this.state.active} seconds={this.state.seconds} />
        <Button action={this.playStop}>{buttonString}</Button>
        <Option value={this.state.workTime} timer="workTime" updateLength={this.updateLength.bind(this)}>Minutes of work</Option>
        <Option value={this.state.breakTime} timer="breakTime" updateLength={this.updateLength.bind(this)}>Minutes of break</Option>
      </div>
    )
  }
}


export default Counter;
