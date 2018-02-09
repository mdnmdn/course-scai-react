import React from 'react';

const Border = (props) => {

    if(props.visible === false){
        return null;
    }

    return (<div className={"border " + props.borderCss} >
        {props.children}
    </div>);
};

export default Border;