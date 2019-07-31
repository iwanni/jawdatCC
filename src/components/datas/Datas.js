import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

class Datas extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        //fetch("158.140.190.214:4242/api/location/detail").then(response => response.json()).;
        fetch("http://158.140.190.214:4242/api/location/detail")
            .then(response => response.json())
            .then(data => this.setState({ data }));

    }
    render() {
        console.log(this.state.data);
        let data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Building',
                    field: 'building',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'City',
                    field: 'city',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Street',
                    field: 'street',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Long',
                    field: 'long',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Lat',
                    field: 'lat',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: this.state.data ? (
                this.state.data.map(data => {
                    return {
                        name: data.name,
                        building: data.building,
                        city: data.city,
                        street: data.street,
                        long: data.coordinate.long,
                        lat: data.coordinate.lat
                    }
                })) : null
        };
        return (
            <div className="container">
                <MDBDataTable
                    striped
                    bordered
                    hover
                    data={data}
                />
            </div>
        )
    }
}

export default Datas
