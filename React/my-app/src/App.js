import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Link,BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Topics from './Topics';
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
      <Router>
      <ul>
      <li> <Link to='/'> Home </Link> </li>
      <li> <Link to='/topics'> Topics </Link> </li>
      </ul>
      <Route exact path='/'></Route>
      <Route path='/topics' component={Topics} /> 
    </Router>

    )
  }
}

export default App;
