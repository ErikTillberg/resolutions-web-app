import React from 'react'

export default class ResolutionSingle extends React.Component{

  toggleChecked(){
    Meteor.call('toggleResolution', this.props.resolution);
  }

  deleteResolution(){
    Meteor.call('deleteResolution', this.props.resolution);
  }

  render(){

    //define whether or not the item is checked or not.
    const resolutionClass = this.props.resolution.complete? "checked" : "";
    //assign DOM to a variable. neat.
    const status = this.props.resolution.complete? <span className="completed">Completed</span> : ''

    return(
      <li className = {resolutionClass}>
        <input type = "checkbox"
          readOnly = {true}
          checked={this.props.resolution.complete}
          onClick={this.toggleChecked.bind(this)} />
        {this.props.resolution.text}
        {status}
        <button className = "btn-cancel"
          onClick={this.deleteResolution.bind(this)}>
          &times;
        </button>
      </li>
    )
  }
}
