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

import { faFlushed, faCode, faPenFancy, faHandshake, faCameraRetro, faDatabase, faEnvelope, faAt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faPython, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faFlushed, faCode, faPenFancy, faHandshake, faCameraRetro, faEnvelope, faAt, faHeart);
library.add(fab, faJs, faReact, faPython, faDatabase, faAws, faSlackHash, faLinux, faTwitter, faInstagram, faGithub);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="sticky" style={{backgroundColor: '#022B36E0'}}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ fontSize: 18, fontFamily: 'Monaco', fontWeight: 500}} noWrap>
              <span style={{color: '#1E90FF' }}>~/YutoTachibana</span> <span style={{ color: '#FF6347' }}>❯</span><span style={{ color: '#A9A9A9'}}>❯❯ Portfolio<span className="blink">_</span></span>
            </Typography>
          </Toolbar>
        </AppBar>

        <main>
          <div className="sub-content bio">
            { contentTitle('bio', 'flushed', '#C71585')}
            <Grid container>
              <Grid item lg={2} md={2} xs={12} style={{margin: 'auto'}}>
                <div className="sub-content-image"> <img src={require('./img/profile.png')} alt="profile" /> </div>
              </Grid>
              <Grid item lg={10} md={10} xs={12}>
                <div className="sub-content-body"> <Introduce /> </div>
              </Grid>
            </Grid>
          </div>

          <div className="sub-content skill">
            { contentTitle('Tech skills', 'code', '#ADFF2F')}
              <Grid container style={{marginBottom: 40}}>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'js']} className="icons fa-4x" style={{color: '#FFD700'}} />
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-details">
                    Webアプリケーション開発でよく書きます。
                  </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'react']} className="icons fa-4x" style={{color: '#1E90FF'}} />
                  <span className="skill-name">React.js</span>
                    <span className="skill-details">
                      勉強中です。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./img/rails.png')} style={{height: 63}} alt="rails" />
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
                  <img src={require('./img/webrtc.png')} style={{height: 63}} alt="webrtc" />
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
              <Grid container style={{marginBottom: 40}}>
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
                      EC2, ECS, Lambda, S3, RDSなど。
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
                  <img src={require('./img/alexa.png')} style={{height: 63}} alt="alexa"/>
                  <span className="skill-name">Alexa Skill</span>
                    <span className="skill-details">
                      個人でスキル開発や社内勉強会の講師など。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <FontAwesomeIcon icon={['fab', 'slack-hash']} className="icons fa-4x" style={{color: '#3CB371'}} />
                  <span className="skill-name">Slack</span>
                    <span className="skill-details">
                      社内への導入を担当。bot開発も。
                    </span>
                </Grid>
                <Grid item lg={2} md={2} xs={4} className="skills">
                  <img src={require('./img/gas.png')} style={{height: 63}} alt="gas"/>
                  <span className="skill-name">Google Apps Script</span>
                    <span className="skill-details">
                      自動化による業務改善を担当。
                    </span>
                </Grid>
              </Grid>
          </div>

          <div className="sub-content work">
            { contentTitle('works/activities', 'pen-fancy', '#FF6347')}
            <Grid container className="cardGrid">
              {
                cards.map(
                  (cards, index) => {
                    return (
                      <Grid item lg={4} md={4} xs={12} key={index} style={{paddingBottom: 20}}>
                        <Card className="card" style={{width: 340, margin: 'auto'}}>
                            <CardMedia
                              className="media"
                              image={cards.image}
                              style={{height: 200, width: 340}}
                            />

                            <CardContent>
                              <Typography style={{fontSize: 16, fontWeight: 600, marginBottom: 5}}> {cards.title} </Typography>
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
                              <Typography variant="body1" component="span"> {cards.body} </Typography>
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

          <div className="sub-content">
            { contentTitle('SNS/Contact', 'handshake', '#4682B4')}
            <div style={{textAlign: 'center', marginTop: 20}}>
              <Grid container>
                <Grid item lg={12} md={12} xs={12}><span style={{color: '#2F4F4F', fontSize: 14}}>Twitterやメールでご連絡いただけると嬉しいです</span></Grid>
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
                    <img src={require('./img/qiita.png')} style={{height: 34}} className="radius25" alt="qiita" />
                  </a>
                </Grid>
                <Grid item lg={4} md={4} xs={2}></Grid>
              </Grid>

              <Grid container style={{marginTop: 30 }}>
                <Grid item lg={3} md={3} xs={1}></Grid>
                <Grid item lg={6} md={6} xs={10}>
                    <FontAwesomeIcon className="icons fa-lg" icon='envelope' style={{color: '#FF4500'}} />
                    <span style={{fontSize: 13, color: 'grey'}}>tachibanayu24<FontAwesomeIcon className="icon fa" icon='at' />gmail.com</span>
                </Grid>
                <Grid item lg={3} md={3} xs={1}></Grid>
              </Grid>
            </div>
          </div>
        </main>

        <footer>
          <p><FontAwesomeIcon className="icon fa" icon="heart" style={{marginRight: 5, color: '#FF1493'}} />
            Last-Modified: 2018/10/11
          </p>
        </footer>
    </React.Fragment>
    );
  }
}

const contentTitle = (title, icon, iconColor) => {
  return(
    <React.Fragment>
      <div className="content-title">
        <FontAwesomeIcon className="icons fa-lg" icon={icon} color={iconColor} />
        <span>{title}</span>
        <Divider inset />
      </div>
    </React.Fragment>
  );
}

class Introduce extends Component {
  render() {
    return(
      <React.Fragment>
        <p>はじめまして。立花優斗(<a href="https://twitter.com/tachibanayu24" target="_blank" rel="noopener noreferrer">@tachibanayu24</a>)と申します。<br />
          好きなものはファッション、将棋、野球、海外ドラマです。</p>
        <p>家庭の事情で高校中退して肉体労働者になりましたが、お金をためて高卒認定を取得、都内の大学(工学部)へ進学しました。<br />
          大学に通いながら新宿のベンチャー企業で3年間サービス運用、業務改善、採用活動とマルチに働いていました。<br />
          2018年4月に港区の大手通信系SIerに新卒入社し、ビジネス開発の仕事をしています。
        </p>
        <p>
          ものづくりが好きなのでプライベートでよくコーディングしています。<br />
          一人称でサービス開発に携われるような技術を身につけることを目指して日々勉強中です。
        </p>
      </React.Fragment>
    );
  }
}

const cards = [
  {
    image: "/static/images//works/portfolio.png",
    title:'Reactでポートフォリオ作成',
    date: '2018/10/10',
    catLg: 'dev',
    cat: ['React','Material-UI','farebase',],
    body: 'このページです。はじめてのReactです。自身の成果を振り返ったり、モチベーションを保ったりするのに良さそうなので開発しました。フロントエンドの知識をつけたかったのでReactにしました。お気に入りポイントのappBarは、私のMacbookのターミナルのプロンプトを再現しています。',
    ref: {
      name: ['サイトへ', '', 'GitHub',],
      url: ['#', '', 'https://github.com/tachibanayu24/my_portfolio',],
    },
  },
  {
    image: "/static/images//works/qiita-django-react.png",
    title:'Django+Reactプロジェクト開発開始のチュートリアル',
    date: '2018/10/10',
    catLg: 'written',
    cat: ['React','Django','',],
    body: 'React+Djangoでなにか開発したいので調べてわかったことを書きました。',
    ref: {
      name: ['Qiita', '', '',],
      url: ['https://qiita.com/tachibanayu24/items/282e09ccfe6089bb0476', '', '',],
    },
  },
  {
    image: '/static/images//works/roulette.png',
    title:'迷ったときにAlexaがルーレットしてくれるスキル',
    date: '2018/10/2',
    catLg: 'dev',
    cat: ['Lambda','javaScript','VUI',],
    body: 'はじめてのAlexaSkill開発。「Alexa。みんなのルーレットで都道府県やって。」でランダムに都道府県を返します。国名や料理名にも対応しています。ダーツの旅をたまにやるので開発してみました。公開申請の準備中です。',
    ref: {
      name: ['準備中', '紹介ツイート', '',],
      url: ['#', 'https://twitter.com/tachibanayu24/status/1046381193506091008', '',],
    },
  },
  {
    image: '/static/images//works/pytinps.png',
    title:'暗黙知をMarkdown記法で共有するDjangoアプリ',
    catLg: 'dev',
    cat: ['Django','MySQL','EC2',],
    date: '2018/9/17',
    body: 'ハッカソン#2 in 新宿。初めてDjangoを使いました。内に秘められがちな暗黙知をMarkdown記法によって共有できるサービスです。要するにQiitaのエロ版です。'
            + 'メンバーの強い希望でアダルトなサービスになりました。現在開発途中でまだ完成していません。',
    ref: {
      name: ['準備中', '紹介ツイート', 'GitHub',],
      url: ['#', 'https://twitter.com/tachibanayu24/status/1041700568492793856', 'https://github.com/tachibanayu24/py_slash_tinps',],
    },
  },
  {
    image: "/static/images//works/qiita-django.png",
    title:'DjangoアプリをAWSにデプロイするクイックリファレンス',
    date: '2018/9/11',
    catLg: 'written',
    cat: ['Django','Nginx','EC2',],
    body: 'ハッカソン#2の前に、#1でハマったデプロイ手順を勉強する意味も込めてQiitaに記事を投稿しました。初めて読まれることを意識して書きました。',
    ref: {
      name: ['Qiita', '', '',],
      url: ['https://qiita.com/tachibanayu24/items/b8d73cdfd4cbd42c5b1d', '', '',],
    },
  },
  {
    image: '/static/images//works/incrude.png',
    title:'仕事が辛い人を応援するWebアプリ',
    catLg: 'dev',
    cat: ['Rails','MySQL','EC2',],
    date: '2018/8/23',
    body: 'ハッカソン#1 in 大阪。初めて独自ドメインで公開したWebアプリです(現在は停止中)。TwitterAPIでユーザ登録し、一日一回就業後にスタンプを押します。'
          + 'スタンプ数に応じてアプリ内の労働環境が変化し、最終的に会社が爆発します。会社が嫌いなわけではなく「もっとエッジ効かせたい」を繰り返したらこうなってしまいました。',
    ref: {
      name: ['停止中', '紹介ツイート', 'GitHub'],
      url: ['', 'https://twitter.com/tachibanayu24/status/1032619847216070656', 'https://github.com/tachibanayu24/incrude'],
    },
  },
  {
    image: "/static/images//works/100daysofcode.png",
    title:'#100DaysOfCode 開始！',
    date: '2018/8/1',
    catLg: 'other',
    cat: ['','','',],
    body: '100日間コーディングをしてTwitterで報告するという、マラソンのような活動を始めます。最初80日はインプットしつつ月1ペースでなにか作り、最後20日くらいで自分のWebサービスを作りたい。',
    ref: {
      name: ['ツイート一覧', '', '',],
      url: ['https://twitter.com/search?f=tweets&q=from%3Atachibanayu24%20%23100DaysOfCode', '', '',],
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
  } else if(name === '準備中' || name === '停止中') {
    return (
      <Button size="small" style={{textTransform: 'none', backgroundColor: 'grey', color: '#FFF'}}>
        {name}
      </Button>
    );
  } else {
    return(
      <Button size="small" style={{backgroundColor: '#00CED1' }}>
        <a href={url} style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">{name}</a>
      </Button>
    );
  }
}

export default App;
