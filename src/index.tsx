import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login';
import Main from './pages/MainUser';
import Calendar from './pages/Calendar';
import Task from './pages/Task';
import AddTask from './pages/AddTask';
import MainAdmin from './pages/MainAdmin';


ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
