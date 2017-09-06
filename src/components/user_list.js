import React, { Component } from 'react';
import UserDetail from './user_detail';

const UserList = (props) => {
  const userDetails = props.users.map( (user, index) => {
    return <UserDetail user={user} key={index} />;
  });

  return (
    <div className="user-list">
      {userDetails}
    </div>
  );
}

export default UserList;
