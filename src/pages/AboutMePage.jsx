import React from 'react'
import '../styles/pages.scss';

const AboutMePage = () => {
    return (
        <div id="AboutMePage" className="aboutme-page p-1">
              <div className="header col-sm pt-3">About Me</div>
              <div className="sub-title pt-3">Get to know me before you dive in further</div>
              <div className="small-intro pt-3">
                I am a self-employed software and web engineer dedicated 
                to learning and teaching JavaScript for client-server architectures. 
                After obtaining my Master's Degree in computer science, I gained experience 
                from the startup world, where I used JavaScript intensively during both my 
                professional life and spare time. Eventually it led me to teach others about 
                these topics and to offer online courses and on-site consulting for companies. 
                I am happy to welcome you on my website :-)
              </div>
        </div> 
    );
}

export default AboutMePage;