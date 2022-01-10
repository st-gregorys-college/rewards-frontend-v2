import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoader from '../components/PageLoader';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import MeritList from '../components/MeritsList';
import LowestPoints from '../components/LowestPoints';

const YearLeader = props => {
  const sideNavItems = [
    {
      title: 'Merits',
      active: true,
      component: <MeritList />
    },
    {
      title: 'Statistics',
      active: false,
      component: <LowestPoints />
    }
  ];

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(<MeritList />);

  localStorage.setItem('last-page', '/yearleader');

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
  }, []);

  if (!props.authUser) return <Redirect to="/login" />

  return (
    <>
    {
      isPageLoaded ?
      <>
        <Navbar />
        <Header heading="Year Leader" subheading={props.authUser.email} sidenav="true" />
        <main className="pb-8 pb-md-11 mt-md-n6">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-md-3">
                <SideNav
                  heading="Year Leader"
                  items={sideNavItems}
                  setSelectedComponent={setSelectedComponent}
                />
              </div>
              <div className="col-12 col-md-9">
                {selectedComponent}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
      :
      <PageLoader />
    }
    </>
  );
}

const mapStateToProps = state => {
  return { authUser: state.auth.authUser }
}

export default connect(mapStateToProps)(YearLeader);