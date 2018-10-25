import React from 'react';
import '../App.css';
import ContentTitle from './contentTitle';

import Grid from '@material-ui/core/Grid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faJs, faReact, faPython, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faJs, faReact, faPython, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub);

const Skill = () => {
  return(
    <>
      { ContentTitle('Tech skills', 'code', '#ADFF2F')}
      <Grid container>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'js']} className="icons fa-4x" style={{color: '#FFD700'}} />
        <span className="skill-name">JavaScript</span>
        <span className="skill-details">
          Webアプリ開発でよく書きます。
        </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'react']} className="icons fa-4x" style={{color: '#1E90FF'}} />
        <span className="skill-name">React.js</span>
          <span className="skill-details">
            勉強中です。このページはReactで開発しています。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <img src={require('../img/rails.png')} style={{height: 63}} alt="rails" />
        <span className="skill-name">Ruby on Rails</span>
          <span className="skill-details">
            Webアプリをいくつか開発しました。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'python']} className="icons fa-4x" style={{color: '#DAA520'}} />
        <span className="skill-name">Python</span>
          <span className="skill-details">
            勉強中です。DjangoでWebアプリを開発しました。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <img src={require('../img/webrtc.png')} style={{height: 63}} alt="webrtc" />
        <span className="skill-name">WebRTC</span>
          <span className="skill-details">
            社内LANにサーバを立ててビデオチャットアプリを開発しました。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'linux']} className="icons fa-4x" style={{color: '#2F4F4F'}} />
        <span className="skill-name">Linux</span>
          <span className="skill-details">
            学生のころからよく触っています。
          </span>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'docker']} className="icons fa-4x" style={{color: '#1E90FF'}} />
        <span className="skill-name">Docker</span>
          <span className="skill-details">
            学生時代の研究テーマで<a href="https://www.computer.org/csdl/proceedings/candar/2017/2087/00/2087a580-abs.html" target="_blank" rel="noopener noreferrer">学会発表</a>も何度か。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'aws']} className="icons fa-4x" style={{color: '#FF8C00'}} />
        <span className="skill-name">AWS</span>
          <span className="skill-details">
            EC2, Lambda, S3, API-Gatewayなど色々。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'github-alt']} className="icons fa-4x" style={{color: '#778899'}} />
        <span className="skill-name">GitHub</span>
          <span className="skill-details">
            個人開発やハッカソンでよく使います。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <img src={require('../img/alexa.png')} style={{height: 63}} alt="alexa"/>
        <span className="skill-name">Alexa Skill</span>
          <span className="skill-details">
            個人でスキル開発や社内勉強会の講師など。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <FontAwesomeIcon icon={['fab', 'slack-hash']} className="icons fa-4x" style={{color: '#3CB371'}} />
        <span className="skill-name">Slack</span>
          <span className="skill-details">
            社内導入を担当。bot開発も。
          </span>
      </Grid>
      <Grid item lg={2} md={2} xs={4} className="skills">
        <img src={require('../img/gas.png')} style={{height: 63}} alt="gas"/>
        <span className="skill-name">Google Apps Script</span>
          <span className="skill-details">
            自動化による業務改善を担当。
          </span>
      </Grid>
    </Grid>
    </>
  );
}

export default Skill;