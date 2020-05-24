import React from 'react';
import Merch from './components/Merch/index';
import News from './components/News/index';

function App() {
  return (
    <div className="">
      <header className=""></header>

      <div className="container-fluid">
        <News></News>
        <Merch></Merch>
      </div>
    </div>
  );
}

export default App;
