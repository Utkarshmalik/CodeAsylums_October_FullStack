import React, { Component } from 'react';

class Task extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            inputField:this.props.task.data
        }
    }

    onFieldChange(e)
    {
        this.setState({inputField:e.target.value});
    }

    render()
    {
    const {task,onEditModeChange,onDeleteTask,moveToCompleted}=this.props;
    const {data,editMode,id}=task;
    return (
        <div  onClick={()=>{moveToCompleted(task)}} style={{display:"flex",alignItems:"center",justifyContent:"space-between",border:"3px solid red",margin:"5px 350px",padding:"5px"}} >

        {  (editMode===true)?<input onClick={(e)=>{e.stopPropagation()}}  onChange={(e)=>this.onFieldChange(e)} style={{width:"700px"}} value={this.state.inputField} />:<h1 style={{display:"inline-block"}}>{data}</h1>}

        <div>
        <button onClick={(e)=>{onEditModeChange(task,this.state.inputField,e)}} style={{margin:"15px"}}> {(task.editMode)?"submit":"edit"} </button>
        <button onClick={(e)=>{onDeleteTask(task,e)}} >delete</button>
        </div>
        </div>
    );
    }
}

export default Task;