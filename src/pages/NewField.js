import React from 'react';
import axios from 'axios';
import Navbar from "./../components/Navbar";


class NewField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            field: {
                name: "",
                owner: "",
                price: null,
                description: "",
                location: ""
            }
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_ROOT}/fields/save`, { 
                name: this.state.field.name,
                owner: this.state.field.owner,
                price: this.state.field.price,
                description: this.state.field.description,
                location: this.state.field.location                        
            });

            this.props.history.push("/fields");

        } catch(err) {
            console.log(err);
            alert(err);
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState(previousState => ({
            field: {
                ...previousState.field,
                [name]: value
            }
        }));
    }

    render() {
        return(
            <React.Fragment>
                <Navbar/>
                <h1>Zadejte nové hřiště</h1>
                <div className="wrapper">
                    <div className="formInputsWrapper">
                    <form onSubmit={this.handleSubmit}>
                            <label htmlFor="name">Jméno</label>
                            <input id="name" className="formInput" img="../button"name="name" onChange={this.handleChange} type="text" placeholder="field name" />
                            <label htmlFor="owner">Vlastník</label>
                            <input id="owner" className="formInput" name="owner" onChange={this.handleChange} type="text" placeholder="field owner" />
                            <label htmlFor="price">Cena</label>
                            <input id="price" className="formInput" name="price" onChange={this.handleChange} type="number" placeholder="field price" />
                            <label htmlFor="description">Informace</label>
                            <textarea id="description" className="formInput" name="description" onChange={this.handleChange} placeholder="field description" />
                            <label htmlFor="location">Lokace</label>
                            <textarea id="location" className="formInput" name="location" onChange={this.handleChange} type="textarea" placeholder="field location" />
                            <input className="formInput submitButton" type="submit"  value="odeslat" />
                    </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewField;