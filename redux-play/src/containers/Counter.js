import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    resetCounter, 
    incrementCounter,
    decrementCounter,
} from '../actions';

const Counter = (props) => {

    return (<span>
        [ <button onClick={() => props.incrementCounter()} >+</button>
        | <button onClick={() => props.decrementCounter()} > - </button>
        | <button onClick={props.resetCounter} >Clear</button> ] 
        {props.value}
        {props.message ? <span> {props.message}</span> : ''}
    </span>);
}

const mapStateToProps = (state) => ({
    value: state.value,
    message: state.counterMessage,
  });
  
  
  
const mapDispatchToProps = (dispatch) => bindActionCreators({
    resetCounter, 
    incrementCounter,
    decrementCounter,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
