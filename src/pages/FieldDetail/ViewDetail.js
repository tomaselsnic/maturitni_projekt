import React from 'react';


const ViewDetail = (props) => {
    const { detail } = props;

    return(
        <React.Fragment>
            <div className="detail">
            <h1>{detail.name}</h1>
            <p><strong>Vlastník:</strong> {detail.owner}</p>
            <p><strong>Cena:</strong> {detail.price}</p>
            <p><strong>informace:</strong> {detail.description}</p>
            <p><strong>Adresa:</strong> {detail.location}</p>
            </div>
        </React.Fragment>
    )
}

export default ViewDetail;