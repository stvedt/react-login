import React from 'react';

const UserDetail = ({user}) => {

  return (
      <div className="col-md-4">
        <div className={"user priority-" + user.priority}>
          <h2>{user.name}</h2>
          <p className="age">Age: {user.age}</p>
          <p>Category: {user.category}</p>
        </div>
      </div>
  )
}

export default UserDetail;
