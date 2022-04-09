import React from 'react';
import { Dropdown } from 'react-bootstrap';
import $ from "jquery";
import { Link } from 'react-router-dom';

// Import Images
import Logo from '../../assets/img/logo.png';
import UserIcon from '../../assets/img/teachers/teacher-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSearch, faShoppingCart, faTimes, faUser } from '@fortawesome/fontawesome-free-solid';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			inputShow: false,
			activeClass: ''
		}
	}
	showIp = () => {
		this.setState({ inputShow: !this.state.inputShow })
	}
	componentDidMount() {
		// Mobile menu sidebar overlay

		$('body').append('<div className="sidebar-overlay"></div>');
		$(document).on('click', '#mobile_btn', function () {
			$('main-wrapper').toggleClass('slide-nav');
			$('.sidebar-overlay').toggleClass('opened');
			$('html').addClass('menu-opened');
			return false;
		});

		$(document).on('click', '.sidebar-overlay', function () {
			$('html').removeClass('menu-opened');
			$(this).removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});

		$(document).on('click', '#menu_close', function () {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});

		//scroll header

		$(window).scroll(function () {
			var sticky = $('.min-header'),
				scroll = $(window).scrollTop();
			if (scroll >= 100) {
				sticky.addClass('nav-sticky');
				$('body').addClass('map-up');
			}
			else {
				sticky.removeClass('nav-sticky');
				$('body').removeClass('map-up');
			}

		});

		// Fixed Header in Home Page

		window.addEventListener('scroll', () => {
			let activeClass = '';
			if (window.scrollY > 80) {
				activeClass = 'top';
			}
			this.setState({ activeClass });
		});
	}

	render() {
		const exclusionArray = []
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}

		const pathname = this.props.location.pathname;

		console.log(pathname, "Pathnames")
		return (
			<div className={`${this.state.activeClass} ${pathname === ('/') ? 'index-section' : ''}`}>

				{/* Header */}
				<section>
					<header className="header" id="myHeader">
						<nav className="navbar navbar-expand-lg header-nav">
							<div className="navbar-header">
								<a id="mobile_btn" href="">
									<span className="bar-icon">
										<span></span>
										<span></span>
										<span></span>
									</span>
								</a>
								<Link to="/" className="navbar-brand logo">
									<img src={Logo} className="img-fluid" alt="Logo" />
								</Link>
							</div>
							<div className="main-menu-wrapper">
								<div className="menu-header">
									<Link to="/" className="menu-logo">
										<img src={Logo} className="img-fluid" alt="Logo" />
									</Link>
									<a id="menu_close" className="menu-close" href="">
										<FontAwesomeIcon icon={faTimes} />
									</a>
								</div>
								<ul className="main-nav">
									<li className={pathname === ('/') ? 'active' : ''}>
										<Link to="/">Home</Link>
									</li>

									<li className={`has-submenu ${pathname === ('/teacher-dashboard') ? 'active' : pathname === ('/appointments') ? 'active' : pathname === ('/add-billing') ? 'active' : pathname === ('/add-enquiry') ? 'active' : pathname === ('/edit-billing') ? 'active' : pathname === ('/edit-enquiry') ? 'active' : pathname === ('/my-students') ? 'active' : pathname === ('/student-profile') ? 'active' : pathname === ('/teacher-profile-settings') ? 'active' : pathname === ('/reviews') ? 'active' : pathname === ('/teacher-register') ? 'active' : ''}`}>
										<Link to="">Doctors<FontAwesomeIcon icon={faChevronDown} /></Link>
										<ul className="submenu">
											<li className={`${pathname === ('/teacher-dashboard') ? 'active' : ''}`}>
												<Link to="/teacher-dashboard">Doctor Dashboard</Link>
											</li>
											<li className={`${pathname === ('/appointments') ? 'active' : ''}`}>
												<Link to="/appointments">Appointments</Link>
											</li>
											<li className={`${pathname === ('/my-students') ? 'active' : ''}`}>
												<Link to="/customer">Customer List</Link>
											</li>
											<li className={`${pathname === ('/student-profile') ? 'active' : pathname === ('/add-billing') ? 'active' : pathname === ('/edit-billing') ? 'active' : pathname === ('/add-enquiry') ? 'active' : pathname === ('/edit-enquiry') ? 'active' : ''}`}>
												<Link to="/student-profile">Customer Profile</Link>
											</li>
											<li className={`${pathname === ('/teacher-profile-settings') ? 'active' : ''}`}>
												<Link to="/teacher-profile-settings">Profile Settings</Link>
											</li>
											<li className={`${pathname === ('/teacher-register') ? 'active' : ''}`}>
												<Link to="/teacher-register">Doctor Register</Link>
											</li>
										</ul>
									</li>
									<li className={`has-submenu ${pathname === ('/staff-dashboard') ? 'active' : pathname === ('/appointments') ? 'active' : ''}`}>
										<Link to="">Staff <FontAwesomeIcon icon={faChevronDown} /></Link>
										<ul className="submenu">
											<li className={`${pathname === ('/staff-dashboard') ? 'active' : ''}`}>
												<Link to="/staff-dashboard">Staff Dashboard</Link>
											</li>
											<li className={`${pathname === ('/staff-dashboard') ? 'active' : ''}`}>
												<Link to="/register-appointments">Register Appoinment</Link>
											</li>
											<li className={`${pathname === ('/staff-dashboard') ? 'active' : ''}`}>
												<Link to="/handling-payment">Handling Payment</Link>
											</li>
										</ul>
									</li>
									<li className={`has-submenu ${pathname === ('/register-appointments') ? 'active' : pathname === ('/booking') ? 'active' : pathname === ('/checkout') ? 'active' : pathname === ('/booking-success') ? 'active' : pathname === ('/student-dashboard') ? 'active' : pathname === ('/favourites') ? 'active' : pathname === ('/profile-settings') ? 'active' : pathname === ('/change-password') ? 'active' : ''}`}>
										<Link to="">Customer <FontAwesomeIcon icon={faChevronDown} /></Link>
										<ul className="submenu">
											<li className={`${pathname === ('/student-dashboard') ? 'active' : ''}`}>
												<Link to="/student-dashboard">Customer Dashboard</Link>
											</li>
											<li className={`${pathname === ('/register-appointments') ? 'active' : ''}`}>
												<Link to="/register-appointments">Register Appointments </Link>
											</li>
											<li className={`${pathname === ('/booking') ? 'active' : ''}`}>
												<Link to="/booking">Booking</Link>
											</li>
											<li className={`${pathname === ('/checkout') ? 'active' : ''}`}>
												<Link to="/checkout">Checkout</Link>
											</li>
											<li className={`${pathname === ('/booking-success') ? 'active' : ''}`}>
												<Link to="/booking-success">Booking Success</Link>
											</li>

											<li className={`${pathname === ('/favourites') ? 'active' : ''}`}>
												<Link to="/favourites">Favourites</Link>
											</li>
											<li className={`${pathname === ('/profile-settings') ? 'active' : ''}`}>
												<Link to="/profile-settings">Profile Settings</Link>
											</li>
											<li className={`${pathname === ('/change-password') ? 'active' : ''}`}>
												<Link to="/change-password">Change Password</Link>
											</li>
										</ul>
									</li>
									<li className={`has-submenu ${pathname === ('/components') ? 'active' : pathname === ('/login') ? 'active' : pathname === ('/register') ? 'active' : pathname === ('/forgot-password') ? 'active' : ''}`}>
										<Link to="">Pages <FontAwesomeIcon icon={faChevronDown} /></Link>
										<ul className="submenu">
											<li className={`${pathname === ('/search') ? 'active' : ''}`}>
												<Link to="/search">Search Doctor</Link>
											</li>
											<li className={`${pathname === ('/components') ? 'active' : ''}`}>
												<Link to="/components">Components</Link>
											</li>
											<li className={`${pathname === ('/login') ? 'active' : ''}`}>
												<Link to="/login">Login</Link>
											</li>
											<li className={`${pathname === ('/register') ? 'active' : ''}`}>
												<Link to="/register">Register</Link>
											</li>
											<li className={`${pathname === ('/forgot-password') ? 'active' : ''}`}>
												<Link to="/forgot-password">Forgot Password</Link>
											</li>
										</ul>
									</li>
									<li className={`has-submenu ${pathname === ('/blog-grid') ? 'active' : ''}`}>
										<Link to="">Blog <FontAwesomeIcon icon={faChevronDown} /></Link>
										<ul className="submenu">
											<li className={`${pathname === ('/blog-grid') ? 'active' : ''}`}>
												<Link to="/blog-grid">Blog Grid</Link>
											</li>
										</ul>
									</li>
									<li className="login-link">
										<Link to="/login">Login / Signup</Link>
									</li>
								</ul>
							</div>

							<ul className="nav header-navbar-rht">
								{(pathname === ('/') || pathname === ('/login') || pathname === ('/register') ?
									(
										<ul>
											<li className="nav-item contact-item">
												<FontAwesomeIcon icon={faSearch} onClick={() => this.showIp()} />

												{this.state.inputShow === true &&
													(
														<form id="showForm" className="formShow">
															<input type="text" placeholder="Search" />
														</form>
													)}
											</li>
											<li className="nav-item">
												<Link to="/login" className="nav-link header-login">
													<FontAwesomeIcon icon={faUser} />
													Login / Signup
												</Link>
											</li>
											<li>
												<Link to="/checkout"><FontAwesomeIcon icon={faShoppingCart} className="sp-cart" /></Link>
											</li>
										</ul>
									) :
									(
										<li className="nav-item dropdown has-arrow logged-item user-listdrop">
											<Dropdown>
												<Dropdown.Toggle variant="light" id="dropdown-basic">
													<span className="user-img">
														<img className="rounded-circle" src={UserIcon} width="31" alt="Ryan Taylor" />
													</span>
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<Dropdown.Item href="">
														<div className="user-header">
															<div className="avatar avatar-sm">
																<img src={UserIcon} alt="User Image" className="avatar-img rounded-circle" />
															</div>
															<div className="user-text">
																<h6>Ruth Smith</h6>
																<p className="text-muted mb-0">Teacher</p>
															</div>
														</div>
													</Dropdown.Item>
													<Dropdown.Item href="/teacher-dashboard">
														Dashboard
													</Dropdown.Item>
													<Dropdown.Item href="/teacher-profile-settings">
														Profile Settings
													</Dropdown.Item>
													<Dropdown.Item href="/">
														Logout
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</li>
									))}
							</ul>
						</nav>
					</header>
				</section>

				{/* Header */}
			</div>

		)
	}
}

export { Header };