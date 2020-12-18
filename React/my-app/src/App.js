import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Link,BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Topics from './Topics';
import Information from './Contact';
import LanguageContextProvider from './Contexts/LanguageContext';
import Navbar from './Navbar';
/*
React is for making single page Applcaitons (SPA's)
*/

class App extends Component {


  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <LanguageContextProvider>
      <Navbar/>
      <div>
      <h1> Context API's in action </h1>
      </div>
      <Information/>
      </LanguageContextProvider>
    )
  }
}

export default App;
