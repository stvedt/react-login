import React, { Component } from 'react';
import UserDetail from './user_detail';

class UserList extends Component {
  constructor(props){
    super(props)

    this.state = {
      filter: 'default'
    }

    this.userDetails = props.users.map( (user, index) => {
      return <UserDetail user={user} key={index} />;
    });
  }



  render (){
    return (
      <div className="row user-list">
        {this.userDetails}
      </div>
    )
  }
}

export default UserList;
