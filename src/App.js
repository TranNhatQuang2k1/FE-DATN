import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import HomePage from './pages/HomePages';
import { ToastContainer } from 'react-toastify';
import RoutesComponent from './routes';
function App() {
  return (
    <div className="App">
        <RoutesComponent />
        {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
