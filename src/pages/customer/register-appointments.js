import React from 'react';
import { Link } from 'react-router-dom';

import $ from "jquery";
import { DropzoneArea } from 'material-ui-dropzone';

// Import Sidebar
import { CustomerSidebar } from './customer-sidebar';

// Import Images
import UserImg from '../../assets/img/teachers/teacher-thumb-02.jpg';
import formImg from '../../assets/img/features/feature-01.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

class RegisterAppointments extends React.Component {
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
										<li className="breadcrumb-item active" aria-current="page">Register Appoinment for Customer</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Register Appoinment for Customer</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">

						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<CustomerSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">

								{/* Information Customer*/}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Information Customer</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Name <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group mb-0">
													<label>Date of Birth</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Phone number <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Gender</label>
													<select className="form-control select">
														<option>Select</option>
														<option>Male</option>
														<option>Female</option>
													</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Address</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>City</label>
													<select className="form-control select">
														<option>Select</option>
														<option>Ho Chi Minh</option>
														<option>Quang Ngai</option>
														<option>Quang Nam</option>
														<option>Quang Tri</option>
														<option>Quang Binh</option>
														<option>Binh Dinh</option>
														<option>Ha Noi</option>
														<option>Dong Nai</option>
														<option>Kien Giang</option>
														<option>Ben Tre</option>
														<option>Tien Giang</option>
														<option>Vung Tau</option>
													</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>ID VNVC (if any)</label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Information Customer */}

								{/* Information relative Customer*/}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Information Relative</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Name Relative<span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Phone number <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Gender</label>
													<select className="form-control select">
														<option>Select</option>
														<option>Male</option>
														<option>Female</option>
													</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Relationship with customer</label>
													<select className="form-control select">
														<option>Select</option>
														<option>Father</option>
														<option>Mother</option>
														<option>Son</option>
														<option>Daughter</option>
														<option>Husband</option>
														<option>Wife</option>
														<option>Brother</option>
														<option>Sister</option>
														<option>Grandfather</option>
														<option>Grandmother</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Information Relative customer*/}

								{/* Information Service*/}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Information Service</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>The type of vaccine you want to apply for <span className="text-danger">*</span></label>
													<select className="form-control select">
														<option>Select</option>
														<option>Vaccines for adults</option>
														<option>Vaccines for women preparing to become pregnant</option>
														<option>Vaccines for children</option>
														<option>Vaccines for pre-school childrenn</option>
														<option>Vaccines for adolescents</option>
													</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Vaccine or Combo Vaccine <span className="text-danger">*</span></label>
													<select className="form-control select">
														<option>Select</option>
														<option>Tên vaccine</option>
														<option>Tên vaccine</option>
														<option>Tên vaccine</option>
														<option>Tên vaccine</option>
														<option>Tên vaccine</option>
														<option>Tên vaccine</option>
													</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Desired date of examination <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>VNVC Center wishes to inject <span className="text-danger">*</span></label>
													<select className="form-control select">
														<option>Select</option>
														<option>VNVC Ho CHi Minh</option>
														<option>VNVC Quang Ngai</option>
														<option>VNVC Quang Nam</option>
														<option>VNVC Dong Nai</option>
														<option>VNVC Quang Tri</option>
														<option>VNVC Quang Binh</option>
														<option>VNVC Vung Tau</option>
														<option>VNVC Ben Tre</option>
														<option>VNVC Tien Giang</option>
														<option>VNVC Binh Dinh</option>
														<option>VNVC Ha Noi</option>
														<option>VNVC Kien Giang</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Information Service*/}

								<div className="submit-section submit-btn-bottom">
									<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
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
export { RegisterAppointments };