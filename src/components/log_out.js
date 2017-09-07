import React, { Component } from 'react';

export default class LogOut extends Component{
  constructor (props){
    super(props);

  }
  onLogOut = () => {
    this.props.action(false);
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <button className="logout btn btn-secondary" onClick={this.onLogOut}>Log-out</button>
        </div>
      </div>
    )
  }
}
