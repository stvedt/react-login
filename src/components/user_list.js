import React, { Component } from 'react';
import UserDetail from './user_detail';
import * as compares from '../helpers/sort_compares';

class UserList extends Component {
  constructor(props){
    super(props);
    this.originalUserList = props.users.slice();//slice without pass by reference
    this.uniqueCategories = [...new Set(props.users.map(item => item.category))].sort(compares.alphaCompareCatAsc); //sets store unique only
    this.state = {
      sort: 'default',
      filter: 'default',
      userList: props.users,
      sortedUserList: this.originalUserList
    }
  }

  changeSort = (event) => {
    let sortType = event.target.value;
    this.setState({ sort: sortType});

    let sortedList;
    switch(sortType){
      case 'default':
        sortedList = this.originalUserList;
        this.setState({filter:'default'})
        break;
      case 'alpha-asc':
        sortedList = this.state.userList.sort(compares.alphaCompareAsc);
        break;
      case 'alpha-des':
        sortedList = this.state.userList.sort(compares.alphaCompareDes);
        break;
      case 'priority':
        sortedList = this.state.userList.sort(compares.priorityCompareAsc);
        break;
    }

    this.setState({
      sortedUserList: sortedList,
      userList: sortedList
    });
  }

  changeFilter = (event) => {
    let filterType = event.target.value;
    if (filterType === 'default') {
      this.setState({filter: filterType });
      this.setState({ userList: this.state.sortedUserList });
      return;
    }

    let filteredList = this.state.sortedUserList.filter((user)=>{
      return user.category === filterType;
    });
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
          <label className="custom-control custom-radio"key={index}>
            <input className="custom-control-input" type="radio" value={category} checked={this.state.filter === category } onChange={this.changeFilter} />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">{category}</span>
          </label>
      );
    });
    this.uniqueCategories
  }


  render (){
    return (
      <div>
        <div className="row">
          <div className="col-md-12"><h1>Users</h1><hr/></div>
        </div>
        <div className="row filter-sort">
          <div className="col-md-4 sort">
            <div className="form-group">
                <select className="form-control" onChange={this.changeSort}>
                  <option value='default'>Featured</option>
                  <option value='alpha-asc'>Asc</option>
                  <option value='alpha-des'>Des</option>
                  <option value='priority'>VIP</option>
                </select>
              </div>
            </div>
            <div className="col-md-8 filter">
              Filter by Category:
              <label className="custom-control custom-radio">
                <input className="custom-control-input" type="radio" value="default" checked={this.state.filter === 'default' } onChange={this.changeFilter} />
                <span className="custom-control-indicator"></span>
                <span className="custom-control-description">None</span>
              </label>
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
