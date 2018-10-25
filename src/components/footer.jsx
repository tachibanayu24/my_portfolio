import React from 'react';
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart);

// 最終更新日を入力する
const Footer = () => {    
  return(
    <footer>
    <p><FontAwesomeIcon className="icon fa" icon="heart" style={{marginRight: 5, color: '#FF1493'}} />
      Last-Modified: 2018/10/25
    </p>
  </footer>
  );
}

export default Footer;