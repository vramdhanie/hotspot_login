import React, { Component } from 'react';
import './main.css';

import Image from '../image/image';
import Counter from '../counter/counter';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <header className="main-header">
          <h1 className="main-title">Steve's Electronics</h1>
        </header>
        <section className="main-content">
          <Image/>
          <Counter/>
        </section>
      </div>
    );
  }
}

export default Main;
