import React, { Component } from 'react';
import ContentTitle from './contentTitle';

import Grid from '@material-ui/core/Grid';

const Bio = () => {
  return(
    <>
      { ContentTitle('Bio', 'flushed', '#C71585')}
      <div className="sub-content-body">
        <Grid container>
          <Grid item lg={3} md={3} xs={12}>
            <img className="bio-img" src={require('../img/icons/profile.png')} alt="profile" />
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
          エンジニア立花優斗(<a href="https://twitter.com/tachibanayu24_" target="_blank" rel="noopener noreferrer">@tachibanayu24_</a>)の活動記録です。
        </p>
        <p>
          駆け出しエンジニアとして日々勉強しています。<br />
          メインで書くのはRubyやReact.jsです。
        </p>
      </>
    );
  }
}

export default Bio;
