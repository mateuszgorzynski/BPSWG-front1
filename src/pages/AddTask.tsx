import React from 'react';
import './Style.css';
import NavigationUser from '../components/NavigationUser';
import AddTask from '../components/AddTaskBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <NavigationUser></NavigationUser>
      <AddTask></AddTask>
    </div>


  );
}

export default App;
