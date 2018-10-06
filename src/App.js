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

import FaceIcon from '@material-ui/icons/FaceTwoTone';
import CodeIcon from '@material-ui/icons/CodeTwoTone';
import BrushIcon from '@material-ui/icons/BrushTwoTone';
import CameraIcon from '@material-ui/icons/PhotoCameraTwoTone';
import WhatshotIcon from '@material-ui/icons/WhatshotTwoTone';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ fontFamily: "Courier New", fontWeight: 900}} noWrap>
            <span style={{color: '#1E90FF' }}>/Yuto_Tachibana</span> <span style={{ color: '#FF6347' }}>❯</span><span style={{ color: '#A9A9A9'}}>❯❯ Portfolio_</span>
          </Typography>
        </Toolbar>
        </AppBar>

        <main>
          <div className="sub-content bio">
            <div className="content-title">
              <FaceIcon style={{height: 35, width: 35, marginRight: 10,}} />
              <span>bio</span>
            </div>
            <Divider inset />
            <div className="sub-content-body">
              <p>都内在住のテック好きな男子です。</p>
              <p>家庭の事情で高校を1年で中退して肉体労働者になりましたが、お金をためて高卒認定を取得し、都内の大学(工学部)へ進学。<br />
                大学に通いながら新宿のベンチャー企業でサービス運用、業務改善、採用活動、ビジネス開発とマルチに働いていました。</p>
              <p>2018年4月に港区の大手通信系SIerに新卒入社し、そこではビジネス企画、研究開発系のお仕事をしています。<br />
                業務ではあまりコードを書く機会を作れないので、プライベートでよくコーディングしています。</p>
            </div>
          </div>
          <div className="sub-content skill">
            <div className="content-title">
              <CodeIcon style={{height: 35, width: 35, marginRight: 10,}} />
              <span>skills</span>
            </div>
            <Divider inset />
          </div>
          <div className="sub-content work">
            <div className="content-title">
              <BrushIcon style={{height: 35, width: 35, marginRight: 10,}} />
              <span>works/activities</span>
              <Divider inset />
            </div>
          </div>
          <div className="sub-content photo">
            <div className="content-title">
              <CameraIcon style={{height: 35, width: 35, marginRight: 10,}} />
              <span>photos</span>
              <Divider inset />
            </div>
          </div>
          <div className="sub-content sns">
            <div className="content-title">
              <WhatshotIcon style={{height: 35, width: 35, marginRight: 10,}} />
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
