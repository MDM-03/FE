import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { Table, Button, FormFeedback } from "react-bootstrap";
import { UncontrolledPopover, PopoverHeader, PopoverBody, Input } from "reactstrap";

const url = "http://localhost:3000/";

class Customer extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            update: false,
            onClick: false,
            onUpdate: false,
            available: true,
            name: "",
            vaccine: "",
            desc: "",
            id: "",
            vaccine_id: "",
            appointment_id: "",
            status: "",
            diagnostic: "",
            appointment: [],
            vaccine_lst: []
        };
    }

    handleFetchOrder() {
        fetch(url + "appointment")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result.data)
                    this.setState({
                        isLoaded: true,
                        appointment: result.data,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                },
            );

        fetch(url + "vaccine/pack")
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        vaccine_lst: result.pack
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                },
            );
    }

    componentDidMount() {
        this.handleFetchOrder();
    }

    handleRowClick(app) {
        this.setState({
            onClick: true,
            onUpdate: false,
            name: app.Customer.Name,
            vaccine: app.Vaccine.Name,
            desc: app.Vaccine.Prevention,
            appointment_id: app._id,
            id: app.Customer._id,
            vaccine_id: app.Vaccine._id,
            diagnostic: app.Diagnostic,
            available: app.Status === "???? ch??ch" ? false : true,
            status: app.Status
        })
    }

    printCustomerDetail() {
        var vaccine = ["G??I V???C XIN INFANRIX (0-9 TH??NG) - G??I LINH ?????NG 1", "G??I V???C XIN INFANRIX (0-9 TH??NG) - G??I LINH ?????NG 2"]
        var status = ["???? ch??ch", "Ch??a ch??ch"]
        return (<div>
            <div className="mt-5 ml-5">
                <span className="h3">Th??ng tin chi ti???t</span>
                {this.state.available &&
                    <Button onClick={() => {
                        this.setState({ onUpdate: true })
                    }}>
                        C???p nh???t th??ng tin
                    </Button>
                }
            </div>

            <Table striped bordered hover className="mt-4 mb-5">
                {this.state.onUpdate && this.state.available ? <>
                    <tr>
                        <th>B???nh nh??n</th>
                        <td>{this.state.name}</td>
                    </tr>
                    <tr>
                        <th>T??nh tr???ng</th>
                        <td>
                            <Input type='select' id="status" name="status" onChange={(e) => this.setState({ status: e.target.value })}>
                                {status.map((sta) => sta === this.state.status ?
                                    <option selected>{sta}</option> :
                                    <option>{sta}</option>
                                )}
                            </Input>
                        </td>
                    </tr>
                    <tr>
                        <th>G??i vaccine</th>
                        <td>
                            <Input type='select' id="category" name="category" onChange={(e) => {
                                var app = this.state.appointment.find((val) => val.Vaccine.Name === e.target.value)
                                this.setState({
                                    desc: app.Vaccine.Prevention,
                                    vaccine_id: app.Vaccine._id
                                })
                            }}>
                                {this.state.vaccine_lst.map((vac) => vac.NAMEPACK === this.state.vaccine ?
                                    <option selected>{vac.NAMEPACK}</option> :
                                    <option>{vac.NAMEPACK}</option>
                                )}
                            </Input>
                        </td>
                    </tr>
                    <tr>
                        <th>M?? t???</th>
                        <td>{this.state.desc}</td>
                    </tr>
                    <tr>
                        <th>Chu???n ??o??n</th>
                        <td><Input type='text' placeholder={this.state.diagnostic} id="diagnostic" /></td>
                    </tr>
                    {this.state.available &&
                        <Button onClick={() => {
                            const body = {
                                DayInject: this.state.status === "???? ch??ch" ? new Date().toUTCString() : "",
                                Status: this.state.status,
                                Customer: this.state.id,
                                Doctor: "623d83d25ca2c6ef79782887",
                                Vaccine: this.state.vaccine_id,
                                Diagnostic: document.getElementById("diagnostic").value,
                                Pack: this.state.vaccine_id,
                            };
                            fetch(url + `appointment/${this.state.appointment_id}`, {
                                method: "PUT",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(body),
                            })
                                .then((res) => res.json())
                                .then((result) => {
                                    this.handleFetchOrder();
                                })
                                .catch((error) => {
                                    alert("Fail")
                                })

                            const body1 = {
                                Pack: this.state.vaccine_id
                            };

                            fetch(url + `order/appointment/${this.state.appointment_id}`, {
                                method: "PUT",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(body1),
                            })
                                .then((res) => res.json())
                                .then((result) => {
                                    this.handleFetchOrder();
                                    alert("Success")
                                })
                                .catch((error) => {
                                    alert("Fail")
                                })
                            this.setState({ onUpdate: false, onClick: false })
                        }}>
                            C???p nh???t
                        </Button>
                    }
                </> : <>
                    <tr>
                        <th>B???nh nh??n</th>
                        <td>{this.state.name}</td>
                    </tr>
                    <tr>
                        <th>T??nh tr???ng</th>
                        <td>{this.state.status}</td>
                    </tr>
                    <tr>
                        <th>G??i vaccine</th>
                        <td>{this.state.vaccine}</td>
                    </tr>
                    <tr>
                        <th>M?? t???</th>
                        <td>{this.state.desc}</td>
                    </tr>
                    <tr>
                        <th>Chu???n ??o??n</th>
                        <td>{this.state.diagnostic}</td>
                    </tr>
                </>}

            </Table>
        </div>
        )
    }

    render() {
        return (
            <div>
                <div className="mt-5 ml-5">
                    <span className="h3">B???nh nh??n</span>
                </div>

                <Table striped bordered hover className="mt-4 mb-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>T??n</th>
                            <th>Tr???ng th??i</th>
                            <th>Ng??y ????ng k??</th>
                            <th>Ng??y ti??m</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointment.map((app, index) => {
                            return (
                                <tr key={app._id} className="position-relative" onClick={() => this.handleRowClick(app)}>
                                    <td>{++index}</td>
                                    <td>{app.Customer.Name}</td>
                                    <td>{app.Status}</td>
                                    <td>{app.Date}</td>
                                    <td>{app.DayInject ? new Date(app.DayInject).toISOString() : ""}</td>
                                    <td>{app.Vaccine.Name}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                {this.state.onClick && this.printCustomerDetail()}
            </div>
        );
    }
}
export { Customer };