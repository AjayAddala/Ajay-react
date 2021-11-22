import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
class Customer extends React.Component {
    state = {
        customers: [],
    };
    componentDidMount() {
        axios.get("localhost:8080/hello")
            .then((res) => {
                console.log(res);

                this.setState({ customers: res.data });
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className="container">
                <Link to="/addCustomer" className="btn btn-info btn-large  float-end mb-1 mt-1">Add</Link>
                <table className="table table-striped table-dark  mx-auto mt-5 ">
                    <thead>
                        <tr>
                            <th>cid</th>
                            <th>name</th>
                            <th>mobileNo</th>
                            <th>wallet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map(custid => (<tr>
                            <td>{custid.cid}</td>
                            <td>{custid.name}</td>
                            <td>{custid.mobileNo}</td>
                            <td>{custid.wallet}</td>
                        </tr>))}


                    </tbody>
                </table>
            </div>
        );
    }
}

export default Customer;