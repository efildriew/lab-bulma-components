import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div class="display-buttons">
        <button className="button is-danger">Danger</button>
        <button className="button is-danger is-outlined">Danger</button>
        <button className="button is-danger is-outlined is-inverted">Danger</button>
        <button className="button is-danger is-rounded">Danger</button>
        <button className="button is-danger is-loading">Danger</button>
      </div>
    );
  }
}

export default Button;