import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import Custom Components
import Header from './components/header';
import Bio from './components/bio';
import Skill from './components/skill';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollButton from './components/scrollButton';
// import Components
import {Animated} from "react-animated-css";

ReactDOM.render(
  <>
    <Header />
    <Animated className="body-animation" animationIn="fadeIn" isVisible={true}>
      <main>
        <Bio />
        <Skill />
        <Work />
        <Contact />
      </main>
        <Footer />
        <ScrollButton />
      </Animated>
    </>,
  document.getElementById('root')
);
serviceWorker.unregister();
