import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from '../actions/tabs';

const TabLink = (props) => (
    <a onClick={() => props.selectTab(props.group, props.id)}>
        {props.children}
    </a>
);



const mapStateToProps = (state) => ({
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators({
    selectTab,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(TabLink);
