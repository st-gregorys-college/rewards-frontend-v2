import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/authActions';

const Login = (props) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    props.login(inputValue);
  }

  const onChange = event => {
    const { value } = event.target;

    setInputValue({...inputValue, value });
  }

  const { authUser, authError, isLoading } = props;

  if (authUser) return <Redirect to="/dashboard" />

  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center gx-0 min-vh-100">
          <h2 className="mb-1 fw-bold" style={{position: 'absolute', top: 32, paddingLeft: '1.25rem', fontSize: 24}}>Student Wellbeing</h2>
          <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
            <h1 className="mb-0 fw-bold">Sign in</h1>
            <p className="mb-6 text-muted">St Gregory's College Campbelltown</p>
            <div className="mb-6">
              <form className="form-group" onSubmit={onSubmit}>
                <label htmlFor="email" className="form-label">Email or Student ID</label>
                {
                  isLoading
                  ?
                  <div>
                    <input className="form-control mb-3" disabled />
                    <button className="btn btn-primary w-100" disabled>Login</button>
                  </div>
                  :
                  <div>
                    <input 
                      type="text"
                      className="form-control mb-3"
                      id="email"
                      placeholder="Eg. 63895"
                      onChange={onChange}
                      value={inputValue.value}
                      required
                    />
                    
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </div>
                }
              </form>
              <p className="mb-0 fs-sm" style={{color: 'red'}}>
                {(isLoading ? '' : (authError === 'auth/popup-closed-by-user' ? '' : authError))}
              </p>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 align-self-stretch d-none d-lg-block">
              <div className="h-100 w-cover bg-cover login-bg">
                <div className="shape shape-start shape-fluid-y text-white">
                  <svg viewBox="0 0 100 1544" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="svg-fill" d="M0 0h100v386l-50 772v386H0V0z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
    authUser: state.auth.authUser,
    authError: state.auth.authError,
    isLoading: state.auth.isLoading
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(loginAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);