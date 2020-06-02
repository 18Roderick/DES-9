///cada page es una pagina del sitio web
import React from 'react';

import Merch from '../components/Merch';
import News from '../components/News';
import Contact from '../components/Contact'

const MerchPages = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <News></News>
        <Merch></Merch>
        <Contact/>
      </div>
    </React.Fragment>
  );
};

export default MerchPages;
