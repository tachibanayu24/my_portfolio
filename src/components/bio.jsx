import React, { Component } from 'react';
import ContentTitle from './contentTitle';

import Grid from '@material-ui/core/Grid';

const Bio = () => {
  return(
    <>
      { ContentTitle('bio', 'flushed', '#C71585')}
      <div className="sub-content-body">
        <Grid container>
          <Grid item lg={3} md={3} xs={12}>
            <img className="bio-img" src={require('../img/profile.png')} alt="profile" />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <div className="sub-content-body"> <Introduce /> </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

class Introduce extends Component {
  render() {
    return(
      <>
        <p>
          ポートフォリオを見ていただきありがとうございます。<br />
          立花優斗(<a href="https://twitter.com/tachibanayu24" target="_blank" rel="noopener noreferrer">@tachibanayu24</a>)です！
        </p>
        <p>
          ものづくりが好きなのでプライベートでよくコーディングしているエンジニアです。<br />
          一人称でサービス開発に携われるような技術を身につけることを目指して日々勉強ています。
        </p>
        <p>家庭の事情で高校を中退し肉体労働者になりましたが、お金をためて高卒認定を取得。都内の大学(工学部)へ進学しました。<br />
          大学に通いながらベンチャー企業で3年間サービス運用、業務改善、採用活動とマルチに働いていました。<br />
          2018年4月に港区の大手通信系SIerに新卒入社し、ビジネス開発の仕事をしています。
        </p>
      </>
    );
  }
}

export default Bio;