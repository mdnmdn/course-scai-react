import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const TabContainer = (props) => {
    if (props.tabs[props.group] === props.id){
        return props.children;
    }
    return null;
};


const mapStateToProps = (state) => ({
    tabs: state.tabs,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({  
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);