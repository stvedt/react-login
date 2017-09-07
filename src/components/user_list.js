import React, { Component } from 'react';
import UserDetail from './user_detail';

class UserList extends Component {
  constructor(props){
    super(props);
    this.originalUserList = props.users.slice();//slice without pass by reference
    this.state = {
      filter: 'default',
      userList: props.users
    }

  }

  /* comparisons */
  alphaCompareDes(a,b) {
    if (a.name > b.name)
      return -1;
    if (a.name < b.name)
      return 1;
    return 0;
  }

  alphaCompareAsc(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  priorityCompareAsc(a,b) {
    if (a.priority < b.priority)
      return -1;
    if (a.priority > b.priority)
      return 1;
    return 0;
  }

  changeSort = (event) => {
    let filterSort = event.target.value;
    console.log('apply filter', filterSort);
    this.setState({ filter: filterSort});

    let sortedList;
    switch(filterSort){
      case 'default':
        sortedList = this.originalUserList;
        break;
      case 'alpha-asc':
        sortedList = this.props.users.sort(this.alphaCompareAsc);
        break;
      case 'alpha-des':
        sortedList = this.props.users.sort(this.alphaCompareDes);
        break;
      case 'priority':
        sortedList = this.props.users.sort(this.priorityCompareAsc);
        break;
    }

    this.setState({ userList: sortedList});

  }

  renderUserDetails( users ) {
    return users.map( (user, index) => {
      return <UserDetail user={user} key={index} />;
    });
  }


  render (){
    return (
      <div>
        <div className="row">
          <select onChange={this.changeSort}>
            <option value='default'>Featured</option>
            <option value='alpha-asc'>Asc</option>
            <option value='alpha-des'>Des</option>
            <option value='priority'>VIP</option>
          </select>
        </div>
        <div className="row user-list">
          { this.renderUserDetails(this.state.userList) }
        </div>
      </div>
    )
  }
}

export default UserList;
