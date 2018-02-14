import React from 'react';

import GridPager from './GridPager';

const SurveyGrid = ({ 
    rows, 
    currentPage,
    onChangePage,
 }) => {

    const contents = rows.map( row => (
        <tr key={row.id} >
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
                <tr className="table-pager">
                    <td colSpan="5">
                        <GridPager 
                            currentPage={currentPage}
                            onChangePage={onChangePage} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default SurveyGrid;