import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoader from '../components/PageLoader';
import Navbar from '../components/Navbar';

const Dashboard = (props) => {
  if (!props.authUser) {
    return <Redirect to="/login" />
  }

  // return (
  //   <div>
  //     <h1>Dashboard</h1>
  //     <h2>Name: {props.authUser.displayName}</h2>
  //     <h2>Email: {props.authUser.email}</h2>
  //     <SignOutButton />
  //   </div>
  // );

  return (
    <div>
      {/* <PageLoader /> */}
      <Navbar />
    </div>
  )
};

const mapStateToProps = (state) => {
  return { authUser: state.auth.authUser };
};

export default connect(mapStateToProps)(Dashboard);