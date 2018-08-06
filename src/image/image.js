import React, { Component } from 'react';
import './image.css';
import ad from './wifi_v2.jpg';

export class Image extends Component {
  render() {
    return (
        <div className="image">
          <img src={ad} alt="" className="image-active"/>
        </div>
    );
  }
}

export default Image;
