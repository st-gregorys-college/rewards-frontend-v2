import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoader from '../components/PageLoader';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeroomList from '../components/HomeroomList';

const Homerooms = props => {
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
        <Header heading="Homerooms" subheading={props.authUser.email} />
        <main className="pb-8 pb-md-11 mt-md-n6">
          <div className="container-xl">
            <div className="col-12 col-md-12">
              <HomeroomList />
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

export default connect(mapStateToProps)(Homerooms);