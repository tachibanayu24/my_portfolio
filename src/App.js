import React, { Component } from 'react';
import './App.css';

// import Components
import Header from './components/header';
import Bio from './components/bio';
import Skill from './components/skill';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollButton from './components/scrollButton';

// import FontAwesome

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Bio />
          <Skill />
          <Work />
          <Contact />
        </main>
        <Footer />
        <ScrollButton />
    </>
    );
  }
}

export default App;
