import React from 'react';

function userComponent(props) {

    const {userDetails}=props;

    return (
        <div>
        Name:{userDetails.name}
        Age:{userDetails.age}
        </div>
    );
}

export default userComponent;