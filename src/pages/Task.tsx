import React from 'react';
import './Style.css';
import NavigationUser from '../components/NavigationUser';
import TaskBoxUser from '../components/TaskBoxUser';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <NavigationUser></NavigationUser>
      <TaskBoxUser></TaskBoxUser>
    </div>


  );
}

export default App;
