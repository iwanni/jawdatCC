import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export class SignIn extends Component {
    state = {
        username: '',
        password: '',
        isAuthenticate: false
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        if (this.state.username === "jawdat" && this.state.password === "jawdat") {
            //console.log(this.props)
            //{ () => this.props.onSignIn }
            this.setState({
                isAuthenticate: true
            })
            this.props.history.push({
                pathname: '/dashboard',
                state: { isAuthenticate: true, username: this.state.username }
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="">

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
