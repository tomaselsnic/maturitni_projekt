import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Navbar from "./../components/Navbar";

class Fields extends Component {
    constructor(props){
        super(props);
        this.state={
            fields:[]
        }


        this.handleDelete = this.handleDelete.bind(this);

    }
    async componentDidMount(){
        const { data }= await axios.get(`${process.env.REACT_APP_API_ROOT}/fields/All`)
        this.setState({ fields: data });
        console.log(this.state.fields);
      
    }

    async handleDelete(fieldId) {
        try {
            const oldFields = this.state.fields;
            const toRemove = oldFields.find(field => field.id === fieldId);
            const indexToRemove = oldFields.indexOf(toRemove);
            oldFields.splice(indexToRemove, 1);

            this.setState({ fields: oldFields });

            const response = await axios.delete(`${process.env.REACT_APP_API_ROOT}/fields/delete/${fieldId}`);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert(error);
        }


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
            
            <div>
                <Navbar/>
            <ReactTable 
                data={this.state.fields}
                columns={[{ Header: "Hřiště", 
                columns: [  { Header:"ID",accessor:"id" },
                            { Header: "Správce", accessor: "owner" }, 
                            { Header: "Název", accessor: "name" },
                            { Header: "Cena za hodinu", accessor: "price" },
                            { Header: "Lokace", accessor: "location" },
                            { Header: "Informace", accessor: "description" }, 
                            {
                                id: 'edit',
                                accessor: '[row identifier to be passed to button]',
                                Cell: ({original}) => (<button class="btn" onClick={() => this.handleDelete(original.id)}><i class="fa fa-close"></i>&#10005;</button>)
                              },
                        ] 
                    }]}
            />
            </div>
        )
        
    }
}
export default Fields;