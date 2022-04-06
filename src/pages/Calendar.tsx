import React from 'react';
import './Style.css';
import NavigationUser from '../components/NavigationUser';
import MainBox from '../components/MainBox';
import CalendarBox from '../components/CalendarBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <NavigationUser></NavigationUser>
      <CalendarBox></CalendarBox>
    </div>


  );
}

export default App;
