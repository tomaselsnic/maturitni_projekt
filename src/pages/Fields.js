import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Navbar from "./../components/Navbar";
import { withRouter } from "react-router-dom";

class Fields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: []
        }


        this.handleDelete = this.handleDelete.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);

    }
    async componentDidMount() {
        const { data } = await axios.get(`${process.env.REACT_APP_API_ROOT}/fields/All`)
        this.setState({ fields: data });
        console.log(this.state.fields);

    }

    handleRedirect(fieldId) {
        try {
            this.props.history.push(`/fields/detail/${fieldId}`);
        } catch (error) {
            console.log(error);
        }
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
        return (
            <div>
                <Navbar />
                <ReactTable
                    data={this.state.fields}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                            onClick: () => this.handleRedirect(rowInfo.original.id)                
                        }
                    }}

                    columns={[{
                        Header: "Hřiště",
                        columns: [{ Header: "ID", accessor: "id" },
                        { Header: "Správce", accessor: "owner" },
                        { Header: "Název", accessor: "name" },
                        { Header: "Cena za hodinu", accessor: "price" },
                        { Header: "Lokace", accessor: "location" },
                        {
                            id: 'edit',
                            accessor: '[row identifier to be passed to button]',
                            Cell: ({ original }) => (<button className="btn" onClick={() => this.handleDelete(original.id)}><i className="fa fa-close"></i>&#10005;</button>)
                        },
                        ]
                    }]}
                />
            </div>
        )

    }
}
export default withRouter(Fields);