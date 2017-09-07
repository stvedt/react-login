import React, { Component } from 'react';
import LoginForm from './login_form';
import UserList from './user_list';

const USERS = {
  "data": [
    {
      "name": "Joe",
      "age": 24,
      "priority": 1,
      "category": "cat2"
    },
    {
      "name": "Jane",
      "age": 76,
      "priority": 4,
      "category": "cat1"
    },
    {
      "name": "Kevin",
      "age": 32,
      "priority": 2,
      "category": "cat2"
    },
    {
      "name": "Lucy",
      "age": 54,
      "priority": 1,
      "category": "cat3"
    },
    {
      "name": "Colin",
      "age": 34,
      "priority": 3,
      "category": "cat1"
    },
    {
      "name": "Franny",
      "age": 36,
      "priority": 2,
      "category": "cat3"
    },
    {
      "name": "Neil",
      "age": 74,
      "priority": 4,
      "category": "cat2"
    },
    {
      "name": "Katy",
      "age": 55,
      "priority": 3,
      "category": "cat2"
    }
  ]
};

export default class App extends Component {
  constructor(props){
    super(props);
    let loggedInFakeCookie = Boolean(localStorage.getItem('loggedIn'));
    this.state = {
      loggedIn: loggedInFakeCookie
    }
  }

  updateLoggedInState = ( isLoggedIn ) => {
    if(isLoggedIn) {
        localStorage.setItem('loggedIn', true);
    } else {
      localStorage.removeItem('loggedIn'); //cannot pass boolean because localStorage stores only string value and string "false" is truthy
    }
    this.setState({ loggedIn: isLoggedIn });
  }

  render() {
    if ( this.state.loggedIn ){
      return (
          <UserList users={USERS.data} />
      )
    } else {
      return <LoginForm action={this.updateLoggedInState}/>
    }
  }
}
