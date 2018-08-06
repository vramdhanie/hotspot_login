import React, { Component } from 'react';
import './counter.css';

export class Counter extends Component {
  render() {
    return (
        <div className="counter">
          <div className="counter-top">
            Connect in
          </div>
          <div className="counter-timer">
            20
          </div>
          <div className="counter-units">
            seconds
          </div>
        </div>
    );
  }
}

export default Counter;
