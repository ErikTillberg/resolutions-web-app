import React from 'react'
import ReactDOM from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

  resolutions(){
    return Resolutions.find().fetch();
  }

  addResolution(event){
    event.preventDefault();
    var text = this.refs.resolution.value.trim();
    this.refs.resolution.value = ''; //reset the form
    //insert data into collection
    Resolutions.insert({
      text:text,
      complete:false,
      createdAt: new Date()
    });
  }

  render() {
    let res=this.resolutions();
    if(res.length < 1){
      return (<div>Loading</div>)
    }
    return (
      <div>
        <h1>My Resosolutions</h1>
        <form className = "new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input
            type = "text"
            ref = "resolution"
            placeholder="Finish React Meteor Tutorials"/>
        </form>
        <div>
          {res[0].text}
        </div>
      </div>
    )
  }
}
