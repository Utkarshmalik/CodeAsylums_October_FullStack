import React, { Component } from 'react';
import Component1 from './component1';
import UserComp from './userComponent';


class App extends Component {

  constructor(props)
  {
    super(props);

    this.state={
      users:[{name:"Utkarsh",age:34},{name:"Rahuk",age:34},{name:"rohan",age:34},{name:"Rohini",age:34}],
      language:"Hindi"
    }
  }

  onToggleLanguage()
  {
     this.setState({
       language:(this.state.language==="English")?"Hindi":"English"   
     });
  }

  render()
  {
  return (
    <div  className="App">
      <header className="App-header">
      <button onClick={ ()=>this.onToggleLanguage() } > Toggle Language </button>
      <Component1/>
      <h1>
      {
        (this.state.language==="English")?"How are you ?":"Aap kaise ho ?"   
      }
      
      {
        this.state.users.map((user)=>
        {
          return(
           <UserComp  userDetails={user}  />
          )
        })

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
