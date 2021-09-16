import React from 'react';
import Brands from './Brands';
import PriceFilter from './PriceFilter';

const LeftSideContent = () => {
    return (
        <div style={{width: "20%"}}>
            <Brands />
            {/* <PriceFilter /> */}
        </div>
    )
};

export default LeftSideContent;
