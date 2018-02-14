import React from 'react';

import api from '../libs/api';

import SurveyGrid from '../components/SurveyGrid';

class SurveyListContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    async componentDidMount(){
        const result = await api.listSurveys();
        console.log('api: ', result);
    }

    render() {

        return (<div>
            <SurveyGrid />
            
        </div>);

    }

}

export default SurveyListContainer;