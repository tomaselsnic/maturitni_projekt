import React from 'react';
import axios from 'axios';


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
            const response = await axios.post("http://localhost:3000/fields/save", { 
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
            <div>
                <h1>Zadejte nové hřiště</h1>
                <form onSubmit={this.handleSubmit}>
                    <input  img="../button"name="name" onChange={this.handleChange} type="text" placeholder="field name" />
                    <input name="owner" onChange={this.handleChange} type="text" placeholder="field owner" />
                    <input name="price" onChange={this.handleChange} type="number" placeholder="field price" />
                    <textarea name="description" onChange={this.handleChange} placeholder="field description" />
                    <textarea name="location" onChange={this.handleChange} type="textarea" placeholder="field location" />
                    <input type="submit"  value="odeslat" />
                </form>
            </div>
        )
    }
}

export default NewField;