import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      <select className="dropDownContainer"
      onChange= {event =>{
        this.props.updateSize(event.target.value)
      }}
      disabled = {this.props.edit === 'false'}
      >
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
