import React from 'react';
import { Link } from 'react-router-dom';

import { CustomerSidebar } from '../customer/customer-sidebar';

// Import Image
import UserImg from '../../assets/img/students/student.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/fontawesome-free-solid';

class MedicalRecord extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:3000/healthrecord")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.data[0]
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
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
										<li className="breadcrumb-item active" aria-current="page">Medical Record</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Medical Record</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content 
				*/}
				<div className="content">
					<div className="container">

						<div className="row">
							<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<CustomerSidebar />																
							</div>
							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="card card-table">
									<div className="card-body">
									
										{/* Medical Record Table */}
										<div className="table-responsive">
											<table className="table table-hover table-center mb-0">
												<thead>
													<tr>
														<th>Status</th>
														<th>Doctor</th>
														<th>Vaccine</th>
														<th>Paid On</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<Link to="/invoice-view">???? ch??ch</Link>
														</td>
														<td>
															<h2 className="table-avatar">
																<Link to="" className="avatar avatar-sm mr-2">
																	<img className="avatar-img rounded-circle" src={UserImg} alt="User Image" />
																</Link>
																<Link to="">{this.state.isLoaded ? this.state.data['record'][0]['Doctor']['name'] : ''}</Link>
															</h2>
														</td>
														<td><Link to="view-vaccine">{this.state.isLoaded ?  this.state.data['record'][0]['Vaccine']['name'] : ''}</Link></td>
														<td>{this.state.isLoaded ?  this.state.data['record'][0]['Vaccine']['Price'] : ''}</td>
														<td className="text-right">
															<div className="table-action">
																<Link to="/view-medical-record" className="btn btn-sm bg-info-light mr-1">
																	<FontAwesomeIcon icon={faEye} /> View
																</Link>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										{/* Medical Record Table */}
										
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
export { MedicalRecord };