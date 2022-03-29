import React from 'react';
import { Link } from 'react-router-dom';
// Import Sidebar
import { StaffSidebar } from './staff-sidebar';

// Import Image
import StudentImg from '../../assets/img/students/student.jpg';
import StudentImg1 from '../../assets/img/students/student1.jpg';
import StudentImg2 from '../../assets/img/students/student2.jpg';
import StudentImg3 from '../../assets/img/students/student3.jpg';
import StudentImg4 from '../../assets/img/students/student4.jpg';
import StudentImg5 from '../../assets/img/students/student5.jpg';
import StudentImg6 from '../../assets/img/students/student6.jpg';
import StudentImg7 from '../../assets/img/students/student7.jpg';
import StudentImg8 from '../../assets/img/students/student8.jpg';
import StudentImg9 from '../../assets/img/students/student9.jpg';
import StudentImg10 from '../../assets/img/students/student10.jpg';
import StudentImg11 from '../../assets/img/students/student11.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClock, faEnvelope, faEye, faMapMarkerAlt, faPhone, faTimes } from '@fortawesome/fontawesome-free-solid';


class Appointments extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Appointments</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Appointments</h2>
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
								<StaffSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="appointments">
									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Julie Sterns</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 14 Mar 2021, 10.00 AM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> julie@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 923 782 4575</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg1} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Charlene Reed </Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 12 May 2021, 5.00 PM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> North Carolina, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> charlenereed@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 828 632 9170</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg2} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Travis Trimble</Link></h3>
												
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 11 Mar 2021, 8.00 PM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Maine, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> travistrimble@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 207 729 9974</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg3} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Carl Kelly</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 9 Mar 2021, 9.00 AM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> carlkelly@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 260 724 7769</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg4} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Michelle Fairfax</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 9 Mar 2021, 1.00 PM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Indiana, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> jinnieescamilla@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 504 368 6874</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg5} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Gina Moore</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 8 Mar 2021, 3.00 PM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> ginamoore@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 954 820 7887</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg6} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Elsie Gilley</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 6 Mar 2021, 9.00 AM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Kentucky, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> elsiegilley@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 315 384 4562</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg7} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Joan Gardner</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 5 Mar 2021, 12.00 PM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> California, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> joangardner@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 707 2202 603</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg8} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Daniel Griffing</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 5 Mar 2021, 7.00 PM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> New Jersey, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> danielgriffing@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 973 773 9497</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg9} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Walter Roberson</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 4 Mar 2021, 10.00 AM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> walterroberson@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 850 358 4445</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg10} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Robert Rhodes</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 4 Mar 2021, 11.00 AM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> California, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> robertrhodes@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 858 259 5285</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}

									{/* Appointment List */}
									<div className="appointment-list">
										<div className="profile-info-widget">
											<Link to="/student-profile" className="booking-techers-img">
												<img src={StudentImg11} alt="User Image" />
											</Link>
											<div className="profile-det-info">
												<h3><Link to="/student-profile">Harry Williams</Link></h3>
												<div className="student-details">
													<h5><FontAwesomeIcon icon={faClock} /> 3 Mar 2021, 6.00 PM</h5>
													<h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Colorado, United States</h5>
													<h5><FontAwesomeIcon icon={faEnvelope} /> harrywilliams@example.com</h5>
													<h5 className="mb-0"><FontAwesomeIcon icon={faPhone} /> +1 303 607 7075</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											<Link to="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
												<FontAwesomeIcon icon={faEye} /> View
											</Link>
											<Link to="#" className="btn btn-sm bg-success-light">
												<FontAwesomeIcon icon={faCheck} /> Accept
											</Link>
											<Link to="#" className="btn btn-sm bg-danger-light">
												<FontAwesomeIcon icon={faTimes} /> Cancel
											</Link>
										</div>
									</div>
									{/* Appointment List */}
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
export { Appointments };