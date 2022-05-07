import React from 'react';
import { Link } from 'react-router-dom';

// Import Image
import Logo from '../../assets/img/logo.png';

class MedicalRecordView extends React.Component {

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
										<li className="breadcrumb-item active" aria-current="page">Medical Record View</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Medical Record View</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

				{/* Page Content */}
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<div className="invoice-content">
									<div className="invoice-item">
										<div className="row">
											<div className="col-md-6">
												<div className="invoice-logo">
													<img src={Logo} alt="logo" />
												</div>
											</div>
											<div className="col-md-6">
												<p className="invoice-details">
													<strong>Order:</strong> #00124 <br />
													<strong>Date Injected:</strong> 20/07/2021
												</p>
											</div>
										</div>
									</div>
									
									{/* Invoice Item */}
									<div className="invoice-item">
										<div className="row">
											<div className="col-md-6">
												<div className="invoice-info">
													<strong className="customer-text">Information Customer</strong>
													<p className="invoice-details invoice-details-two">
														{this.state.isLoaded ? this.state.data['customer']['Name'] : ''} <br />
														{this.state.isLoaded ? this.state.data['customer']['PhoneNumber'] : ''} <br />
														{this.state.isLoaded ? this.state.data['customer']['Address'] : ''} <br />
													</p>
												</div>
											</div>
                                            <div className="col-md-6">
												<div className="invoice-info">
													<strong className="customer-text">Information Doctor</strong>
													<p className="invoice-details invoice-details-two">
														{this.state.isLoaded ? this.state.data['record'][0]['Doctor']['name'] : ''} <br />
														{this.state.isLoaded ? this.state.data['record'][0]['Doctor']['PhoneNumber'] : ''} <br />
														{this.state.isLoaded ? this.state.data['record'][0]['Doctor']['Specialist'] : ''} <br />
													</p>
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}
									
									{/* Invoice Item */}
									<div className="invoice-item invoice-table-wrap">
										<div className="row">
											<div className="col-md-12">
												<div className="table-responsive">
													<table className="invoice-table table table-bordered">
														<thead>
															<tr>
																<th className="text-center">Diagnostic</th>
																<th className="text-center">Vaccine</th>
																<th className="text-center">Price</th>
																<th className="text-center">Status</th>
																<th className="text-right">Date</th>
															</tr>
														</thead>
														<tbody>
															{this.state.isLoaded ? this.state.data['record'].map((item) => (
																<tr>
																	<td className="text-right">{item['Diagnostic']}</td>
																	<td className="text-right">{item['Vaccine']['name']}</td>
																	<td className="text-right">{item['Vaccine']['Price']}</td>
																	<td className="text-center">{item['Status']}</td>
																	<td className="text-right">{item['DayInject']}</td>
																</tr>
															)) : ''}
														</tbody>
													</table>
												</div>
											</div>
											<div className="col-md-6 col-xl-4 ml-auto">
												<div className="table-responsive">
													<table className="invoice-table-two table">
														<tbody>
														<tr>
															<th>Total Amount:</th>
															<td>
																<span>
																	{
																		this.state.isLoaded ? this.state.data['record'].reduce(
																			(prev, cur) => prev + ~~cur['Vaccine']['Price'].replace(/\D/g, ""),
																			0
																		) : ''
																	} VND
																</span>
															</td>
														</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									{/* Invoice Item */}
									
									{/* Invoice Information */}
									<div className="other-info">
										<h4>Note:</h4>
										<p className="text-muted mb-0">Thông tin vaccine</p>
									</div>
									{/* Invoice Information */}
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
export { MedicalRecordView };