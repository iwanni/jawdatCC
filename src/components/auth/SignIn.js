import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { connect } from "react-redux";
import { signIn } from '../../store/actions/authActions'

export class SignIn extends Component {
    state = {
        username: null,
        password: null,
        isAuthenticate: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.props.signIn(this.state);

        if (this.state.username === "jawdat" && this.state.password === "jawdat") {
            // this.setState({
            //     isAuthenticate: true
            // })
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

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (cred) => dispatch(signIn(cred))
    }
}

export default connect(null, mapDispatchToProps)(SignIn)