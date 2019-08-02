import React, { Component } from 'react'
import { MDBDataTable, MDBBtn } from 'mdbreact';
import AddDatas from './AddDatas'
import EditDatas from './EditDatas'
import { connect } from "react-redux";
import { getData } from '../../store/actions/dataActions'

class Datas extends Component {
    // state = {
    //     data: null
    // };

    handleGetData = () => {
        this.props.getData();
        // fetch("http://158.140.190.214:4242/api/location/detail")
        //     .then(response => response.json())
        //     .then(data => this.setState({ data }))
        //     .catch(error => alert(error));
    }

    componentDidMount() {
        this.handleGetData();
    }

    render() {
        console.log(this.props, "prop")

        //const { data } = this.props;
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
            rows: this.props.data ? (
                [...this.props.data].reverse().map(data => {
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

const mapStateToProps = state => {
    return {
        data: state.data.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Datas)
