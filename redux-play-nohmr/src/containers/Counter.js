import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    resetCounter, 
    incrementCounter,
} from '../actions';

const Counter = (props) => {

    return (<span>
        [ <button onClick={() => props.incrementCounter()} >+</button>
        - <button onClick={props.resetCounter} >clear</button> ] 
        {props.value}
    </span>);
}

const mapStateToProps = (state) => ({
    value: state.value
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators({
    resetCounter, 
    incrementCounter,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
