import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class EditDatas extends Component {
    state = {
        modal: false,
        data: {
            name: null,
            building: null,
            city: null,
            street: null,
            longitude: null,
            latitude: null
        }
    }

    validateForm = () => {
        return this.state.data.name !== null &&
            this.state.data.building !== null &&
            this.state.data.city !== null &&
            this.state.data.street !== null &&
            this.state.data.langitude !== null &&
            this.state.data.longitude !== null;
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.className += " was-validated";

        console.log(this.validateForm())
        if (this.validateForm()) {
            fetch("http://158.140.190.214:4242/api/location/edit/" + this.props.id, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": this.state.data.name,
                    "building": this.state.data.building,
                    "city": this.state.data.city,
                    "street": this.state.data.street,
                    "coordinate": {
                        "long": this.state.data.longitude,
                        "lat": this.state.data.latitude
                    }
                })
            })
                .then(this.toggle)
                .then(this.props.onGetData)
                .catch(error => alert(error));
        }
    };

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.id]: e.target.value
            }
        })
    }

    render() {
        //console.log(this.state.data.name);
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle} size="sm" color="yellow"><i className="fas fa-plus"></i> Edit</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Edit Data</MDBModalHeader>
                    <form onSubmit={this.handleSubmit} className="mx-3 grey-text" noValidate>
                        <MDBModalBody>
                            <MDBInput id="name" onChange={this.handleChange} label="Your name" icon="id-card" group type="text" validate error="wrong" success="right" required><div className="invalid-tooltip">Field required</div></MDBInput>
                            <MDBInput id="building" onChange={this.handleChange} label="Your building" icon="building" group type="text" validate error="wrong" success="right" required><div className="invalid-tooltip">Field required</div></MDBInput>
                            <MDBInput id="city" onChange={this.handleChange} label="Your city" icon="city" group type="text" validate error="wrong" success="right" required><div className="invalid-tooltip">Field required</div></MDBInput>
                            <MDBInput id="street" onChange={this.handleChange} label="Your street" icon="map-signs" group type="text" validate error="wrong" success="right" required><div className="invalid-tooltip">Field required</div></MDBInput>
                            <MDBInput id="longitude" onChange={this.handleChange} label="Longitude" icon="map-marker-alt" group type="text" validate error="wrong" success="right" required><div className="invalid-tooltip">Field required</div></MDBInput>
                            <MDBInput id="latitude" onChange={this.handleChange} label="Latitude" icon="map-marker-alt" group type="text" validate error="wrong" success="right" required><div className="invalid-tooltip">Field required</div></MDBInput>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                            <MDBBtn type="submit" color="primary">Submit</MDBBtn>
                        </MDBModalFooter>
                    </form>
                </MDBModal>
            </MDBContainer >
        );
    }
}

export default EditDatas;