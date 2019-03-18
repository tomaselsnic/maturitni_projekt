import React from 'react';


const ViewDetail = (props) => {
    const { detail } = props;

    return(
        <React.Fragment>
            <h1>{detail.name}</h1>
            <p>{detail.owner}</p>
            <p>{detail.description}</p>
            <p>{detail.price}</p>
            <p>{detail.location}</p>
        </React.Fragment>
    )
}

export default ViewDetail;