import React from 'react';
import '../App.css';
import ContentTitle from './contentTitle';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

// 配列を追加することで表示されるカードが追加される
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

// cards.catLgの値によってchipsの色を変える
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

// cards.refs.nameの値によってbuttonの色を変える
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

// すべてのcardsの値をカード形式の表示に整形して返す
const Work = () => {    
  return(
    <>
      { ContentTitle('works/activities', 'pen-fancy', '#FF6347')}
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
    </>
  );
}

export default Work;