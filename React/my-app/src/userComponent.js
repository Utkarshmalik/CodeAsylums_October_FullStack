import React from 'react';
import {Card,Button} from 'react-bootstrap';

function userComponent(props) {


    const {firstName,lastName,picture,email}=props.userDetails;

    return (
        <Card style={{ width:"18rem",color:"black",display:"inline-block",margin:"10px",border:"3px solid black" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>           {firstName + " " + lastName}
          </Card.Title>
          <Card.Text>
          {email}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>   
    );
}

export default userComponent;