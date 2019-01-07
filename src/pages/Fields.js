import React, { Component } from 'react';
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

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
            // <div>
            //     {this.state.fields.map((field) =>{
            //         return <div key={field.id}>
            //             <h2>Správce:{field.owner}</h2>
            //             <p>Název hřiště:{field.name}</p>
            //             <p>Lokace:{field.location}</p>
            //             <p>Dodatečné informace:{field.description}</p>
            //             <p>Cena:{field.price} kč/h</p>
            //             </div>
                        
            //     })}

            // </div>

            <ReactTable
                data={this.state.fields}
                columns={[{ Header: "Hřiště", 
                columns: [ {Header:"ID",accessor:"id"},{ Header: "Správce", accessor: "owner" }, { Header: "Name", accessor:"name"},{Header:"Cena za hodinu",accessor:"price"},{Header:"Lokace",accesor:"location"},{Header:"informace",accesor:"description"} ] }]}
            />
            
        )
    }
}
export default Fields;