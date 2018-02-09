import React from 'react';

class HelloBig extends React.Component {

    renderContent(){
        if(this.props.name){
            return "Hello " + this.props.name;
        }

        return "non so chi sei";
    }

    render(){

        return (<h1>
            {this.renderContent()}
            </h1>);
    }
}

export default HelloBig;