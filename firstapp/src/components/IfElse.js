import React from 'react';

const IfElse = (props) => {
    
    if (props.condition){
        return props.then();
    }

    return props.else();
}

export default IfElse;