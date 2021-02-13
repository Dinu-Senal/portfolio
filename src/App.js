import React from 'react';
import NavigationBar from '../src/components/NavigationBar';
import IntroPage from '../src/components/IntroPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <p>Dinu Senal</p>
      <IntroPage />
    </div>
  );
}

export default App;
