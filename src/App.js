import React from 'react';
import Header from './components/Header';
import './styles.css';
import Routes from './routers'; 

const App = () => (
  <div className='App'>
    <Header />
    <Routes />
  </div>
);

export default App;
