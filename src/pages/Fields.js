import React, { Component } from 'react';
import axios from "axios";

class Fields extends Component {
    constructor(props){
        super(props);
        this.state={
            fields:[]
        }

    }
    async componentDidMount(){
       const {data}= await axios.get("http://localhost:3000/fields/All")
       console.log(data);
       this.setState({fields:data})
       console.log(this.state.fields);
    }
    render() {
        return(
            <div>
                {this.state.fields.map((field) =>{
                    return <div key={field.id}>
                        <h3>{field.name}</h3>
                        <p>{field.description}</p>
                        <p>Cena:{field.price}</p>
                        </div>
                })}


            </div>

        )
    }
}
export default Fields;