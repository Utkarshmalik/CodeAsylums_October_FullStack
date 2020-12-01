import './App.css';
import Component from './component1';
import UserComp from './userComponent';

/*
    state and props
*/


/*
state is a react object that holds a piece of data 
*/


class App extends Component {

  constructor()
  {
    super();

    this.state={
      users:[{name:"Utkarsh",age:34},{name:"Rahuk",age:34},{name:"rohan",age:34},{name:"Rohini",age:34}],
      language:"Hindi"
    }
  }

   x="twgw";

  render()
  {
  return (
    <div  className="App">
      <header className="App-header">
      <Component/>
      <h1>
      {
        (this.state.language==="English")?"How are you ?":"Aap kaise ho ?"   
      }

      {

        this.state.users.map((user)=>
        {
          return(
           // UserComp(user);
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
