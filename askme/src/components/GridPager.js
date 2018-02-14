import React from 'react';

const GridPager = ({
    currentPage,
    onChangePage
}) => {
    return (<div>
        <button  onClick={() => onChangePage(currentPage - 1)}> &lt; </button>
        - {currentPage + 1} -
        <button onClick={() => onChangePage(currentPage + 1)}> &gt; </button>
    </div>)
};

export default GridPager;