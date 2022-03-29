import React from 'react';
import './Style.css';
import Navigation from '../components/Navigation';
import AddTask from '../components/AddTaskBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <Navigation></Navigation>
      <AddTask></AddTask>
    </div>


  );
}

export default App;
