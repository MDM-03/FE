import React from 'react';
import { Link } from 'react-router-dom';

// Import Sidebar
import { TeacherSidebar } from './teacher-sidebar';

// Import Components
import { Tabs, Tab } from "react-bootstrap";

// Import Images
import UserAvatar from '../../assets/img/students/student.jpg';
import UserAvatar1 from '../../assets/img/students/student1.jpg';
import UserAvatar2 from '../../assets/img/students/student2.jpg';
import UserAvatar3 from '../../assets/img/students/student3.jpg';
import UserAvatar4 from '../../assets/img/students/student4.jpg';
import UserAvatar5 from '../../assets/img/students/student5.jpg';
import UserAvatar6 from '../../assets/img/students/student6.jpg';
import UserAvatar7 from '../../assets/img/students/student7.jpg';
import UserAvatar8 from '../../assets/img/students/student8.jpg';
import UserAvatar9 from '../../assets/img/students/student9.jpg';
import UserAvatar10 from '../../assets/img/students/student10.jpg';
import UserAvatar11 from '../../assets/img/students/student11.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarCheck, faCheck, faEye, faTimes, faUserGraduate } from '@fortawesome/fontawesome-free-solid';

class TeacherDashboard extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Dashboard</h2>
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
								<div className="row">
									<div className="col-md-12">
										<div className="card dash-card">
											<div className="card-body">
												<div className="row">
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="icon-box">
																<FontAwesomeIcon icon={faUserGraduate} />
															</div>
															<div className="dash-widget-info">
																<h6>Total Customers</h6>
																<h3>1500</h3>
																<p className="text-muted">Till Today</p>
															</div>
														</div>
													</div>
													
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget dct-border-rht">
															<div className="icon-box">
																<FontAwesomeIcon icon={faCalendar} />
															</div>
															<div className="dash-widget-info">
																<h6>Today Customers</h6>
																<h3>160</h3>
																<p className="text-muted">06, Mar 2021</p>
															</div>
														</div>
													</div>
													
													<div className="col-md-12 col-lg-4">
														<div className="dash-widget">
															<div className="icon-box">
																<FontAwesomeIcon icon={faCalendarCheck} />
															</div>
															<div className="dash-widget-info">
																<h6>Appoinments</h6>
																<h3>85</h3>
																<p className="text-muted">06, Apr 2021</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row">							
									<div className="col-md-12">
										<h4 className="mb-4">Customer Appoinment</h4>
										<div className="appointment-tab">
											<Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example">
												<Tab eventKey="upcoming" title="Upcoming">
													<div className="card card-table mb-0">
														<div className="card-body">
															<div className="table-responsive">
																<table className="table table-hover table-center mb-0">
																	<thead>
																		<tr>
																			<th>Customer Name</th>
																			<th>Appt Date</th>
																			<th>Purpose</th>
																			<th>Type</th>
																			<th className="text-center">Paid Amount</th>
																			<th></th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td>
																				<h2 className="table-avatar">
																					<Link to="/student-profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={UserAvatar} alt="User Image" /></Link>
																					<Link to="/student-profile">Julie Sterns <span>#ST0016</span></Link>
																				</h2>
																			</td>
																			<td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																			<td>General</td>
																			<td>New Customer</td>
																			<td className="text-center">$150</td>
																			<td className="text-right">
																				<div className="table-action">
																					<Link to="#" className="btn btn-sm bg-info-light mr-1">
																						<FontAwesomeIcon icon={faEye} /> View
																					</Link>
																					
																					<Link to="#" className="btn btn-sm bg-success-light mr-1">
																						<FontAwesomeIcon icon={faCheck} /> Accept
																					</Link>
																					<Link to="#" className="btn btn-sm bg-danger-light">
																						<FontAwesomeIcon icon={faTimes} /> Cancel
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
				</div>		
				{/* Page Content */}

			</div>
        )
    }
}
export { TeacherDashboard };