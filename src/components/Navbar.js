import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.png';

import { isStaff, isYearLeader } from '../permissions/user';

import SignOutButton from '../components/SignOutButton';

const Navbar = () => {
  const [staff, setStaff] = useState(false);
  const [yearLeader, setYearLeader] = useState(false);

  useEffect(async () => {
    setStaff(await isStaff());
    setYearLeader(await isYearLeader());
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-md">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="navbar-brand-img" />
        </Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <button className="navbar-toggler">
            <i className="fe fe-x"></i>
          </button>
          <ul className="navbar-nav" style={{flex: 1}}>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            {
              staff ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/homerooms">Green Stamps</Link>
                </li>
              ) : ''
            }
            {
              yearLeader ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/yearleader">Year Leader</Link>
                </li>
              ) : ''
            }
            <li className="nav-item">
              <Link className="nav-link" to="/rewards">Rewards</Link>
            </li>
            <SignOutButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;