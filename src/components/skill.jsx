import React from 'react';
import ContentTitle from './contentTitle';

import Grid from '@material-ui/core/Grid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faHtml5, faCss3Alt, faJs, faAngular, faReact, faVuejs, faJava, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faHtml5, faCss3Alt, faJs, faAngular, faReact, faVuejs, faJava, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub);

const Skill = () => {
  return (
    <>
      {ContentTitle('Tech Skills', 'code', '#ADFF2F')}
      <div className="sub-content-body">
        <Grid container>
          <Grid item lg={1} md={1}></Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <FontAwesomeIcon icon={['fab', 'html5']} className="skill-icon icons fa-3x" style={{ color: '#EA6227' }} />
            <FontAwesomeIcon icon={['fab', 'css3-alt']} className="skill-icon icons fa-3x" style={{ color: '#3498D0' }} />
            <span className="skill-name">HTML/CSS</span>
            <span className="skill-details">
              まずまずわかると思います
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <FontAwesomeIcon icon={['fab', 'js']} className="skill-icon icons fa-4x" style={{ color: '#FFD700' }} />
            <span className="skill-name">JS(TS)</span>
            <span className="skill-details">
              Webアプリ開発でよく書きます
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <FontAwesomeIcon icon={['fab', 'angular']} className="skill-icon icons fa-2x" style={{ color: '#E23237' }} />
            <FontAwesomeIcon icon={['fab', 'react']} className="skill-icon icons fa-2x" style={{ color: '#1E90FF' }} />
            <FontAwesomeIcon icon={['fab', 'vuejs']} className="skill-icon icons fa-2x" style={{ color: '#3FB280' }} />
            <span className="skill-name" style={{fontSize: 10}}>Angular/React/Vue</span>
            <span className="skill-details">
              仕事で使ったり趣味で勉強したり
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <img src={require('../img/icons/rails.png')} className="skill-icon iconizer-lg" alt="rails" />
            <span className="skill-name">Ruby on Rails</span>
            <span className="skill-details">
              Webアプリをいくつか開発しました
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <FontAwesomeIcon icon={['fab', 'java']} className="skill-icon icons fa-4x" style={{ color: '#1070B7' }} />
            <span className="skill-name">Java</span>
            <span className="skill-details">
              社内システムのバックエンドをJavaで実装
            </span>
          </Grid>
          <Grid item lg={1} md={1}></Grid>
          <Grid item lg={2} md={2}></Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <FontAwesomeIcon icon={['fab', 'docker']} className="skill-icon icons fa-4x" style={{ color: '#1E90FF' }} />
            <span className="skill-name">Docker</span>
            <span className="skill-details">
              学生時代の研究テーマで<a href="https://www.computer.org/csdl/proceedings/candar/2017/2087/00/2087a580-abs.html" target="_blank" rel="noopener noreferrer">学会発表</a>も何度か
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <FontAwesomeIcon icon={['fab', 'aws']} className="skill-icon icons fa-4x" style={{ color: '#FF8C00' }} />
            <span className="skill-name">AWS</span>
            <span className="skill-details">
              EC2, Lambda, S3, API-Gatewayなど色々
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <FontAwesomeIcon icon={['fab', 'github-alt']} className="skill-icon icons fa-4x" style={{ color: '#778899' }} />
            <span className="skill-name">GitHub</span>
            <span className="skill-details">
              個人開発やハッカソンでよく使います
            </span>
          </Grid>
          <Grid item lg={2} md={2} xs={4} className="skills">
            <img src={require('../img/icons/webrtc.png')} className="skill-icon iconizer-lg" alt="webrtc" />
            <span className="skill-name">WebRTC</span>
            <span className="skill-details">
              社内LANにサーバを立ててビデオチャットアプリを開発しました
            </span>
          </Grid>
          <Grid item lg={2} md={2}></Grid>
        </Grid>
      </div>
    </>
  );
}

export default Skill;