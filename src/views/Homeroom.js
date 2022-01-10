import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router"; 
import { connect } from "react-redux";

import PageLoader from '../components/PageLoader';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreenStampItem from '../components/GreenStampItem';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

const Homeroom = props => {
  const _tempStudents = [
    {
      first_name: 'Cooper',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '150',
      year_group: '12',
      student_id: '63895'
    },
    {
      first_name: 'Cristian',
      last_name: 'LUSTRI',
      house: 'Laurentian',
      points: '100',
      year_group: '12',
      student_id: '64789'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '90',
      year_group: '8',
      student_id: '66540'
    }
  ];

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1500);
  }, []);

  const handleShowProfile = student => {
    setShowProfile(true);
    setProfileData(student);
  }

  const handleHideProfile = () => setShowProfile(false);

  if (!props.location.state) return <Redirect to="/dashboard" />

  const { code, year_group, letter } = props.location.state;
  const last_updated = 'Fri Jun - 09:03AM';
  
  if (!props.authUser) return <Redirect to="/login" />

  return (
    <>
    {
      isPageLoaded ?
      <>
        <Navbar />
        <Header heading="Green Stamps" subheading={props.authUser.email} />
        <main className="pb-8 pb-md-11 mt-md-n6">
          <div className="container-xl">
            <div className="col-12 col-md-12">
              <Card
                header={
                  <div className="d-flex align-items-center">
                    <div className="me-auto">
                      <h4 className="mb-0">Homeroom {code}</h4>
                    </div>
                    <div className="col-auto">
                      <small className="mb-0 text-muted">Last Updated: {last_updated}</small>
                    </div>
                  </div>
                }
                body={
                  <>
                  <div className="list-group mb-4">
                    <div className="row">
                      <div className="col-12 col-md-12" id="homeroomStudentsList">
                      {
                        _tempStudents.map(student => {
                          return <GreenStampItem
                            student={student}
                            click={handleShowProfile}
                          />
                        })
                      }
                      </div>
                    </div>
                  </div>
                  <div className="m-6 mb-4">
                    <button className="btn btn-sm btn-primary" disabled style={{marginRight: 4}}>Save changes</button>
                    <Link className="btn btn-sm btn-secondary" to="/homerooms">Cancel</Link>
                  </div>
                  </>
                }
              />
            </div>
          </div>
        </main>
        <Modal
          title={profileData.first_name + "'s profile"}
          body={
            <div></div>
          }
          onShow={showProfile}
          onClose={handleHideProfile}
        />
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

export default connect(mapStateToProps)(Homeroom);