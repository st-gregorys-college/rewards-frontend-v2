import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoader from '../components/PageLoader';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import StudentSearch from '../components/StudentSearch';
import TopTen from '../components/TopTen';
import PointsBreakdown from '../components/PointsBreakdown';
import StageChallenge from '../components/StageChallenge';

const Dashboard = (props) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1500);
  }, []);

  if (!props.authUser) return <Redirect to="/login" />

  return (
    <>
      {
        isPageLoaded ?
        <>
          <Navbar />
          <Header heading="Dashboard" subheading={props.authUser.email} />
          <main className="pb-8 pb-md-11 mt-md-n6">
            <div className="container-xl">
              <div className="col-12 col-md-12">
                <StudentSearch />
                <TopTen />
                <PointsBreakdown />
                <StageChallenge />
              </div>
            </div>
          </main>
        </>
        :
        <PageLoader />
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return { authUser: state.auth.authUser };
};

export default connect(mapStateToProps)(Dashboard);