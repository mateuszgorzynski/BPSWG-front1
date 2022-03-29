import React from 'react';
import './Style.css';
import Navigation from '../components/Navigation';
import TaskBox from '../components/TaskBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <Navigation></Navigation>
      <TaskBox></TaskBox>
    </div>


  );
}

export default App;
