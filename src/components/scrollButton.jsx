import React from 'react';
import '../App.css';
import ScrollToTop from 'react-scroll-up';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronCircleUp);

// 押下したらトップまでスクロールするボタンを表示する
// showUnder: 何pxまで下にスクロールしたらボタンを表示するか
const ScrollButton = () => {    
  return(
    <ScrollToTop showUnder={300}>
      <FontAwesomeIcon className="icon fa-3x" icon="chevron-circle-up" style={{color: '#022B3677'}} />
    </ScrollToTop>
  );
}

export default ScrollButton;