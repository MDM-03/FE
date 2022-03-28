import React from 'react';
import { Link } from 'react-router-dom';
// Import Sidebar
import { TeacherSidebar } from './teacher-sidebar';

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
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';


class MyStudents extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">My Students</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">My Students</h2>
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
								<div className="row row-grid">
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/student-profile" className="booking-techers-img">
															<img src={StudentImg} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/student-profile">Julie Sterns</Link></h3>
															
															<div className="student-details">
																<h5><b>Student ID :</b> S0016</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Alabama, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 952 001 8563</span></li>
														<li>Age <span>38 Years, Male</span></li>
														<li>Blood Group <span>AB+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="/student-profile" className="booking-techers-img">
															<img src={StudentImg1} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3><Link to="/student-profile">Charlene Reed</Link></h3>
															
															<div className="student-details">
																<h5><b>Student ID :</b> S0001</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> North Carolina, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 828 632 9170</span></li>
														<li>Age <span>29 Years, Female</span></li>
														<li>Blood Group <span>O+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg2} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Travis Trimble </h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0002</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Maine, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 207 729 9974</span></li>
														<li>Age <span>23 Years, Male</span></li>
														<li>Blood Group <span>B+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg3} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Carl Kelly</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0003</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Indiana, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 260 724 7769</span></li>
														<li>Age <span>32 Years, Male</span></li>
														<li>Blood Group <span>A+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg4} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Michelle Fairfax</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0004</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Indiana, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 504 368 6874</span></li>
														<li>Age <span>25 Years, Female</span></li>
														<li>Blood Group <span>B+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg5} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Gina Moore</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0005</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 954 820 7887</span></li>
														<li>Age <span>25 Years, Female</span></li>
														<li>Blood Group <span>AB-</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg6} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Elsie Gilley</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0006</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Kentucky, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 315 384 4562</span></li>
														<li>Age <span>14 Years, Female</span></li>
														<li>Blood Group <span>O-</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg7} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Joan Gardner</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0007</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> California, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 707 2202 603</span></li>
														<li>Age <span>25 Years, Female</span></li>
														<li>Blood Group <span>A-</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg8} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Daniel Griffing</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0007</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> New Jersey, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 973 773 9497</span></li>
														<li>Age <span>28 Years, Male</span></li>
														<li>Blood Group <span>O+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg9} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Walter Roberson</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0009</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 850 358 4445</span></li>
														<li>Age <span>28 Years, Male</span></li>
														<li>Blood Group <span>A+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg10} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Robert Rhodes</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0010</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> California, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 858 259 5285</span></li>
														<li>Age <span>19 Years, Male</span></li>
														<li>Blood Group <span>B+</span></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="card widget-profile stu-widget-profile">
											<div className="card-body">
												<div className="pro-widget-content">
													<div className="profile-info-widget">
														<Link to="#" className="booking-techers-img">
															<img src={StudentImg11} alt="User Image" />
														</Link>
														<div className="profile-det-info">
															<h3>Harry Williams</h3>
															<div className="student-details">
																<h5><b>Student ID :</b> ST0011</h5>
																<h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Colorado, USA</h5>
															</div>
														</div>
													</div>
												</div>
												<div className="student-info">
													<ul>
														<li>Phone <span>+1 303 607 7075</span></li>
														<li>Age <span>9 Years, Male</span></li>
														<li>Blood Group <span>A-</span></li>
													</ul>
												</div>
											</div>
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
export { MyStudents };