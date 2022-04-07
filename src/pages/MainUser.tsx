import React from 'react';
import './Style.css';
import NavigationUser from '../components/NavigationUser';
import MainBox from '../components/MainBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Strona główna</span>      

      <NavigationUser></NavigationUser>
    </div>


  );
}

export default App;
