import React from 'react';
import '../App.css';
import ContentTitle from './contentTitle';

import Grid from '@material-ui/core/Grid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faTwitter, faInstagram, faGithub);

const Header = () => {    
  return(
    <>
      { ContentTitle('SNS/Contact', 'handshake', '#4682B4')}
      <div style={{textAlign: 'center', marginTop: 20}}>
        <Grid container>
          <Grid item lg={12} md={12} xs={12}>
            <span style={{color: '#2F4F4F', fontSize: 12}}>面談や受諾開発など、お気軽にお問合せください<br />
            Twitterかメールでご連絡いただけると嬉しいです
            </span>
          </Grid>
        </Grid>
        <Grid container style={{marginTop: 20}}>
          <Grid item lg={4} md={4} xs={2}></Grid>
          <Grid item lg={1} md={1} xs={2}>
            <a href="https://twitter.com/tachibanayu24" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icons fa-2x" icon={['fab', 'twitter']} style={{color: '#1E90FF'}} />
            </a>
          </Grid>
          <Grid item lg={1} md={1} xs={2}>
            <a href="https://www.instagram.com/tachibanayu24/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icons fa-2x" icon={['fab', 'instagram']} style={{color: '#8B4513'}} />
            </a>
          </Grid>
          <Grid item lg={1} md={1} xs={2}>
            <a href="https://github.com/tachibanayu24" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="icons fa-2x" icon={['fab', 'github']} style={{color: '#2F4F4F'}} />
            </a>
          </Grid>
          <Grid item lg={1} md={1} xs={2}>
            <a href="https://qiita.com/tachibanayu24" target="_blank" rel="noopener noreferrer">
              <img src={require('../img/qiita.png')} style={{height: 34}} className="radius25" alt="qiita" />
            </a>
          </Grid>
          <Grid item lg={4} md={4} xs={2}></Grid>
        </Grid>

        <Grid container>
          <Grid item lg={3} md={3} xs={1}></Grid>
          <Grid item lg={6} md={6} xs={10}>
              <FontAwesomeIcon className="icons fa-lg" icon='envelope' style={{color: '#FF4500'}} />
              <span style={{fontSize: 13, color: 'grey'}}>tachibanayu24<FontAwesomeIcon className="icon fa" icon='at' />gmail.com</span>
          </Grid>
          <Grid item lg={3} md={3} xs={1}></Grid>
        </Grid>
     </div>
    </>
  );
}

export default Header;