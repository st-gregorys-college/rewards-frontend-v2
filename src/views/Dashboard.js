import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoader from '../components/PageLoader';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';

const Dashboard = (props) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  });

  const searchStudents = event => {
    const { value } = event.target;

    console.log(value);
  };

  if (!props.authUser) return <Redirect to="/login" />

  return (
    <div>
      { isPageLoaded ? '' : <PageLoader /> }
      <Navbar />
      <Header heading="Dashboard" subheading={props.authUser.email} />
      <main className="pb-8 pb-md-11 mt-md-n6">
        <div className="container-xl">
          <div className="col-12 col-md-12">
            <Card
              header={
                <div>
                  <h4 className="mb-2">Search</h4>
                  <small className="text-gray-700">Enter a student's First name, Last name or Student ID. You can also use terms such as "jo sm" or "sm jo"</small>
                </div>
              }
              body={
                <div className="form-group mb-0">
                  <input type="text" className="form-control" maxLength="30" onInput={searchStudents} placeholder="Search" />
                </div>
              }
            />
          </div>
        </div>
      </main>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { authUser: state.auth.authUser };
};

export default connect(mapStateToProps)(Dashboard);