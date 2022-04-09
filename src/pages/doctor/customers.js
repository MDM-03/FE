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
        };
        this.handlePayment = this.handlePayment.bind(this);
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
    }

    componentDidMount() {
        this.handleFetchOrder();
    }

    handlePayment(id) {
        const body = {
            Status: "Đã thanh toán",
        };
        fetch(url + `order/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    this.handleFetchOrder();
                    this.setState({
                        isLoaded: true,
                        update: false,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        update: false,
                        error,
                    });
                },
            );
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
            available: app.Status === "Đã chích" ? false : true,
            status: app.Status
        })
    }

    printCustomerDetail() {
        var vaccine = ["GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 1", "GÓI VẮC XIN INFANRIX (0-9 THÁNG) - GÓI LINH ĐỘNG 2"]
        var status = ["Đã chích", "Chưa chích"]
        return (<div>
            <div className="mt-5 ml-5">
                <span className="h3">Thông tin chi tiết</span>
                {this.state.available &&
                    <Button onClick={() => {
                        this.setState({ onUpdate: true })
                    }}>
                        Cập nhật thông tin
                    </Button>
                }
            </div>

            <Table striped bordered hover className="mt-4 mb-5">
                {this.state.onUpdate && this.state.available ? <>
                    <tr>
                        <th>Bệnh nhân</th>
                        <td>{this.state.name}</td>
                    </tr>
                    <tr>
                        <th>Tình trạng</th>
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
                        <th>Gói vaccine</th>
                        <td>
                            <Input type='select' id="category" name="category" onChange={(e) => {
                                var app = this.state.appointment.find((val) => val.Vaccine.Name === e.target.value)
                                this.setState({
                                    desc: app.Vaccine.Prevention,
                                    vaccine_id: app.Vaccine._id
                                })
                            }}>
                                {vaccine.map((vac) => vac === this.state.vaccine ?
                                    <option selected>{vac}</option> :
                                    <option>{vac}</option>
                                )}
                            </Input>
                        </td>
                    </tr>
                    <tr>
                        <th>Mô tả</th>
                        <td>{this.state.desc}</td>
                    </tr>
                    <tr>
                        <th>Chuẩn đoán</th>
                        <td><Input type='text' placeholder={this.state.diagnostic} id="diagnostic"/></td>
                    </tr>
                    {this.state.available &&
                        <Button onClick={() => {
                            const body = {
                                DayInject: this.state.status === "Đã chích" ? new Date().toUTCString() : "",
                                Status: this.state.status,
                                Customer: this.state.id,
                                Doctor: "623d83d25ca2c6ef79782887",
                                Vaccine: this.state.vaccine_id,
                                Diagnostic: document.getElementById("diagnostic").value
                            };
                            fetch(url + `appointment/${this.state.appointment_id}`, {
                                method: "PUT",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(body),
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
                            Cập nhật
                        </Button>
                    }
                </> : <>
                    <tr>
                        <th>Bệnh nhân</th>
                        <td>{this.state.name}</td>
                    </tr>
                    <tr>
                        <th>Tình trạng</th>
                        <td>{this.state.status}</td>
                    </tr>
                    <tr>
                        <th>Gói vaccine</th>
                        <td>{this.state.vaccine}</td>
                    </tr>
                    <tr>
                        <th>Mô tả</th>
                        <td>{this.state.desc}</td>
                    </tr>
                    <tr>
                        <th>Chuẩn đoán</th>
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
                    <span className="h3">Bệnh nhân</span>
                </div>

                <Table striped bordered hover className="mt-4 mb-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Ngày đăng ký</th>
                            <th>Ngày tiêm</th>
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