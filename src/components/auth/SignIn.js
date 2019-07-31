import React, { Component } from 'react'

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
            <div className="container">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <img className="mb-4" src="" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Username</label>
                    <input onChange={this.handleChange} type="text" id="username" className="form-control" placeholder="Username" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input onChange={this.handleChange} type="password" id="password" className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block">Sign in</button>
                </form>
            </div>
        )
    }
}

export default SignIn
