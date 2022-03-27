import React from 'react';
import { Link } from 'react-router-dom';

import { TeacherSidebar } from '../teacher/teacher-sidebar';

// Import Image
import UserImg from '../../assets/img/students/student.jpg';
import UserImg1 from '../../assets/img/students/student1.jpg';
import UserImg2 from '../../assets/img/students/student2.jpg';
import UserImg3 from '../../assets/img/students/student3.jpg';
import UserImg4 from '../../assets/img/students/student4.jpg';
import UserImg5 from '../../assets/img/students/student5.jpg';
import UserImg6 from '../../assets/img/students/student6.jpg';
import UserImg7 from '../../assets/img/students/student7.jpg';
import UserImg8 from '../../assets/img/students/student8.jpg';
import UserImg9 from '../../assets/img/students/student9.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPrint } from '@fortawesome/fontawesome-free-solid';

class Invoices extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Blank Page</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Blank Page</h2>
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
								<div className="card card-table">
									<div className="card-body">
									
										{/* Invoice Table */}
										<div className="table-responsive">
											<table className="table table-hover table-center mb-0">
												<thead>
													<tr>
														<th>Invoice No</th>
														<th>Student</th>
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg} alt="User Image" />
																</Link>
																<Link to="/student-profile">Julie Sterns <span>#ST0016</span></Link>
															</h2>
														</td>
														<td>$450</td>
														<td>14 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg1} alt="User Image" />
																</Link>
																<Link to="/student-profile">Charlene Reed <span>#ST0001</span></Link>
															</h2>
														</td>
														<td>$200</td>
														<td>13 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg2} alt="User Image" />
																</Link>
																<Link to="/student-profile">Travis Trimble <span>#ST0002</span></Link>
															</h2>
														</td>
														<td>$100</td>
														<td>12 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg3} alt="User Image" />
																</Link>
																<Link to="/student-profile">Carl Kelly <span>#ST0003</span></Link>
															</h2>
														</td>
														<td>$350</td>
														<td>11 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg4} alt="User Image" />
																</Link>
																<Link to="/student-profile">Michelle Fairfax <span>#ST0004</span></Link>
															</h2>
														</td>
														<td>$275</td>
														<td>10 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg5} alt="User Image" />
																</Link>
																<Link to="/student-profile">Gina Moore <span>#ST0005</span></Link>
															</h2>
														</td>
														<td>$600</td>
														<td>9 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg6} alt="User Image" />
																</Link>
																<Link to="/student-profile">Elsie Gilley <span>#ST0006</span></Link>
															</h2>
														</td>
														<td>$50</td>
														<td>8 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg7} alt="User Image" />
																</Link>
																<Link to="/student-profile">Joan Gardner <span>#ST0007</span></Link>
															</h2>
														</td>
														<td>$400</td>
														<td>7 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg8} alt="User Image" />
																</Link>
																<Link to="/student-profile">Daniel Griffing <span>#ST0008</span></Link>
															</h2>
														</td>
														<td>$550</td>
														<td>6 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
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
																<Link to="/student-profile" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg9} alt="User Image" />
																</Link>
																<Link to="/student-profile">Walter Roberson <span>#ST0009</span></Link>
															</h2>
														</td>
														<td>$100</td>
														<td>5 Nov 2019</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/invoice-view" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
																<Link to="#" className="btn btn-sm bg-primary-light">
																	<FontAwesomeIcon icon={faPrint} /> Print
																</Link>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										{/* Invoice Table */}
										
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
export { Invoices };