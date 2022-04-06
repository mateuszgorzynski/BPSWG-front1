import React from 'react';
import './Style.css';
import NavigationAdmin from '../components/NavigationAdmin';
import MainBox from '../components/MainBox';
import TaskBoxUser from '../components/TaskBoxUser';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <NavigationAdmin></NavigationAdmin>
      <MainBox></MainBox>


      
    </div>


  );
}

export default App;
