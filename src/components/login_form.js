import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>

        <label className="sr-only" htmlFor="inputEmail">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />

        <label className="sr-only" htmlFor="inputPassword">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }
}
