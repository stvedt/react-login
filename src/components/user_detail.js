import React from 'react';

const UserDetail = ({user}) => {

  return (
      <div className="col-md-4">
        <div className={"user priority-" + user.priority}>
          <h2>{user.name}</h2>
          <span className="age">{user.age}</span>
          <span className="age">{user.category}</span>
        </div>
      </div>
  )
}

export default UserDetail;
