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
    const {task,}=this.props;
    const {data,editMode,id}=task;
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",border:"3px solid red",margin:"5px 350px",padding:"5px"}} >
        <h1 style={{display:"inline-block"}}>{data}</h1>
        </div>
    );
    }
}

export default Task;