import React from 'react';
import { Link } from 'react-router-dom';

import $ from "jquery";
import { DropzoneArea } from 'material-ui-dropzone';

// Import Sidebar
import { TeacherSidebar } from './teacher-sidebar';

// Import Images
import UserImg from '../../assets/img/teachers/teacher-thumb-02.jpg';
import formImg from '../../assets/img/features/feature-01.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

class TeacherProfileSettings extends React.Component {

	componentDidMount() {
		// Pricing Options Show
		$('#pricing_select input[name="rating_option"]').on('click', function() {
			if ($(this).val() == 'price_free') {
				$('#custom_price_cont').hide();
			}
			if ($(this).val() == 'custom_price') {
				$('#custom_price_cont').show();
			}
			else {
			}
		});
	
		// Education Add More
		
		$(".education-info").on('click','.trash', function () {
			$(this).closest('.education-cont').remove();
			return false;
		});
	
		$(".add-education").on('click', function () {
			
			var educationcontent = '<div class="row form-row education-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Degree</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>College/Institute</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Year of Completion</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><Link to="#" class="btn btn-danger trash">&times;</Link></div>' +
			'</div>';
			
			$(".education-info").append(educationcontent);
			return false;
		});
		
		// Experience Add More
		
		$(".experience-info").on('click','.trash', function () {
			$(this).closest('.experience-cont').remove();
			return false;
		});
	
		$(".add-experience").on('click', function () {
			
			var experiencecontent = '<div class="row form-row experience-cont">' +
				'<div class="col-12 col-md-10 col-lg-11">' +
					'<div class="row form-row">' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>School Name</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>From</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>To</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
						'<div class="col-12 col-md-6 col-lg-4">' +
							'<div class="form-group">' +
								'<label>Designation</label>' +
								'<input type="text" class="form-control">' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><Link to="#" class="btn btn-danger trash">&times;</Link></div>' +
			'</div>';
			
			$(".experience-info").append(experiencecontent);
			return false;
		});
		
		// Awards Add More
		
		$(".awards-info").on('click','.trash', function () {
			$(this).closest('.awards-cont').remove();
			return false;
		});
	
		$(".add-award").on('click', function () {
	
			var regcontent = '<div class="row form-row awards-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Awards</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".awards-info").append(regcontent);
			return false;
		});
		
		// Membership Add More
		
		$(".membership-info").on('click','.trash', function () {
			$(this).closest('.membership-cont').remove();
			return false;
		});
	
		$(".add-membership").on('click', function () {
	
			var membershipcontent = '<div class="row form-row membership-cont">' +
				'<div class="col-12 col-md-10 col-lg-5">' +
					'<div class="form-group">' +
						'<label>Memberships</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2 col-lg-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".membership-info").append(membershipcontent);
			return false;
		});
		
		// Registration Add More
		
		$(".registrations-info").on('click','.trash', function () {
			$(this).closest('.reg-cont').remove();
			return false;
		});
	
		$(".add-reg").on('click', function () {
	
			var regcontent = '<div class="row form-row reg-cont">' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Registrations</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-5">' +
					'<div class="form-group">' +
						'<label>Year</label>' +
						'<input type="text" class="form-control">' +
					'</div>' +
				'</div>' +
				'<div class="col-12 col-md-2">' +
					'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
					'<Link to="#" class="btn btn-danger trash">&times;</Link>' +
				'</div>' +
			'</div>';
			
			$(".registrations-info").append(regcontent);
			return false;
		});


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
										<li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Profile Settings</h2>
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
								<TeacherSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">

								{/* Basic Information */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Basic Information</h4>
										<div className="row form-row">
											<div className="col-md-12">
												<div className="form-group">
													<div className="change-avatar">
														<div className="profile-img">
															<img src={UserImg} alt="User Image" />
														</div>
														<div className="upload-img">
															<div className="change-photo-btn">
																<span><FontAwesomeIcon icon="upload" /> Upload Photo</span>
																<input type="file" className="upload" />
															</div>
															<small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Username <span className="text-danger">*</span></label>
													<input type="text" className="form-control" readOnly />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Email <span className="text-danger">*</span></label>
													<input type="email" className="form-control" readOnly />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>First Name <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Last Name <span className="text-danger">*</span></label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Phone Number</label>
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
												<div className="form-group mb-0">
													<label>Date of Birth</label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Basic Information */}

								{/* About Me */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">About Me</h4>
										<div className="form-group mb-0">
											<label>Biography</label>
											<textarea className="form-control" rows="5"></textarea>
										</div>
									</div>
								</div>
								{/* About Me */}

								{/* School Info */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">School Info</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>School Name</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>School Address</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group univ-grp">
													<label>School Images</label>
													{/* <form action="#" className="dropzone"></form> */}
													<DropzoneArea />
												</div>
												<div className="upload-wrap">
													<div className="upload-images">
														<img src={formImg} alt="Upload Image" />
														<Link to="#" className="btn btn-icon btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /></Link>
													</div>
													<div className="upload-images">
														<img src={formImg} alt="Upload Image" />
														<Link to="#" className="btn btn-icon btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /></Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* School Info */}

								{/* Contact Details */}
								<div className="card contact-card">
									<div className="card-body">
										<h4 className="card-title">Contact Details</h4>
										<div className="row form-row">
											<div className="col-md-6">
												<div className="form-group">
													<label>Address Line 1</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Address Line 2</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">City</label>
													<input type="text" className="form-control" />
												</div>
											</div>

											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">State / Province</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Country</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label className="control-label">Postal Code</label>
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Contact Details */}

								{/* Pricing */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Pricing</h4>
										
										<div className="form-group mb-0">
											<div id="pricing_select">
												<div className="custom-control custom-radio custom-control-inline">
													<input type="radio" id="price_free" name="rating_option" className="custom-control-input" defaultValue="price_free" defaultChecked />
													<label className="custom-control-label">Free</label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
													<input type="radio" id="price_custom" name="rating_option" defaultValue="custom_price" className="custom-control-input" />
													<label className="custom-control-label">Custom Price (per hour)</label>
												</div>
											</div>

										</div>
										
										<div className="row custom_price_cont" id="custom_price_cont" style={{display: 'none'}}>
											<div className="col-md-4">
												<input type="text" className="form-control" id="custom_rating_input" name="custom_rating_count" defaultValue="" placeholder="20" readOnly />
												<small className="form-text text-muted">Custom price you can add</small>
											</div>
										</div>
										
									</div>
								</div>
								{/* Pricing */}

								{/* Services and Specialization */}
								<div className="card services-card">
									<div className="card-body">
										<h4 className="card-title">Services and Specialization</h4>
										<div className="form-group">
											<label>Services</label>
											<input type="text" data-role="tagsinput" className="input-tags form-control" placeholder="Enter Services" name="services" defaultValue="Musics " id="services" />
											<small className="form-text text-muted">Note : Type & Press enter to add new services</small>
										</div> 
										<div className="form-group mb-0">
											<label>Specialization </label>
											<input className="input-tags form-control" type="text" data-role="tagsinput" placeholder="Enter Specialization" name="specialist" defaultValue="Online Appointment, Career Counseling" id="specialist" />
											<small className="form-text text-muted">Note : Type & Press  enter to add new specialization</small>
										</div> 
									</div>
								</div>
								{/* Services and Specialization */}

								{/* Education */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Education</h4>
										<div className="education-info">
											<div className="row form-row education-cont">
												<div className="col-12 col-md-10 col-lg-11">
													<div className="row form-row">
														<div className="col-12 col-md-6 col-lg-4">
															<div className="form-group">
																<label>Degree</label>
																<input type="text" className="form-control" />
															</div> 
														</div>
														<div className="col-12 col-md-6 col-lg-4">
															<div className="form-group">
																<label>College/Institute</label>
																<input type="text" className="form-control" />
															</div> 
														</div>
														<div className="col-12 col-md-6 col-lg-4">
															<div className="form-group">
																<label>Year of Completion</label>
																<input type="text" className="form-control" />
															</div> 
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-education"><FontAwesomeIcon icon={faPlusCircle} /> Add More</Link>
										</div>
									</div>
								</div>
								{/* Education */}

								{/* Experience */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Experience</h4>
										<div className="experience-info">
											<div className="row form-row experience-cont">
												<div className="col-12 col-md-10 col-lg-11">
													<div className="row form-row">
														<div className="col-12 col-md-6 col-lg-4">
															<div className="form-group">
																<label>School Name</label>
																<input type="text" className="form-control" />
															</div> 
														</div>
														<div className="col-12 col-md-6 col-lg-4">
															<div className="form-group">
																<label>From</label>
																<input type="text" className="form-control" />
															</div> 
														</div>
														<div className="col-12 col-md-6 col-lg-4">
															<div className="form-group">
																<label>To</label>
																<input type="text" className="form-control" />
															</div> 
														</div>
														<div className="col-12 col-md-6 col-lg-4">
															<div className="form-group">
																<label>Designation</label>
																<input type="text" className="form-control" />
															</div> 
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-experience"><FontAwesomeIcon icon={faPlusCircle} /> Add More</Link>
										</div>
									</div>
								</div>
								{/* Experience */}
								
								{/* Awards */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Awards</h4>
										<div className="awards-info">
											<div className="row form-row awards-cont">
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Awards</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Year</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-award"><FontAwesomeIcon icon={faPlusCircle} /> Add More</Link>
										</div>
									</div>
								</div>
								{/* Awards */}
								
								{/* Memberships */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Memberships</h4>
										<div className="membership-info">
											<div className="row form-row membership-cont">
												<div className="col-12 col-md-10 col-lg-5">
													<div className="form-group">
														<label>Memberships</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-membership"><FontAwesomeIcon icon={faPlusCircle} /> Add More</Link>
										</div>
									</div>
								</div>
								{/* Memberships */}
								
								{/* Registrations */}
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Registrations</h4>
										<div className="registrations-info">
											<div className="row form-row reg-cont">
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Registrations</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
												<div className="col-12 col-md-5">
													<div className="form-group">
														<label>Year</label>
														<input type="text" className="form-control" />
													</div> 
												</div>
											</div>
										</div>
										<div className="add-more">
											<Link to="#" className="add-reg"><FontAwesomeIcon icon={faPlusCircle} /> Add More</Link>
										</div>
									</div>
								</div>
								{/* Registrations */}
								
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
export { TeacherProfileSettings };