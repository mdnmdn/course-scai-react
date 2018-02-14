import React from 'react';

const SurveyGrid = (props) => {

    return (
        <table className="table table-bordered table-condensed table-striped table-hover">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Active</th>
                <th>Questions</th>
                <th></th>
            </tr>

        </table>
    );
};

export default SurveyGrid;