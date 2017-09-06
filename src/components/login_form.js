import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.approvedUsers = { "test@zola.com": "zola#frontend"};

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      passwordValid: false
    };

  }
  render() {
    return (
      <form className="form-signin" onSubmit={this.onFormSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>

        <label className="sr-only" htmlFor="inputEmail" >Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.onEmailChange} required />

        <label className="sr-only" htmlFor="inputPassword">Password</label>
        <input type="password" id="inputPassword" placeholder="Password"
          className={"form-control " + (this.state.passwordValid ? '' : 'error')}
          onChange={this.onPasswordChange} required/>

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }

  onEmailChange = (event) => {
    let email = event.target.value;
    console.log('Email Changed', email);

    this.setState({email});
  }

  onPasswordChange = (event) => {
    let password = event.target.value;
    console.log('Password Changed:', password);

    this.setState({
      password,
      passwordValid: this.passwordPass(password)
    });
  }

  passwordPass(password){
    let passwordRegex = new RegExp('^(?=.{10,})(?=.*)(?=.*[@#*$%^&+=]).*$');// This regex expects a-z either case with a length of at elast 10 and at least one special character of @#*$%^&+=
    return passwordRegex.test(password);
  }

  isApprovedUser = (email) => {
    //check if user is in approved list
    return Boolean(this.approvedUsers[email]);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.isApprovedUser(this.state.email) ){
      console.log('approved!');
      this.setState({loggedIn: true});
    }
  }
}
