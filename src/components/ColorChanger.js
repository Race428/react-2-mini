import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer" 
      onChange={event => {
        this.props.updateColor(event.target.value)
      }}
      disabled = {this.props.edit === 'false'}
      >
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
