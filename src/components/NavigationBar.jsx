import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import '../styles/components.scss';

const NavigationBar = () => {
    return (
        <div className="custom-navbar">
            <nav className="navbar navbar-expand-lg nav-color">
              
              <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    
              <div className="mr-1" style={{fontFamily:'Quentin', fontSize:"20px"}}>
                  D<span style={{color: 'rgb(82, 166, 164)'}}>S</span>ENAL
              </div>
              
              <div className="navbar collapse navbar-collapse" id="navbarToggler">
                <ul className="nav col-md-4 ml-auto">
                  <li className="nav-item">
                      <NavHashLink to="/#AboutMePage">
                          <a className="nav-link">About</a>
                      </NavHashLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">Project</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">Contact</a>
                  </li>
                </ul>
              </div>

            </nav>
        </div>
    );
}

export default NavigationBar;