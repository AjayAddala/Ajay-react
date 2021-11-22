import React, { Component } from 'react';

class CustomerRegisterationForm extends React.Component {
    render() {
        return <div className="w-50 mx-auto mt-auto ">
            <h1 class="display-6 text-center fw-bold mt-3">Register</h1>
            <form className="w-50 mx-auto mt-5 border border-dark border-3 rounded-end p-4">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">First Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
                <div className="mb-3  ">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 ">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Save Details</label>
                </div>
                <button type="submit " className="btn btn-primary">Submit</button>
            </form>
        </div>;
    }
}

export default CustomerRegisterationForm;