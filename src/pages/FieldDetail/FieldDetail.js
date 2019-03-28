import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ViewDetail from './ViewDetail'
import Navbar from "../../components/Navbar";
import FieldForm from "../../components/FieldForm";

class FieldDetail extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            detail: {
                name: "",
                description: "",
                price: 119,
                location: "",
                owner:"",

            },
            isEditing: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_ROOT}/fields/detail/${this.props.match.params.id}`);
            this.setState({ detail: { ...data } })
        } catch (error) {
            console.log(error);
        }
        console.log(this.props.match.params.id);
    }

    handleInputChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState(previousState => ({
          detail: {
              ...previousState.detail,
              [name]: value
          }
        }));
    }

    async handleSubmit() {
        try {
            const data = await axios.post(`${process.env.REACT_APP_API_ROOT}/fields/edit/${this.props.match.params.id}`, { ...this.state.detail });
            alert("úspěšně upraveno!")
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            
            <React.Fragment>
                <Navbar />
                {this.state.isEditing ?
                    <FieldForm detail={this.state.detail} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
                    : 
                    <ViewDetail detail={this.state.detail} />
                }
                <input type="button"  className="submitButton2" onClick={() => this.setState({ isEditing: !this.state.isEditing })} value={this.state.isEditing ? "zobrazit" : "editovat"} />
            </React.Fragment>
        );

    }

};
export default withRouter(FieldDetail);