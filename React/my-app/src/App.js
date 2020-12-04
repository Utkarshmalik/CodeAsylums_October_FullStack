import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap';
import Component1 from './component1';
import UserComp from './userComponent';

/*

Lifecycle methods :

*/

class App extends Component {

  constructor(props)
  {
    console.log("In constructor");

    super(props);

    this.state={
      loading:true,
      users:[],
      language:"Hindi"
    }
  }

  componentDidMount()
  {
    //api call

    fetch('https://dummyapi.io/data/api/user',{
      headers:{
        "app-id":"5fca5a3236a334a6a8f40cc7"
      }
    })
    .then(response => response.json())
    .then(users=>{
      console.log(users);
      this.setState(
        {
          loading:false,
          users:users.data
        }
      )
    })

  }


  onToggleLanguage()
  {
     this.setState({
       language:(this.state.language==="English")?"Hindi":"English"   
     });
  }

  render()
  {

    console.log("render");

  return (
    <div  className="App">
      <header className="App-header">
      {
      //  <button onClick={ ()=>this.onToggleLanguage() } > Toggle Language </button>
      }
      <Component1/>
      <h1>
      {
        // (this.state.language==="English")?"How are you ?":"Aap kaise ho ?"   
      }


      {

         (this.state.loading===true)?
         (<Spinner style={{margin:"50px"}} size="lg" animation="border" role="status">
         <span className="sr-only">Loading...</span>
       </Spinner>):
       (this.state.users.map((user)=>
          {
            return(
             <UserComp  userDetails={user}  />
            )
          })
         )

      }
    

      
      </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
