import React from 'react';

class SampleFormContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            task: '',
            priority: false,
            validation: {
                task: null,                
            },
            tasks: [],
        }
    }

    setValue(field, value){
        let state = this.state;
        state[field] = value;
        state.validation[field] = null;
        this.setState(state);
    }

    saveTask(){
        const tasks = this.state.tasks;

        if(!this.state.task) {
            this.setState({ validation: { task: 'task required' } });
            return;
        }

        tasks.push({
            id: Math.random(), 
            task: this.state.task,
            priority: this.state.priority
        });
        this.setState({ tasks });
    }

    render(){
        console.log('state', this.state);

        return (<div>
            <div>
                <input type="text" value={this.state.task}
                    onChange={e => this.setValue('task', e.target.value)} 
                    placeholder="task title"
                />
                {this.state.validation.task ? 
                    (<b className="text-danger">{this.state.validation.task} </b>) : ''}

                <input type="checkbox" checked={this.state.priority} 
                    onChange={e => this.setValue('priority', e.target.checked)} 
                />
            </div>
            <button className="btn btn-primary"
                    onClick={e => this.saveTask()} >
                Save
            </button>
            <hr />
            <ul>
                {this.state.tasks.map(t => (
                <li key={t.id} >
                    {t.task} {t.priority ? '^^^' : ''} 
                </li>))}
            </ul>

            </div>);
    }
}

export default SampleFormContainer;