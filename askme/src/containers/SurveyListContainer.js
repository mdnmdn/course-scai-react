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
        await this.loadData(0);
    }

    async loadData(page){
        this.setState({ 
            loading: true,                        
        });

        const pageSize = 10;
        const result = await api.listSurveys({
            first: page * pageSize,
            count: pageSize,
        });

        console.log('api: ', result);

        this.setState({ 
            loading: false,            
            rows: result,
        });
    }

    changePage(newPage) {
        this.setState({ page: newPage });
        this.loadData(newPage);
    }

    render() {

        let contents = 'loading...';

        if (!this.state.loading){
             contents = (
                <SurveyGrid 
                    rows={this.state.rows} 
                    currentPage={this.state.page}
                    onChangePage={newPage => this.changePage(newPage)} />
                );
        }

        return (<div>
            {contents}
        </div>);

    }

}

export default SurveyListContainer;