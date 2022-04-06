import React from 'react';
import './App.css';
import LoginBox from './components/LoginBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heaing">APP NAME</span>      

      <LoginBox></LoginBox>
    </div>


  );
}

export default App;
