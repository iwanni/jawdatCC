import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="">
                {/* <form className="form-signin" onSubmit={this.handleSubmit}>
                    <img className="mb-4" src="" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Username</label>
                    <input onChange={this.handleChange} type="text" id="username" className="form-control" placeholder="Username" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block">Sign in</button>
                </form> */}

                <MDBContainer className="mt-3">
                    <MDBRow>
                        <MDBCol md="12">
                            <form onSubmit={this.handleSubmit}>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <MDBInput
                                        id="username"
                                        label="Type your username"
                                        icon="envelope"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.handleChange}
                                    />
                                    <MDBInput
                                        id="password"
                                        label="Type your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        onChange={this.handleChange}
                                        validate
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn
                                        type="submit">Sign In</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default SignIn
