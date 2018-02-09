import React from 'react';

const NameList = (props) => {

    const rows = props.data.map( item => {
        return <li key={item.id}>{item.id}. {item.name}</li>;
    });

    
    console.log(props.data);
    console.log(rows);

    return (
        <ul>
            {rows}
        </ul>
    );

};

export default NameList;