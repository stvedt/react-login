import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.approvedUsers = { "test@zola.com": "zola#frontend"};
    this.state = {
      email: '',
      password: '',
      emailValid: null,
      passwordValid: null,
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
        <input type="text" id="inputEmail" className={"form-control " + (this.state.emailValid || this.state.emailValid === null ? '' : 'error')} placeholder="Email address" onChange={this.onEmailChange} />

        <label className="sr-only" htmlFor="inputPassword">Password</label>
        <input type="password" id="inputPassword" placeholder="Password"
          className={"form-control " + (this.state.passwordValid || this.state.passwordValid === null? '' : 'error')}
          onChange={this.onPasswordChange} />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }

  onEmailChange = (event) => {
    let email = event.target.value;
    this.setState({
      email,
      emailValid: this.isEmailValid(email),
    });

  }

  onPasswordChange = (event) => {
    let password = event.target.value;
    this.setState({
      password,
      passwordValid: this.isPasswordValid(password)
    });
  }

  isEmailValid(email){
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regex from https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript?answertab=active#tab-top
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
    //check password is a match
    return (this.approvedUsers[email] === password);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    if( !this.isEmailValid(this.state.email)){
      this.setState({emailValid: false})
      this.setState({statusMsg: 'Email Not Valid'});
      return;
    }

    if( !this.isPasswordValid(this.state.password)){
      this.setState({passwordValid: false})
      this.setState({statusMsg: 'Password must be 5 characters long and contain at least one special character: @#*$%^&+='});
      return;
    }

    if ( !this.isApprovedUser(this.state.email) ){
      //Denied - No User
      this.setState({statusMsg: 'Denied: User Does Not Exist'});
      return false;
    }

    if (this.isAuthenticatedUser(this.state.email, this.state.password) ){
      //Authenticated Successfully
      this.setState({statusMsg: ''});
      this.props.action(true);//pass true loggedIn to update main app loggedIn state
    } else {
      //User Exists but incorrect password
      this.setState({statusMsg: 'Denied: Password Is Incorrect'});
    }
  }
}
