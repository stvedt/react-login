import React, { Component } from 'react';
import UserDetail from './user_detail';

class UserList extends Component {
  constructor(props){
    super(props);
    this.originalUserList = props.users.slice();//slice without pass by reference
    this.uniqueCategories = [...new Set(props.users.map(item => item.category))]; //sets store unique only
    this.state = {
      sort: 'default',
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
    let sortType = event.target.value;
    console.log('apply filter', sortType);
    this.setState({ sort: sortType});

    let sortedList;
    switch(sortType){
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

  changeFilter = (event) => {
    let filterType = event.target.value;
    let filteredList = this.props.users.filter((user)=>{
      return user.category === filterType;
    });
    console.log('filter: ', filterType);
    this.setState({filter: filterType });
    this.setState({ userList: filteredList});

  }

  renderUserDetails( users ) {
    return users.map( (user, index) => {
      return <UserDetail user={user} key={index} />;
    });
  }

  renderCategoryOptions (categories) {
    return categories.map( (category, index) => {
      return (
        <div className="radio" key={index}>
          <label>
            <input type="radio" value={category} checked={this.state.filter === category } onChange={this.changeFilter} />
            {category}
          </label>
        </div>
      );
    });
    this.uniqueCategories
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
          <div className="radio-group">
            { this.renderCategoryOptions(this.uniqueCategories) }
          </div>
        </div>
        <div className="row user-list">
          { this.renderUserDetails(this.state.userList) }
        </div>
      </div>
    )
  }
}

export default UserList;
