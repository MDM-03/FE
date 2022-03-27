import React from 'react';
import { Link } from 'react-router-dom';

// Import Image
import LoginImg from '../../assets/img/login-banner.png';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

class Login extends React.Component {
	
    render() {
        return (
			<div>

				{/* Page Content */}
				<div className="account-page">
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col-md-8 offset-md-2">
									
									{/* Login Tab Content */}
									<div className="account-content">
										<div className="row align-items-center justify-content-center">
											<div className="col-md-7 col-lg-6 login-left">
												<img src={LoginImg} className="img-fluid" alt="Childcare" />	
											</div>
											<div className="col-md-12 col-lg-6 login-right">
												<div className="login-header">
													<h3>Login <span>Dreams Childcare</span></h3>
												</div>
												<form action="/index">
													<div className="form-group form-focus">
														<input type="email" className="form-control floating" />
														<label className="focus-label">Email</label>
													</div>
													<div className="form-group form-focus">
														<input type="password" className="form-control floating" />
														<label className="focus-label">Password</label>
													</div>
													<div className="text-right">
														<Link to="/forgot-password" className="forgot-link">Forgot Password ?</Link>
													</div>
													<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
													<div className="login-or">
														<span className="or-line"></span>
														<span className="span-or">or</span>
													</div>
													<div className="row form-row social-login">
														<div className="col-6">
															<Link to="#" className="btn btn-facebook btn-block"><FontAwesomeIcon icon={faFacebookF} className="mr-1" /> Login</Link>
														</div>
														<div className="col-6">
															<Link to="#" className="btn btn-google btn-block"><FontAwesomeIcon icon={faGoogle} className="mr-1" /> Login</Link>
														</div>
													</div>
													<div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
												</form>
											</div>
										</div>
									</div>
									{/* Login Tab Content */}
										
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
export { Login };