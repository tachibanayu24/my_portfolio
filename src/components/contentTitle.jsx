import React from 'react';

import Divider from '@material-ui/core/Divider';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlushed, faIdCard, faCode, faPenFancy, faHandshake, faCameraRetro, faEnvelope, faAt, faHeart, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
library.add(faFlushed, faIdCard, faCode, faPenFancy, faHandshake, faCameraRetro, faEnvelope, faAt, faHeart, faChevronCircleUp);

// タイトルとアイコンとアイコンの色を受け取って、各コンテンツのヘッダを返す
const ContentTitle = (title, icon, iconColor) => {
  return(
    <>
      <div className="sub-content">
        <div className="content-title">
          <FontAwesomeIcon className="content-title-icon icons fa-lg" icon={icon} color={iconColor} />
          <span>{title}</span>
          <Divider inset />
        </div>
      </div>
    </>
  );
}

export default ContentTitle;