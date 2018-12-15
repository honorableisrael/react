import React, { Component } from 'react';
import Allroutes from './Component/routes/allroutes'
import Header from './Component/layout/header/header'
class App extends Component {
  render() {
    return (
      <>
      
      <Allroutes/>
      <Header/>
      </>
      );
  }
}

export default App;
