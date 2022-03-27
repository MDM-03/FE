import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import InstaImg1 from '../../assets/img/blog-01.png';
import InstaImg2 from '../../assets/img/blog-02.png';
import InstaImg3 from '../../assets/img/blog-03.png';


// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow } from '@fortawesome/fontawesome-free-solid';

class Footer extends React.Component {
	
    render() {
        const exclusionArray = [
			'/chat',
			'/chat-teacher',
			'/voice-call',
			'/video-call'
		]
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}

		const pathname = this.props.location.pathname;

        return (
			<div className="home">
				<footer className="footer">
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-md-5">
									<h4>Sign Up For Newsletter</h4>
									<h6>Join 60.000+ Subscribers</h6>
								</div>
								<div className="col-md-7">
									<form className="input-group">
										<input type="text" className="form-control" placeholder="Enter your email..." />
										<div className="input-group-append">
											<button className="btn btn-secondary" type="button">
												<FontAwesomeIcon icon={faLocationArrow} /> Subscribe Now
											</button>
										</div>
									</form>
								</div>							
							</div>

							<div className="row mt-5">
								<div className="col-md-3">
									<h3 className="footer-title">ABOUT US</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris </p>
									<ul className="mt-4 footer-social-icon d-flex">
										<li>
											<Link to="#">
												<FontAwesomeIcon icon={faFacebookF} />
											</Link>
										</li>
										<li>
											<Link to="#">
												<FontAwesomeIcon icon={faTwitter} />
											</Link>
										</li>
										<li>
											<Link to="#">
												<FontAwesomeIcon icon={faYoutube} />
											</Link>
										</li>
										<li>
											<Link to="#">
												<FontAwesomeIcon icon={faLinkedinIn} />
											</Link>
										</li>							
									</ul>
								</div>

								<div className="col-md-3">
									<h3 className="footer-title">For Teachers</h3>
									<ul className="footer-nav">
										<li>
											<Link to="/search">Search for Teachers</Link>
										</li>
										<li>
											<Link to="/login">Login</Link>
										</li>
										<li>
											<Link to="/register">Register</Link>
										</li>
										<li>
											<Link to="/booking">Bookings</Link>
										</li>
									</ul>
								</div>

								<div className="col-md-3">
									<h3 className="footer-title">For Students</h3>
									<ul className="footer-nav">
										<li>
											<Link to="/appointments">Appointments</Link>
										</li>
										<li>
											<Link to="/chat">Chat</Link>
										</li>
										<li>
											<Link to="/login">Login</Link>
										</li>
										<li>
											<Link to="/register">Register</Link>
										</li>
									</ul>
								</div>

								<div className="col-md-3">
									<h3 className="footer-title">Instagram</h3>
									<ul className="row insta-row">
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg1} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg2} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg3} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg1} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg2} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg3} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg1} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg2} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
										<li className="col-sm-2 col-md-4">
											<Link to="#">
												<img src={InstaImg3} alt="Instagram Image" className="img-fluid" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
							
							<div className="footer-bottom">
								<ul>
									<li>
										<Link to="/terms-condition">Terms</Link>
									</li>
									<li>
										<Link to="/privacy-policy">Privacy Policy</Link>
									</li>
								</ul>
								<p>© 2021 All Rights Reserved</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
    }
}

export { Footer };