import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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

import { faFlushed, faCode, faPenFancy, faHandshake, faCameraRetro, faDatabase, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faPython, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faFlushed, faCode, faPenFancy, faHandshake, faCameraRetro, faEnvelope, faAt);
library.add(fab, faJs, faReact, faPython, faDatabase, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub);


class App extends Component {
  render() {

    const cards = [
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル1',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル2',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル3',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル4',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル5',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル6',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル7',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'タイトル8',
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー'
      },
    ]

    return (
      <React.Fragment>
        <AppBar position="sticky" style={{backgroundColor: '#022B36E0'}}>
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ fontSize: 18, fontFamily: 'Monaco', fontWeight: 900}} noWrap>
            <span style={{color: '#1E90FF' }}>~/YutoTachibana</span> <span style={{ color: '#FF6347' }}>❯</span><span style={{ color: '#A9A9A9'}}>❯❯ Portfolio<span className="blink">_</span></span>
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
            <Grid container>
              <Grid item lg={2} md={2} xs={12}>
                <div className="sub-content-image">
                  <img src={require('./img/profile.png')} />
                </div>
              </Grid>
              <Grid item lg={10} md={10} xs={12}>
                <div className="sub-content-body">
                  <p>はじめまして。立花優斗(<a href="https://twitter.com/tachibanayu24" target="_blank">@tachibanayu24</a>)と申します。<br />
                    都内在住のテック好きな男子です。</p>
                  <p>家庭の事情で高校を1年で中退して肉体労働者になりましたが、お金をためて高卒認定を取得し、都内の大学(工学部)へ進学。<br />
                    大学に通いながら新宿のベンチャー企業で3年間サービス運用、業務改善、採用活動とマルチに働いていました。<br />
                    2018年4月に港区の大手通信系SIerに新卒入社し、そこではビジネス開発の仕事をしています。
                  </p>
                  <p>
                    業務ではなかなかコードを書く機会を作れないので、プライベートでよくコーディングしています。<br />
                    一人称でサービス開発に携われるような技術を身につけることを目指して日々勉強中です。
                  </p>
                  <p>
                    ファッション、将棋、野球が好きです。
                  </p>
                </div>
          </Grid>
          </Grid>
          </div>
          <div className="sub-content skill">
            <div className="content-title">
              <FontAwesomeIcon className="icons fa-lg" icon="code" style={{color: '#ADFF2F'}} />
              <span>tech skills</span>
            </div>
            <Divider inset />
              <p style={{fontWeight: 600}}>よく使う/勉強中の技術・サービス</p>
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
                  <img src={require('./img/rails.png')} style={{height: 63}} />
                  <span className="skill-name">Ruby on Rails</span>
                    <span className="skill-details">
                      RailsとMySQLでWebアプリをいくつか開発しました。
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
                  <img src={require('./img/webrtc.png')} style={{height: 63}} />
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
                      個人開発やハッカソンでよく使っています。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./img/alexa.png')} style={{height: 63}} />
                  <span className="skill-name">Alexa Skill</span>
                    <span className="skill-details">
                      個人でスキル開発をしたり、社内勉強会で講師をしたりしました。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'slack-hash']} className="icons fa-4x" style={{color: '#3CB371'}} />
                  <span className="skill-name">Slack</span>
                    <span className="skill-details">
                      ベンチャーにいた頃、Slackを社内に導入する業務を担当しました。簡単なアプリも開発しました。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./img/gas.png')} style={{height: 63}} />
                  <span className="skill-name">Google Apps Script</span>
                    <span className="skill-details">
                      ベンチャーにいた頃、SpreadsheetにGASを適用して業務改善を行いました。
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
            <div className="cardGrid">
              <Grid container spacing={40}>
                {
                  cards.map((cards, index) => {
                    return (
                      <Grid item key="index" sm={6} md={4} lg={3}>
                        <Card className="card">

                          <CardActionArea>
                            <CardMedia
                              className="media"
                              image={cards.image}
                              title="Contemplative Reptile"
                              style={{height: 180}}
                            />
                            <CardContent>
                              <Typography style={{fontSize: 16}}>
                                {cards.title}
                              </Typography>
                              <Typography variant="body2" component="span">
                                {cards.date}
                              </Typography>
                              <hr />
                              <Typography variant="body1" component="span">
                                {cards.body}
                              </Typography>
                            </CardContent>
                          </CardActionArea>

                        </Card>
                      </Grid>
                    )})
                }
              </Grid>
            </div>
          </div>

          <div className="sub-content sns">
            <div className="content-title">
              <FontAwesomeIcon className="icons fa-lg" icon="handshake" style={{color: '#4682B4'}} />
              <span>SNS/Contact</span>
              <Divider inset />
            </div>
            <div style={{textAlign: 'center', marginTop: 40}}>
              <Grid container>
                <Grid item lg={4} md={4} xs={2}></Grid>
                <Grid item lg={1} md={1} xs={2}>
                  <a href="https://twitter.com/tachibanayu24" target="_blank">
                    <FontAwesomeIcon className="icons fa-2x" icon={['fab', 'twitter']} style={{color: '#1E90FF'}} />
                  </a>
                </Grid>
                <Grid item lg={1} md={1} xs={2}>
                  <a href="https://www.instagram.com/tachibanayu24/" target="_blank">
                    <FontAwesomeIcon className="icons fa-2x" icon={['fab', 'instagram']} style={{color: '#8B4513'}} />
                  </a>
                </Grid>
                <Grid item lg={1} md={1} xs={2}>
                  <a href="https://github.com/tachibanayu24" target="_blank">
                    <FontAwesomeIcon className="icons fa-2x" icon={['fab', 'github']} style={{color: '#2F4F4F'}} />
                  </a>
                </Grid>
                <Grid item lg={1} md={1} xs={2}>
                  <a href="https://qiita.com/tachibanayu24" target="_blank">
                    <img src={require('./img/qiita.png')} style={{height: 34}} className="radius25" />
                  </a>
                </Grid>
                <Grid item lg={4} md={4} xs={2}></Grid>
              </Grid>

              <Grid container style={{marginTop: 50 }}>
                <Grid item lg={4} md={4} xs={1}></Grid>
                <Grid item lg={1} md={1} xs={2} style={{textAlign: 'right'}} >
                    <FontAwesomeIcon className="icons fa-2x" icon='envelope' style={{color: '#FF4500'}} />
                </Grid>
                <Grid item lg={3} md={3} xs={8} style={{textAlign: 'left', margin: 'auto', color: 'grey'}} >
                    tachibanayu24<FontAwesomeIcon className="icon fa" icon='at' />gmail.com
                </Grid>
                <Grid item lg={4} md={4} xs={1}></Grid>
              </Grid>
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

export default App;
