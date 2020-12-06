import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap';

class userComponent extends Component {

  constructor(props)
  {
    super(props);
  }

  // const firstName=props.userDetails.firstName;
  // const lastName=props.userDetails.lastName;


  componentWillUnmount()
  {
    console.log("Component is unmounting");
  }


  render()
  {
    const {firstName,lastName,picture,email}=this.props.userDetails;
    return (
        <Card style={{ width:"18rem",color:"black",display:"inline-block",margin:"10px",border:"3px solid black" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>           {firstName + " " + lastName}
          </Card.Title>
          <Card.Text style={{fontSize:"16px"}}>
          {email}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>   
    );
  }
}

export default userComponent;