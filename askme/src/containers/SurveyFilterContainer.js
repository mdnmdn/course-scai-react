import React from 'react';

class SurveyFilterContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            search: '',
            name: '', 
            company: '',
        };
    }

    filter(e){
        if (this.props.onFilter){
            this.props.onFilter({
                search: this.state.search,
            });
        }
    }

    onInputChange(input, e){
        const newState = {};
        newState[input] = e.target.value;
        this.setState(newState);
    }

    render(){
        
        console.log('state', this.state);

        return (<div className="panel panel-primary">
            <div className="panel-body">
                <input type="text"  className="form-control" 
                    placeholder="text search"
                    value={this.state.search}
                    onChange={e => this.setState({search: e.target.value})}
                />
                {/*
                <input type="text"  className="form-control" 
                    value={this.state.search}
                    onChange={this.onInputChange.bind(this, 'search')}
                />
                <input type="text"  className="form-control" 
                    value={this.state.name}
                    onChange={e => this.onInputChange('name',e)}
                />
                <input type="text"  className="form-control" 
                    value={this.state.company}
                    onChange={e => this.onInputChange('company',e)}
                />*/}
            </div>
            <div className="panel-footer">
                <button onClick={e => this.filter(e)} 
                        className="btn btn-primary">
                    Search
                </button> 
                <button onClick={e => this.clearFilter(e)} 
                        className="btn btn-warn">
                    Clear filter
                </button>                
            </div>
        </div>);
    }
}

export default SurveyFilterContainer;