import React from 'react';


const FieldForm = (props) => {
    const { detail, handleInputChange, handleSubmit } = props;

    return (
        <React.Fragment>
            <div className="wrapper">
                    <div className="formInputsWrapper">
                    <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); handleSubmit() }}>
                            <label htmlFor="name">Jméno</label>
                            <input id="name" className="formInput" img="../button"name="name" value={detail.name} onChange={(e) => handleInputChange(e)} type="text" placeholder="field name" />
                            <label htmlFor="owner">Vlastník</label>
                            <input id="owner" className="formInput" name="owner" value={detail.owner} onChange={(e) => handleInputChange(e)} type="text" placeholder="field owner" />
                            <label htmlFor="price">Cena</label>
                            <input id="price" className="formInput" name="price" value={detail.price} onChange={(e) => handleInputChange(e)} type="number" placeholder="field price" />
                            <label htmlFor="description">Informace</label>
                            <textarea id="description" className="formInput" name="description" value={detail.description} onChange={(e) => handleInputChange(e)} placeholder="field description" />
                            <label htmlFor="location">Lokace</label>
                            <textarea id="location" className="formInput" name="location" value={detail.location} onChange={(e) => handleInputChange(e)} type="textarea" placeholder="field location" />
                            <input className="formInput submitButton" type="submit"  value="odeslat" />
                    </form>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default FieldForm;