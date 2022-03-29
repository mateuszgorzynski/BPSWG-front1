import React from 'react';
import './Style.css';
import Navigation from '../components/Navigation';
import MainBox from '../components/MainBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <Navigation></Navigation>
      <MainBox></MainBox>
    </div>


  );
}

export default App;
