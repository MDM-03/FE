import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import TeacherImg from '../../assets/img/teachers/teacher-thumb-02.jpg';

// Import Components
import { Modal, Tabs, Tab } from "react-bootstrap";

// Import Images
import UserAvatar from '../../assets/img/teachers/teacher-thumb-01.jpg';
import UserAvatar1 from '../../assets/img/teachers/teacher-thumb-02.jpg';
import UserAvatar2 from '../../assets/img/teachers/teacher-thumb-03.jpg';
import UserAvatar3 from '../../assets/img/teachers/teacher-thumb-04.jpg';
import UserAvatar4 from '../../assets/img/teachers/teacher-thumb-05.jpg';
import UserAvatar5 from '../../assets/img/teachers/teacher-thumb-06.jpg';
import UserAvatar6 from '../../assets/img/teachers/teacher-thumb-07.jpg';
import UserAvatar7 from '../../assets/img/teachers/teacher-thumb-08.jpg';
import UserAvatar8 from '../../assets/img/teachers/teacher-thumb-09.jpg';
import UserAvatar9 from '../../assets/img/teachers/teacher-thumb-10.jpg';

import { Sidebar } from '../billing/sidebar';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPrint, faEdit, faTrashAlt, faClock } from '@fortawesome/fontawesome-free-solid';

class StudentProfile extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		}
	}

	openModal = () => {
		this.setState({
			showModal: !this.state.showModal
		})
	}
	
    render() {
        return (
			<div>
				{/* Breadcrumb */}
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Profile</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Profile</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						
						<div className="row">
							{/* Profile Sidebar */}
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<Sidebar />

								<div className="card">
									<div className="card-header">
										<h4 className="card-title">Last Booking</h4>
									</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="mr-3">
													<img alt="Image placeholder" src={TeacherImg} className="avatar rounded-circle" />
												</div>
												<div className="media-body">
													<h5 className="d-block mb-0">Ruth Smith </h5>
													<span className="d-block text-sm text-muted">Teacher</span>
													<span className="d-block text-sm text-muted">14 Mar 2021 5.00 PM</span>
												</div>
											</div>
										</li>
										<li className="list-group-item">
											<div className="media align-items-center">
												<div className="mr-3">
													<img alt="Image placeholder" src={TeacherImg} className="avatar rounded-circle" />
												</div>
												<div className="media-body">
													<h5 className="d-block mb-0">Ruth Smith </h5>
													<span className="d-block text-sm text-muted">Teacher</span>
													<span className="d-block text-sm text-muted">12 May 2021 11.00 AM</span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							{/* Profile Sidebar */}

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card database-tbl">
									<div className="card-body">
										<Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
											<Tab eventKey="appointments" title="Appointments">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Teacher</th>
																		<th>Appt Date</th>
																		<th>Booking Date</th>
																		<th>Amount</th>
																		<th>Follow Up</th>
																		<th>Status</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																		<td>12 Nov 2019</td>
																		<td>$160</td>
																		<td>16 Nov 2019</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-success-light">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																		<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>12 Nov 2019 <span className="d-block text-info">8.00 PM</span></td>
																		<td>12 Nov 2019</td>
																		<td>$250</td>
																		<td>14 Nov 2019</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-success-light">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>11 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
																		<td>10 Nov 2019</td>
																		<td>$400</td>
																		<td>13 Nov 2019</td>
																		<td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-success-light">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>10 Nov 2019 <span className="d-block text-info">3.00 PM</span></td>
																		<td>10 Nov 2019</td>
																		<td>$350</td>
																		<td>12 Nov 2019</td>
																		<td><span className="badge badge-pill bg-warning-light">Pending</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="/edit-enquiry" className="btn btn-sm bg-success-light mr-1">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTrashAlt} /> Cancel
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>9 Nov 2019 <span className="d-block text-info">7.00 PM</span></td>
																		<td>8 Nov 2019</td>
																		<td>$75</td>
																		<td>11 Nov 2019</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-success-light">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>8 Nov 2019 <span className="d-block text-info">9.00 AM</span></td>
																		<td>6 Nov 2019</td>
																		<td>$175</td>
																		<td>10 Nov 2019</td>
																		<td><span className="badge badge-pill bg-danger-light">Cancelled</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-success-light">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>8 Nov 2019 <span className="d-block text-info">6.00 PM</span></td>
																		<td>6 Nov 2019</td>
																		<td>$450</td>
																		<td>10 Nov 2019</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-success-light">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>7 Nov 2019 <span className="d-block text-info">9.00 PM</span></td>
																		<td>7 Nov 2019</td>
																		<td>$275</td>
																		<td>9 Nov 2019</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light">
																					<FontAwesomeIcon icon={faClock} /> Reschedule
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>6 Nov 2019 <span className="d-block text-info">8.00 PM</span></td>
																		<td>4 Nov 2019</td>
																		<td>$600</td>
																		<td>8 Nov 2019</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light">
																					<FontAwesomeIcon icon={faClock} /> Reschedule
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>5 Nov 2019 <span className="d-block text-info">5.00 PM</span></td>
																		<td>1 Nov 2019</td>
																		<td>$100</td>
																		<td>7 Nov 2019</td>
																		<td><span className="badge badge-pill bg-success-light">Confirm</span></td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light">
																					<FontAwesomeIcon icon={faClock} /> Reschedule
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="enquiry" title="Enquiry">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Date </th>
																		<th>Name</th>
																		<th>Created by </th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr>
																		<td>14 Mar 2021</td>
																		<td>Enquiry 1</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruby Perrin <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>13 Mar 2021</td>
																		<td>Enquiry 2</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																				<Link to="/edit-enquiry" className="btn btn-sm bg-success-light mr-1">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTrashAlt} /> Delete
																				</Link>
																			</div>			
																		</td>
																	</tr>
																	<tr>
																		<td>12 Nov 2020</td>
																		<td>Enquiry 3</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Deborah Angel <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>11 Mar 2021</td>
																		<td>Enquiry 4</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Sofia Brient <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>10 Nov 2020</td>
																		<td>Enquiry 5</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Marvin Campbell <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>9 Mar 2021</td>
																		<td>Enquiry 6</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Katharine Berthold <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>8 Mar 2021</td>
																		<td>Enquiry 7</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Linda Tobin <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>7 Nov 2020</td>
																		<td>Enquiry 8</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Paul Richard <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>6 Mar 2021</td>
																		<td>Enquiry 9</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">John Gibbs <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>5 Mar 2021</td>
																		<td>Enquiry 10</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Olga Barlow <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>	
															</table>
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="student-records" title="Student Records">
												<div className="text-right">		
													<Link to="#" className="add-new-btn" onClick={()=>this.openModal()} >Add Student Records</Link>
												</div>

												{/* Add Student Records Modal */}
												<Modal show={this.state.showModal} className="custom-modal" size="lg">
													<Modal.Header>
														<h3 className="modal-title">Student Records</h3>
														<button type="button" className="close" onClick={()=>this.openModal()}><span aria-hidden="true">&times;</span></button>
													</Modal.Header>
													<form>
														<Modal.Body>
															<div className="form-group">
																<label>Date</label>
																<input type="text" className="form-control datetimepicker" defaultValue="31-10-2020" />
															</div>
															<div className="form-group">
																<label>Description ( Optional )</label>
																<textarea className="form-control"></textarea>
															</div>
															<div className="form-group">
																<label>Upload File</label> 
																<input type="file" className="form-control" />
															</div>	
															<div className="submit-section text-center">
																<button type="submit" className="btn btn-primary submit-btn">Submit</button>
																<button type="button" className="btn btn-secondary submit-btn" onClick={()=>this.openModal()} >Cancel</button>
															</div>
														</Modal.Body>
													</form>
																								
												</Modal>
												{/* Add Student Records Modal */}	

												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID</th>
																		<th>Date </th>
																		<th>Description</th>
																		<th>Attachment</th>
																		<th>Created</th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr>
																		<td><Link to="#">#MR-0010</Link></td>
																		<td>14 Mar 2021</td>
																		<td>Arts & Music</td>
																		<td><Link to="#">general.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruby Perrin <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0009</Link></td>
																		<td>13 Mar 2021</td>
																		<td>Online Counseling</td>
																		<td><Link to="#">general.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																				<Link to="/edit-enquiry" className="btn btn-sm bg-success-light mr-1">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTrashAlt} /> Delete
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0008</Link></td>
																		<td>12 Nov 2020</td>
																		<td>Numerous Counseling</td>
																		<td><Link to="#">young-adult.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Deborah Angel <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0007</Link></td>
																		<td>11 Mar 2021</td>
																		<td>Numerous Counseling</td>
																		<td><Link to="#">general.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Sofia Brient <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0006</Link></td>
																		<td>10 Nov 2020</td>
																		<td>Direct Appointment</td>
																		<td><Link to="#">online-counseling.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Marvin Campbell <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0005</Link></td>
																		<td>9 Mar 2021</td>
																		<td>Direct Appointment</td>
																		<td><Link to="#">direct-counseling.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Katharine Berthold <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0004</Link></td>
																		<td>8 Mar 2021</td>
																		<td>Students Meet</td>
																		<td><Link to="#">direct-counseling.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Linda Tobin <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0003</Link></td>
																		<td>7 Nov 2020</td>
																		<td>Career Counseling</td>
																		<td><Link to="#">direct-counseling.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Paul Richard <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0002</Link></td>
																		<td>6 Mar 2021</td>
																		<td>Young, Adult Intensive</td>
																		<td><Link to="#">general.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">John Gibbs <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td><Link to="#">#MR-0001</Link></td>
																		<td>5 Mar 2021</td>
																		<td>Arts & Music</td>
																		<td><Link to="#">general.pdf</Link></td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Olga Barlow <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>  	
															</table>
														</div>
													</div>
												</div>
											</Tab>
											<Tab eventKey="billing" title="Billing">
												<div className="text-right">
													<Link to="/add-billing" className="add-new-btn">Add Billing</Link>
												</div>
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Invoice No</th>
																		<th>Teacher</th>
																		<th>Amount</th>
																		<th>Paid On</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0010</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruby Perrin <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$450</td>
																		<td>14 Mar 2021</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0009</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar1} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Ruth Smith <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$300</td>
																		<td>13 Mar 2021</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light mr-1">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																				<Link to="/edit-enquiry" className="btn btn-sm bg-success-light mr-1">
																					<FontAwesomeIcon icon={faEdit} /> Edit
																				</Link>
																				<Link to="#" className="btn btn-sm bg-danger-light">
																					<FontAwesomeIcon icon={faTrashAlt} /> Delete
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0008</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar2} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Deborah Angel <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$150</td>
																		<td>12 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0007</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar3} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Sofia Brient <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$50</td>
																		<td>11 Mar 2021</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0006</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar4} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Marvin Campbell <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$600</td>
																		<td>10 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0005</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar5} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Katharine Berthold <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$200</td>
																		<td>9 Mar 2021</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0004</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar6} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Linda Tobin <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$100</td>
																		<td>8 Mar 2021</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0003</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar7} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Paul Richard <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$250</td>
																		<td>7 Nov 2020</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0002</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar8} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">John Gibbs <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$175</td>
																		<td>6 Mar 2021</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<Link to="/invoice-view">#INV-0001</Link>
																		</td>
																		<td>
																			<h2 className="table-avatar">
																				<Link to="/teacher-profile" className="avatar avatar-sm mr-2">
																					<img className="avatar-img rounded-circle" src={UserAvatar9} alt="User Image" />
																				</Link>
																				<Link to="/teacher-profile">Olga Barlow <span>Teacher</span></Link>
																			</h2>
																		</td>
																		<td>$550</td>
																		<td>5 Mar 2021</td>
																		<td className="text-right">
																			<div className="table-action">
																				<Link to="#" className="btn btn-sm bg-primary-light  mr-1">
																					<FontAwesomeIcon icon={faPrint} /> Print
																				</Link>
																				<Link to="#" className="btn btn-sm bg-info-light">
																					<FontAwesomeIcon icon={faEye} /> View
																				</Link>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</Tab>
										</Tabs>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>		
				{/* Page Content */}
			</div>
        )
    }
}
export { StudentProfile };