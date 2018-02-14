import React from 'react';

import api from '../libs/api';

import SurveyGrid from '../components/SurveyGrid';

class SurveyListContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            rows: [],
            page: 0,
        };
    }

    async componentDidMount(){
        const result = await api.listSurveys();
        console.log('api: ', result);
        this.setState({ 
            loading: false,
            rows: result,
        });
    }

    render() {

        let contents = 'loading...';
        
        if (!this.state.loading){
             contents = (<SurveyGrid rows={this.state.rows} />);
        }

        return (<div>
            {contents}
        </div>);

    }

}

export default SurveyListContainer;