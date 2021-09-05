import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../firebase';
import { signOut } from '../authentication/user';

import Logo from '../assets/img/logo.png';

export default function Navbar() {
  const { displayName } = firebase.auth().currentUser;

  const [userPermissions, setUserPermissions] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [showDropdown, setShowDropdown] = useState('');

  useEffect(() => {
    setUserPermissions('System Administrator');
    setUserAvatar(`https://ui-avatars.com/api/?name=${displayName}&rounded=true&background=random&bold=true`);
  });

  const avatarEnter = () => {
    setShowDropdown('show');
  };

  const avatarLeave = () => {
    setShowDropdown('');
  };

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
            <li className="nav-item">
                  <Link className="nav-link" to="/homerooms">Green Stamps</Link>
                </li>
            <li className="nav-item">
                  <Link className="nav-link" to="/yearleader">Year Leader</Link>
                </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rewards">Rewards</Link>
            </li>
            <button onClick={signOut}>Sign Out</button>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div className="dropdown-toggle avatar avatar-lg" onMouseOver={avatarEnter} onMouseLeave={avatarLeave}>
                <img src={userAvatar} alt="Avatar" className="avatar-img" />
              </div>
              <ul className={"dropdown-menu shadow-lg " + showDropdown} onMouseOver={avatarEnter} onMouseLeave={avatarLeave}>
                <li className="nav-item">
                  <h5 className="nav-text fw-bold">{displayName}</h5>
                  <p className="nav-text">{userPermissions}</p>
                </li>
                <li className="nav-div"></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile/general">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account/general">Account</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/all">Administration</Link>
                </li>
                <li className="nav-div"></li>
                <li className="nav-item">
                  <a className="nav-link text-danger-hover" onClick={signOut}>Sign out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};