import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
        image: "/static/images//works/portfolio.png",
        title:'Reactでポートフォリオ作成(このページ)',
        date: '2018/10/8',
        catLg: 'dev',
        cat: ['React','Material-UI','farebase',],
        body: 'はじめてのReact。自身の成果を振り返ったり、モチベーションを保ったりするのに良さそうなので開発しました。フロントエンドの知識をつけたかったのでReactにしました。お気に入りポイントのappBarは、私のMacbookのターミナルのプロンプトを再現しています。',
        ref: {
          name: ['test', '', '',],
          url: ['#', '', '',],
        },
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'迷ったときにAlexaがルーレットしてくれるスキル',
        date: '2018/10/2',
        catLg: 'dev',
        cat: ['Lambda','javaScript','VUI',],
        body: 'はじめてのVUI/AlexaSkill開発。「Alexa。みんなのルーレットで都道府県やって。」などと命令するとランダムで都道府県を返してくれます。国名や料理名にも対応しています。ダーツの旅的なことをたまにやるので開発してみました。',
        ref: {
          name: ['testtest', '', '',],
          url: ['#', '', '',],
        },
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'暗黙知をMarkdown記法で共有するDjangoアプリ',
        catLg: 'dev',
        cat: ['Django','MySQL','EC2',],
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー',
        ref: {
          name: ['test', '', '',],
          url: ['#', '', '',],
        },
      },
      {
        image: "/static/images//works/qiita-django.png",
        title:'DjangoアプリをAWSにデプロイするクイックリファレンス',
        date: '2018/9/11',
        catLg: 'written',
        cat: ['Django','Nginx','EC2',],
        body: 'ハッカソン#2の前に、#1でハマりまくったAWSへのデプロイ手順を勉強する意味も込めてQiitaに記事を書いてみました。自分の記事の中では読まれることを意識して書きました。',
        ref: {
          name: ['test', '', '',],
          url: ['#', '', '',],
        },
      },
      {
        image: 'https://www.nature-isere.fr/sites/default/files/styles/natureisere_large/public/images/espece/principale/cdroits_limites_lezard_vert_m_g._leblais_fileminimizer.jpg?itok=ijpkc5v-',
        title:'仕事が辛い人を応援するWebアプリ',
        catLg: 'dev',
        cat: ['Rails','MySQL','EC2',],
        date: '2018/10/7',
        body: 'ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー',
        ref: {
          name: ['test', '', '',],
          url: ['#', '', '',],
        },
      },
      {
        image: "/static/images//works/100daysofcode.png",
        title:'#100DaysOfCode 開始！',
        date: '2018/8/1',
        catLg: 'other',
        cat: ['','','',],
        body: '主にTwitterで流行っている?100日間コーディングをしてTwitterで報告するという、マラソンのような活動を始めます。忙しくても基本的には毎日やります。最初80日はインプットしつつ月1ペースでなにか作り、最後20日くらいで自分のWebサービスを作りたいと思います。',
        ref: {
          name: ['test', '', '',],
          url: ['#', '', '',],
        },
      },
    ]
    const chips = (cat) => {
      if(cat === 'dev') {
        return(
          <Chip style={{backgroundColor: '#3CB371', color: '#fff', margin: 3 }} label="開発" className="chip" />
        );
      } else if(cat === 'written') {
        return(
          <Chip style={{backgroundColor: '#1E90FF', color: '#fff', margin: 3 }} label="書きもの" className="chip" />
        );
      } else if(cat === 'other') {
        return(
          <Chip style={{backgroundColor: 'grey', color: '#fff', margin: 3 }} label="その他" className="chip" />
        );
      } else if(cat === undefined || cat === '') {
      } else {
        return(
          <Chip style={{backgroundColor: '#FF8C00', color: '#fff', margin: 3 }} label={cat} className="chip" />
        );
      }
    }
    const refs = (name, url) => {
      if(name === undefined || name === '' ) {
      } else {
        return(
          <Button size="small" style={{backgroundColor: '#DAA520', color: '#FFF'}}>
            <a className="ref-link" href={url}>{name}</a>
          </Button>
        );
      }
    }

    console.log(cards[0].cat)
    console.log(cards[0].cat[1])

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
              <Grid item lg={2} md={2} xs={12} style={{margin: 'auto'}}>
                <div className="sub-content-image">
                  <img src={require('./img/profile.png')} alt="profile" />
                </div>
              </Grid>
              <Grid item lg={10} md={10} xs={12}>
                <div className="sub-content-body">
                  <p>はじめまして。立花優斗(<a href="https://twitter.com/tachibanayu24" target="_blank" rel="noopener noreferrer">@tachibanayu24</a>)と申します。<br />
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
              <Grid container style={{marginBottom: 40}}>
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
                  <img src={require('./img/rails.png')} style={{height: 63}} alt="rails" />
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
                  <img src={require('./img/webrtc.png')} style={{height: 63}} alt="webrtc" />
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
              <Grid container style={{marginBottom: 40}}>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'docker']} className="icons fa-4x" style={{color: '#1E90FF'}} />
                  <span className="skill-name">Docker</span>
                    <span className="skill-details">
                      学生時代の研究テーマです。
                      <a href="https://www.computer.org/csdl/proceedings/candar/2017/2087/00/2087a580-abs.html" target="_blank" rel="noopener noreferrer">学会発表</a>もいくつかしています。
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
                  <img src={require('./img/alexa.png')} style={{height: 63}} alt="alexa"/>
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
                  <img src={require('./img/gas.png')} style={{height: 63}} alt="gas"/>
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
              <Grid container>
                {
                  cards.map(
                    (cards, index) => {
                      return (
                        <Grid item lg={4} md={4} xs={12} key={index} style={{paddingBottom: 20}}>
                          <Card className="card" style={{width: 340}}>
                              <CardMedia
                                className="media"
                                image={cards.image}
                                style={{height: 200, width: 340}}
                              />

                              <CardContent>
                                <Typography style={{fontSize: 16, fontWeight: 600, marginBottom: 5}}>
                                  {cards.title}
                                </Typography>
                                <Typography variant="body2" component="span">
                                  <Grid container>
                                    <Grid item xs={3} style={{margin: 'auto'}}>
                                      <div>{cards.date}</div>
                                    </Grid>
                                    <Grid item xs={9}>
                                      {chips(cards.catLg)}
                                      {chips(cards.cat[0])}
                                      {chips(cards.cat[1])}
                                      {chips(cards.cat[2])}
                                    </Grid>
                                  </Grid>
                                </Typography>
                                <hr />
                                <Typography variant="body1" component="span">
                                  {cards.body}
                                </Typography>
                              </CardContent>
                              <CardActions style={{textDecoration: 'none'}}>
                                {refs(cards.ref.name[0], cards.ref.url[0])}
                                {refs(cards.ref.name[1], cards.ref.url[1])}
                                {refs(cards.ref.name[2], cards.ref.url[2])}
                              </CardActions>
                          </Card>
                        </Grid>
                      );
                    })
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
                    <img src={require('./img/qiita.png')} style={{height: 34}} className="radius25" alt="qiita" />
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
