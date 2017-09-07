import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.approvedUsers = { "test@zola.com": "zola#frontend"};

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      emailValid: true,
      passwordValid: true,
      statusMsg: ''
    };

  }
  render() {
    return (
      <form className="form-signin" onSubmit={this.onFormSubmit}>
        { this.state.statusMsg  &&
          <div className="alert alert-danger" role="alert">{this.state.statusMsg}</div>
        }

        <h2 className="form-signin-heading">Please log in:</h2>

        <label className="sr-only" htmlFor="inputEmail" >Email address</label>
        <input type="email" id="inputEmail" className={"form-control " + (this.state.emailValid ? '' : 'error')} placeholder="Email address" onChange={this.onEmailChange} required />

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

    this.setState({
      email,
      emailValid: this.isEmailValid(email)
    });
  }

  onPasswordChange = (event) => {
    let password = event.target.value;
    console.log('Password Changed:', password);

    this.setState({
      password,
      passwordValid: this.isPasswordValid(password)
    });
  }

  isEmailValid(email){
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regex from https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript?answertab=active#tab-top
    console.log('test email');
    return emailRegex.test(email);
  }

  isPasswordValid(password){
    let passwordRegex = /^(?=.{10,})(?=.*)(?=.*[@#*$%^&+=]).*$/;// This regex expects a-z either case with a length of at elast 10 and at least one special character of @#*$%^&+=
    return passwordRegex.test(password);
  }

  isApprovedUser = (email) => {
    //check if user is in approved list
    return Boolean(this.approvedUsers[email]);
  }

  isAuthenticatedUser = (email, password)=> {
    console.log('Authenticating', this.approvedUsers[email] , password);
    return (this.approvedUsers[email] === password);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if (this.isApprovedUser(this.state.email) ){
      //User Exists
      console.log('User Exists');
      this.setState({loggedIn: true});
    } else {
      //Denied - No User
      console.log('Denied: User Does Not Exist');
      this.setState({statusMsg: 'Denied: User Does Not Exist'});
      return;
    }

    if (this.isAuthenticatedUser(this.state.email, this.state.password) ){
      //Authenticated
      console.log('Authenticated. Enter!');
      this.setState({statusMsg: ''});
    } else {
      console.log('Denied: Password Is Incorrect');
      this.setState({statusMsg: 'Denied: Password Is Incorrect'});
    }
  }
}
