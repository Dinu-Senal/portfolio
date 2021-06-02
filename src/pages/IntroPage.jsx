import React from 'react'
import tempimage from '../images/original 320x320.jpg';
import '../styles/pages.scss';

const IntroPage = () => {
    return (
        <div className="intro-page">
          <div className="container">
            <div className="row">
              <div className="my-name col-sm">
                Dinu Senal
                <br/>Sendanayake
              </div>
              <div className="col-sm pl-0">
                <img src={tempimage} alt="profile" className="my-5"/>
              </div>
            </div>  
          </div>
        </div> 
    );
}

export default IntroPage;