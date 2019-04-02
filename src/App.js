import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {

  constructor(){
   super()
    this.state =  {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
}

    
  }



  updateColor= (newColor) => {
    this.setState({fontColor: newColor})
  }

  updateSize =(val)=> {
    this.setState({fontSize: val})
  }

  updateFamily=(val) => {
    this.setState({fontFamily: val})
  }

  updateEditStatus=(val) => {
    this.setState({allowEdit: val})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle updateEditStatus = {this.updateEditStatus} edit = {this.state.allowEdit} />
          <ColorChanger updateColor = {this.updateColor} color = {this.state.fontColor} edit = {this.state.allowEdit}/>
          <SizeChanger updateSize = {this.updateSize} size = {this.state.size} edit = {this.state.allowEdit}/>
          <FamilyChanger updateFamily = {this.updateFamily} fontFamily = {this.state.fontFamily} edit = {this.state.allowEdit}/>
        </div>
        <div className="textArea"><TextContainer 
        color = {this.state.fontColor}
        fontSize = {this.state.fontSize}
        fontFamily = { this.state.fontFamily}
        allowEdit = {this.state.allowEdit}


        />
        </div>
      </div>
    );
  }
}

export default App;
