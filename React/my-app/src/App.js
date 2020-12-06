import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Spinner,FormControl,InputGroup} from 'react-bootstrap';
import Component1 from './component1';
import UserComp from './userComponent';

/*

React is for making single page Applcaitons (SPA's)

*/

class App extends Component {


  constructor(props)
  {

    console.log("In constructor");

    super(props);

    this.state={
      randomState:null,
      loading:true,
      users:[],
      allUsers:[],
      inputText:""
    }
  }

  static getDerivedStateFromProps(props,state)
  {
    console.log("get derived state from props")

    return {
      randomState:props.someRandomValue
    }
  }

  shouldComponentUpdate(nextProps,nextState)
  {
    return true;
  }

  componentDidUpdate(prevProps,prevState,snapshot)
  {
    console.log(prevState);

    console.log("compo did update");
  }

  

  componentDidMount()
  {

    // this.interval=setInterval(() => {
      
    // }, (interval));


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
          users:users.data,
          allUsers:users.data
        }
      )
    })

  }

  renderLoaderOrUser()
  {

    return(
      (this.state.loading===true)?
      (<Spinner style={{margin:"50px"}} size="lg" animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>):
    (this.state.users.map((user)=>
       {
         return(
          <UserComp key={user.id}  userDetails={user}  />
         )
       })
      )
    )
  }

  onInputChange(e)
  {
    const searchValue=e.target.value.toLowerCase();

    const updatedUsers=this.state.allUsers.filter((user)=>
    {
      const fullName=user.firstName.toLowerCase()+" "+user.lastName.toLowerCase();

      return fullName.startsWith(searchValue);
    });

    this.setState({users:updatedUsers});
  }

  render()
  {
  return (
    <div  className="App">
    <div>
    
    <label>Search Employee: </label>
    <input type="text" onChange={(e)=>this.onInputChange(e)}   / >
    </div>

  {this.renderLoaderOrUser()}
    </div>
  );
  }
}

export default App;
