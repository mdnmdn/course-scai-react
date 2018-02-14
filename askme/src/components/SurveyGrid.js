import React from 'react';

const SurveyGrid = ({ rows }) => {

    const contents = rows.map( row => (
        <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.active ? 'v' : ''}</td>
            <td>{row.numberOfQuestions}</td>
            <td></td>
        </tr>));

    return (
        <table className="table table-bordered table-condensed table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Active</th>
                <th>Questions</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {contents}
            </tbody>
        </table>
    );
};

export default SurveyGrid;