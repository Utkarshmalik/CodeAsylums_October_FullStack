import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Spinner,FormControl,InputGroup} from 'react-bootstrap';
import Component1 from './component1';
import UserComp from './userComponent';
import { v4 as uuidv4 } from 'uuid';
import TaskComponent from './inCompleteTaskComponent';
import CompletedComponent from './completedTaskComponent';
/*

React is for making single page Applcaitons (SPA's)

*/

class App extends Component {


  constructor(props)
  {

    console.log("In constructor");

    super(props);

    this.state={
      inputField:"",
      inCompleteTasks:[],
      CompletedTasks:[]
    }
  }

  onEditModeChange({id,editMode},updatedValue,e)
  {
    console.log(e);
    e.stopPropagation();

    console.log("dddfd");

    if(editMode)
    {
      var updatedTasks=this.state.inCompleteTasks.map((task)=>
      {
        if(task.id===id)
        {
          const obj= {...task,editMode:false,data:updatedValue};
          return obj;
        }
        else
        {
          return task;
        }
      });

      this.setState({inCompleteTasks:updatedTasks})
    }

    else
    {
    
    var updatedTasks=this.state.inCompleteTasks.map((task)=>
    {
      if(task.id===id)
      {
        const obj= {...task,editMode:true};
        return obj;
      }
      else
      {
        return task;
      }
    });

    console.log(updatedTasks);

    this.setState({inCompleteTasks:updatedTasks})
  }
}

  onInputChange(e)
  {
    this.setState({inputField:e.target.value});
  }

  onAddTask()
  {
    const data=this.state.inputField;
    const task={id:uuidv4(),data,editMode:false};


    this.setState({
      inputField:"",
      inCompleteTasks:[...this.state.inCompleteTasks,task]
    })
  }

  onDeleteTask({id},e)
  {
    if(e)
    e.stopPropagation();

    // console.log(this.state.inCompleteTasks);

    var updatedTasks=this.state.inCompleteTasks.filter((task)=>
    {
      return task.id!==id;
    });

    // console.log(updatedTasks);

    this.setState({inCompleteTasks:updatedTasks}) 
  }

  moveToCompleted(task)
  {
    this.onDeleteTask(task);
    this.setState({CompletedTasks:[...this.state.CompletedTasks,task]});
  }

  displayIncompleteTasks()
  {
    console.log(this.state.inCompleteTasks);

    return this.state.inCompleteTasks.map((task)=>
    {
       return <TaskComponent moveToCompleted={this.moveToCompleted.bind(this)} onDeleteTask={this.onDeleteTask.bind(this)}  onEditModeChange={this.onEditModeChange.bind(this)}  key={task.id} task={task} />
    });
  }

  displayCompletedTasks()
  {
    console.log(this.state.inCompleteTasks);

    return this.state.CompletedTasks.map((task)=>
    {
       return <CompletedComponent key={task.id} task={task} />
    });
  }


  render()
  {
  return (
    <div  className="App">
    <h1>My TodoList App</h1>
    <br/>
    <div>
    <input type="text" value={this.state.inputField} onChange={(e)=>this.onInputChange(e)} ></input>
    <button onClick={()=>{this.onAddTask()}} >Add Task</button>
    </div>
    <br/>
    <div>
    <h2>Todo Tasks</h2>
    {this.displayIncompleteTasks()}
    <br/>
    </div>
    <hr/>
    <div>
    <h2>Completed Tasks</h2>
    {this.displayCompletedTasks()}
    <br/>
    </div>

    
    </div>
  );
  }
}

export default App;
