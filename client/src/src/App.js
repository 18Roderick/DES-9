import React from 'react';
import Merch from './components/Merch/index';
import News from './components/News/index';
import Header from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import GoalBar from './components/GoalBar/GoalBar';

import './App.css';

function App() {
  return (
    <div className="">
      <header className=""></header>

      <div className="container-fluid"></div>
      {/* <Header></Header> */}
      <NavBar></NavBar>
      <News></News>
      <Merch></Merch>
 
    </div>
  );
}

export default App;
