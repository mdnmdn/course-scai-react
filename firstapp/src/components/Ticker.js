import React from 'react';

class Ticker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            running: true,
        };
    }

    componentDidMount(){
        this.prepareInterval();
    }

    prepareInterval(){
        this.timer = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
            });
        }, 1000);
    }

    startTicker(){

        if(this.state.running) return;

        this.prepareInterval();

        this.setState({
            running: true,
        });
    }

    stopTicker(){

        clearInterval(this.timer);

        this.setState({
            running: false,
        });
    }

    render(){
        return (
        <div>
            <button onClick={() => this.stopTicker()}>stop</button>
            <button onClick={() => this.startTicker()}>start</button>
            <span>counter: {this.state.counter}</span>
        </div>
        );
    }
}

export default Ticker;

