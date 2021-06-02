import React from 'react';
import NavigationBar from '../src/components/NavigationBar';
import IntroPage from './pages/IntroPage';
import AboutMePage from './pages/AboutMePage';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
          <HashLink smooth={true} to="/#AboutMePage" >
        </HashLink>
        
        <IntroPage />
        <AboutMePage />
      </Router>
    </div>
  );
}

export default App;
