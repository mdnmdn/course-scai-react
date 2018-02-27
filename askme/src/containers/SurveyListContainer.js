import React from 'react';

import api from '../libs/api';

import SurveyGrid from '../components/SurveyGrid';
import SurveyFilterContainer from './SurveyFilterContainer';

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

    filterData(filter){
        this.loadData(0, filter);
    }

    async loadData(page, filter){

        let search = this.state.search;
        if (filter){
            search = filter.search;
        }

        this.setState({             
            loading: true,   
            page,
            search,
        });

        const pageSize = 10;
        const result = await api.listSurveys({
            search: search || '',
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
            <SurveyFilterContainer 
                
                onFilter={filter => this.filterData(filter)}
                />
            {contents}
        </div>);

    }

}

export default SurveyListContainer;