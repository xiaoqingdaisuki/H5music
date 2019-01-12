import React, { Component } from 'react';

export default class today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div className="today">
        today
      </div>
    );
  }
}
