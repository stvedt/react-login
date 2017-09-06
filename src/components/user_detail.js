import React from 'react';

const UserDetail = ({user}) => {

  return (
      <div className="user">
        {user.name}
      </div>
  )
}

export default UserDetail;
