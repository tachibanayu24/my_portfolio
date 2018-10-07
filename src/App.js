import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFlushed, faCode, faPenFancy, faHandshake, faCameraRetro, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faPython, faAws, faSlackHash, faLinux } from '@fortawesome/free-brands-svg-icons';

library.add(faFlushed, faCode, faPenFancy, faHandshake, faCameraRetro);
library.add(fab, faJs, faReact, faPython, faDatabase, faAws, faSlackHash, faLinux);


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ fontSize: 18, fontFamily: "Courier New", fontWeight: 900}} noWrap>
            <span style={{color: '#1E90FF' }}>/YutoTachibana</span> <span style={{ color: '#FF6347' }}>❯</span><span style={{ color: '#A9A9A9'}}>❯❯ Portfolio_</span>
          </Typography>
        </Toolbar>
        </AppBar>
        <main>
          <div className="sub-content bio">
            <div className="content-title">
              <FontAwesomeIcon className="icons fa-lg" icon="flushed" style={{color: '#C71585'}} />
              <span>bio</span>
            </div>
            <Divider inset />
            <div className="sub-content-body">
              <p>都内在住のテック好きな男子です。</p>
              <p>家庭の事情で高校を1年で中退して肉体労働者になりましたが、お金をためて高卒認定を取得し、都内の大学(工学部)へ進学。<br />
                大学に通いながら新宿のベンチャー企業で3年間サービス運用、業務改善、採用活動とマルチに働いていました。</p>
              <p>2018年4月に港区の大手通信系SIerに新卒入社し、そこではビジネス開発のお仕事をしています。<br />
                業務ではあまりコードを書く機会を作れないので、プライベートでよくコーディングしています。</p>
            </div>
          </div>
          <div className="sub-content skill">
            <div className="content-title">
              <FontAwesomeIcon className="icons fa-lg" icon="code" style={{color: '#ADFF2F'}} />
              <span>tech skills</span>
            </div>
            <Divider inset />
              <p>よく使う/勉強中の技術・サービス</p>
              <Grid container>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'js']} className="icons fa-4x" style={{color: '#FFD700'}} />
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-details">
                    Webアプリケーション開発などでよく書きます。
                  </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'react']} className="icons fa-4x" style={{color: '#1E90FF'}} />
                  <span className="skill-name">React.js</span>
                    <span className="skill-details">
                      勉強中です。このポートフォリオはReactで書いています。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./font/rails.png')} style={{height: 63}} />
                  <span className="skill-name">Ruby on Rails</span>
                    <span className="skill-details">
                      簡単なWebアプリをいくつか開発しました。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'python']} className="icons fa-4x" style={{color: '#DAA520'}} />
                  <span className="skill-name">Python</span>
                    <span className="skill-details">
                      勉強中です。Djangoを用いてWebアプリを開発しました。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./font/webrtc.png')} style={{height: 63}} />
                  <span className="skill-name">WebRTC</span>
                    <span className="skill-details">
                      peer.jsで社内LANにおけるビデオチャットアプリを開発しました。
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

              <div style={{height: 20}}></div>

              <Grid container>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'docker']} className="icons fa-4x" style={{color: '#1E90FF'}} />
                  <span className="skill-name">Docker</span>
                    <span className="skill-details">
                      学生時代の研究テーマです。
                      <a href="https://www.computer.org/csdl/proceedings/candar/2017/2087/00/2087a580-abs.html" target="_blank">学会発表</a>もいくつかしています。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'aws']} className="icons fa-4x" style={{color: '#FF8C00'}} />
                  <span className="skill-name">AWS</span>
                    <span className="skill-details">
                      EC2, ECS, Lambda, S3, RDS, Route53, Batchなど。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'github-alt']} className="icons fa-4x" style={{color: '#778899'}} />
                  <span className="skill-name">GitHub</span>
                    <span className="skill-details">
                      個人開発やハッカソンでよくホスティングとして使っています。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./font/alexa.png')} style={{height: 63}} />
                  <span className="skill-name">Alexa Skill</span>
                    <span className="skill-details">
                      個人でスキル開発をしたり、社内勉強会で講師をしたりしました。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'slack-hash']} className="icons fa-4x" style={{color: '#3CB371'}} />
                  <span className="skill-name">Slack</span>
                    <span className="skill-details">
                      ベンチャー時代、Slackを社内に導入する業務を担当しました。簡単なアプリも開発しました。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./font/gas.png')} style={{height: 63}} />
                  <span className="skill-name">Google Apps Script</span>
                    <span className="skill-details">
                      ベンチャー時代、社内で利用していたGoogle SpreadsheetにGASを適用して業務改善など行っていました。
                    </span>
                </Grid>
              </Grid>


          </div>
          <div className="sub-content work">
            <div className="content-title">
              <FontAwesomeIcon className="icons fa-lg" icon="pen-fancy" style={{color: '#FF6347'}} />
              <span>works/activities</span>
              <Divider inset />
            </div>
          </div>
          <div className="sub-content photo">
            <div className="content-title">
              <FontAwesomeIcon className="icons fa-lg" icon="camera-retro" style={{color: '#DDA0DD'}} />
              <span>photos</span>
              <Divider inset />
            </div>
          </div>
          <div className="sub-content sns">
            <div className="content-title">
              <FontAwesomeIcon className="icons fa-lg" icon="handshake" style={{color: '#4682B4'}} />
              <span>sns</span>
              <Divider inset />
            </div>
          </div>
        </main>

        <footer>
          <p>copyright 2018- Yuto Tachibana</p>
        </footer>
    </React.Fragment>
    );
  }
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default App;
