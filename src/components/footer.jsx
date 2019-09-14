import React from 'react';

import Divider from '@material-ui/core/Divider';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart);

// 最終更新日を入力する
const Footer = () => {
  return (
    <footer>
      <Divider />
      <p><FontAwesomeIcon className="icon fa" icon="heart" style={{ marginRight: 5, color: '#FF1493' }} />
        Last-Modified: 2019/9/15
      </p>
      <p className="ga-description">本ページでは、利用状況を把握するためにGoogle Analyticsを利用しています。</p>
    </footer>
  );
}

export default Footer;
