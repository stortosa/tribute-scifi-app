import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../bladecss.css';

const HomeBlade = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/bladerunner" className="nav-link" activeClassName="active">
              LIST OF BLADE RUNNERS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/bladerunner/new" className="nav-link" activeClassName="active">
              ADD A BLADE RUNNERS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/replicants" className="nav-link" activeClassName="active">
              LIST OF REPLICANTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/replicants/new" className="nav-link" activeClassName="active">
              ADD A REPLICANT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div className="rain">HOME LANDING PAGE OF BLADE RUNNER
      <h1>Do the androids dream of electric sheep?</h1><h4>Philip K. Dick</h4>
      <h1>Blade Runner</h1><h4>Ridley Scott</h4>
      <h1>Blade Runner 2049</h1><h4>Denis Villeneuve</h4>

    </div>
  </div>
);
export default HomeBlade;