import React, { Component } from 'react'
import { MDBDataTable, MDBBtn } from 'mdbreact';
import AddDatas from './AddDatas'
import EditDatas from './EditDatas'

class Datas extends Component {
    state = {
        data: null
    };

    handleGetData = () => {
        fetch("http://158.140.190.214:4242/api/location/detail")
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => alert(error));
    }

    componentDidMount() {
        this.handleGetData();
    }

    render() {
        let count = 1;
        let data = {
            columns: [
                {
                    label: 'No',
                    field: 'no',
                    sort: 'desc',
                    width: 100
                },
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
                },
                {
                    label: 'Action',
                    field: 'id',
                    sort: 'asc',
                    width: 80
                }
            ],
            rows: this.state.data ? (
                [...this.state.data].reverse().map(data => {
                    return {
                        no: count++,
                        name: data.name,
                        building: data.building,
                        city: data.city,
                        street: data.street,
                        long: data.coordinate.long,
                        lat: data.coordinate.lat,
                        id: <EditDatas id={data._id.$oid} onGetData={this.handleGetData} />
                    }
                })) : null
        };
        return (
            <div className="container" >
                <AddDatas onGetData={this.handleGetData} />
                <MDBDataTable
                    striped
                    bordered
                    hover
                    order={['no', 'desc']}
                    data={data}
                />
            </div>
        )
    }
}

export default Datas
