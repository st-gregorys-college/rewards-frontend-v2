import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.authUser
  };
};

export default connect(mapStateToProps)(Home);