import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import $ from "jquery";
import { DropzoneArea } from 'material-ui-dropzone';

// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Images
import UserImg from '../../assets/img/teachers/teacher-thumb-02.jpg';
import formImg from '../../assets/img/features/feature-01.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

const url = 'http://localhost:3000/'

class HandlingPayment extends React.Component {
	constructor() {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			update: false,
			id: "",
			order: []
		};
		this.handlePayment = this.handlePayment.bind(this);
	}

	componentDidMount() {
		fetch(url + 'order')
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result)
					this.setState({
						isLoaded: true,
						order: result.data
					})
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					})
				})
	}

	handlePayment(id) {
		fetch(url + `order/${id}`,
			{
				method: "PUT",
				body: JSON.stringify({ "Status": "Đã thanh toán" })
			})
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result)
					this.setState({
						isLoaded: true,
						update: false
					})
				},
				(error) => {
					this.setState({
						isLoaded: true,
						update: false,
						error
					})
				});
	}

	render() {
		return (
			<div>
				<div className='mt-5 ml-5'>
					<span className='h3'>Thanh toán</span>
				</div>

				<Table striped bordered hover className='mt-4 mb-5'>
					<thead>
						<tr>
							<th>#</th>
							<th>Khách hàng</th>
							<th>Tổng tiền</th>
							<th>Trạng thái</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.order.map((ord, index) => {
							return (<tr key={ord._id}>
								<td>{++index}</td>
								<td>{ord.Customer.Name}</td>
								<td>{ord.Price}</td>
								<td>{ord.RegisterAppointment.Status}</td>
								<td>{ord.Status !== "Đã thanh toán" ?
									<div>
										<Button
											id={"PopoverFocus" + ord._id}
											type="button"
											disabled={ord.RegisterAppointment.Status === "Chưa chích" ? true : false}
										>
											Thanh toán
										</Button>
										<UncontrolledPopover
											placement="bottom"
											target={"PopoverFocus" + ord._id}
											trigger="focus"
										>
											<PopoverHeader>
												Thông tin hóa đơn
											</PopoverHeader>
											<PopoverBody>
												<p>Gói vaccine: {ord.Vaccine.Name}</p>
												<p>Triệu chứng: {ord.Vaccine.Prevention}</p>
												<p>Giá: {ord.Vaccine.Price}</p>
												<Button onClick={() => this.handlePayment(ord._id)}>Hoàn thành</Button>
											</PopoverBody>
										</UncontrolledPopover>
									</div>
									: <span>Đã thanh toán</span>}
								</td>
							</tr>)
						})}

					</tbody>
				</Table>
				{this.state.onclick && <PaymentDetail />}
			</div>
		)
	}
}

export { HandlingPayment };