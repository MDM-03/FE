import React from 'react';
import { Link } from 'react-router-dom';

import { StudentSidebar } from './student-sidebar';

// Import Images
import Img from '../../assets/img/teachers/teacher-01.jpg';
import Img1 from '../../assets/img/teachers/teacher-02.jpg';
import Img2 from '../../assets/img/teachers/teacher-03.jpg';
import Img3 from '../../assets/img/teachers/teacher-04.jpg';
import Img4 from '../../assets/img/teachers/teacher-05.jpg';
import Img5 from '../../assets/img/teachers/teacher-06.jpg';
import Img6 from '../../assets/img/teachers/teacher-07.jpg';
import Img7 from '../../assets/img/teachers/teacher-08.jpg';
import Img8 from '../../assets/img/teachers/teacher-09.jpg';
import Img9 from '../../assets/img/teachers/teacher-10.jpg';
import Img10 from '../../assets/img/teachers/teacher-11.jpg';
import Img11 from '../../assets/img/teachers/teacher-12.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookmark, faCheckCircle, faClock, faColumns, faComment, faInfoCircle, faLock, faMapMarkerAlt, faMoneyBillAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';


class Favourites extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Favourites</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Favourites</h2>
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
								<StudentSidebar />
							</div>
							<div className="col-md-7 col-lg-8 col-xl-9">
								<div className="row row-grid">
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Ruby Perrin</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<span className="d-inline-block average-rating">(17)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Florida, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
													<FontAwesomeIcon icon={faMoneyBillAlt} /> $300 - $1000 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img1} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Ruth Smith</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Bachelors Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(35)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $50 - $300 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img2} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Deborah Angel</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(27)</span>
												</div>
												<ul className="available-info">
													<li>
													<FontAwesomeIcon icon={faMapMarkerAlt} /> Georgia, USA
													</li>
													<li>
													<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $400 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img3} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Sofia Brient</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Bachelors Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(4)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Louisiana, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $150 - $250 <FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img4} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Marvin Campbell</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(66)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Michigan, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $50 - $700 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img5} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Katharine Berthold</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(52)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Texas, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $500 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img6} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Linda Tobin</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Bachelors Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(43)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Kansas, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $1000 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img7} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Paul Richard</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(49)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> California, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $400 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img8} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">John Gibbs</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Bachelor Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(112)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Oklahoma, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $500 - $2500 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img9} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Olga Barlow</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(65)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Montana, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $75 - $250 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img10} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Julia Washington</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Bachelors Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(5)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Oklahoma, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $275 - $450 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-md-6 col-lg-4 col-xl-3">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={Img11} />
												</Link>
												<Link to="#" className="fav-btn">
													<FontAwesomeIcon icon={faBookmark} />
												</Link>
											</div>
											<div className="pro-content">
												<h3 className="title">
													<Link to="/teacher-profile">Shaun Aponte</Link> 
													<FontAwesomeIcon icon={faCheckCircle} className="verified" />
												</h3>
												<p className="speciality">Master Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} className="filled" />
													<FontAwesomeIcon icon={faStar} />
													<span className="d-inline-block average-rating">(5)</span>
												</div>
												<ul className="available-info">
													<li>
														<FontAwesomeIcon icon={faMapMarkerAlt} /> Indiana, USA
													</li>
													<li>
														<FontAwesomeIcon icon={faClock} /> Available on Fri, 22 Mar
													</li>
													<li>
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $150 - $350 
														<FontAwesomeIcon icon={faInfoCircle} />
													</li>
												</ul>
												<div className="row row-sm">
													<div className="col-6">
														<Link to="/teacher-profile" className="btn view-btn">View Profile</Link>
													</div>
													<div className="col-6">
														<Link to="/booking" className="btn book-btn">Book Now</Link>
													</div>
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
export { Favourites };