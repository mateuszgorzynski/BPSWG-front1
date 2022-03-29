import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login';
import Main from './pages/Main';
import Calendar from './pages/Calendar';
import Task from './pages/Task';
import AddTask from './pages/AddTask';


ReactDOM.render(
  <React.StrictMode>
    <AddTask />
  </React.StrictMode>,
  document.getElementById('root')
);
