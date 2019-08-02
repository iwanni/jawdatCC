import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import Datas from '../datas/Datas'

export class Dashboard extends Component {
    componentWillMount() {
        if (this.props.location.state == undefined || !this.props.location.state.isAuthenticate) {
            this.props.history.push("/")
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container"><h3>Welcome, {this.props.location.state.username}</h3></div>
                <Datas />
            </div>
        )
    }
}

export default Dashboard
