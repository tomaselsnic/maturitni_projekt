import React from 'react';
import axios from 'axios';
import Navbar from "./../components/Navbar";
import FieldForm from "./../components/FieldForm";

class NewField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            field: {
                name: "",
                owner: "",
                price: 0,
                description: "",
                location: ""
            }
        }


        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit() {
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
                <FieldForm detail={this.state.field} handleInputChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </React.Fragment>
        )
    }
}

export default NewField;