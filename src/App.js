import React from 'react';
import { Component } from 'react';
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


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ fontFamily: "Courier New", fontWeight: 900}} noWrap>
            Yuto Tachibana's Portfolio
          </Typography>
        </Toolbar>
        </AppBar>

        <main>
          <div className="sub-content bio">
            <span className="content-title">bio</span>
            <Divider inset />
            <div className="sub-content-body">
              <p>
                都内在住のテック好きな男子です。<br />
                家庭の事情で高校を1年で中退して肉体労働者になりましたが、お金をためて高卒認定を取得し、都内の大学の工学部へ進学。<br />
                大学に通いながら新宿のベンチャー企業で事務、業務改善、採用活動、ビジネス開発とマルチに働いていました。<br />
                2018年4月に港区の大手通信系SIerに新卒入社し、そこではビジネス企画、研究開発系のお仕事をしています。
              </p>
            </div>
          </div>
          <div className="sub-content skill">
            <span className="content-title">skill</span>
          </div>
          <div className="sub-content work">
            <span className="content-title">works</span>
          </div>
          <div className="sub-content photo">
            <span className="content-title">photo</span>
          </div>
          <div className="sub-content sns">
            <span className="content-title">sns</span>
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
