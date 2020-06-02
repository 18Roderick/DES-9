///cada page es una pagina del sitio web
import React from 'react';

import Merch from '../components/Merch';
import News from '../components/News';


const MerchPages = () => {
  return (
    <React.Fragment>
      <div className="">
        <News></News>
        <Merch></Merch>
      </div>
    </React.Fragment>
  );
};

export default MerchPages;
