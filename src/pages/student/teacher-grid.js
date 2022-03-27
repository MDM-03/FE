import React from 'react';
import Map from "./map";
import { Link } from 'react-router-dom';

// Import Images
import UserImg1 from '../../assets/img/teachers/teacher-01.jpg';
import UserImg2 from '../../assets/img/teachers/teacher-02.jpg';
import UserImg3 from '../../assets/img/teachers/teacher-03.jpg';
import UserImg4 from '../../assets/img/teachers/teacher-04.jpg';
import UserImg5 from '../../assets/img/teachers/teacher-05.jpg';
import UserImg6 from '../../assets/img/teachers/teacher-06.jpg';
import UserImg7 from '../../assets/img/teachers/teacher-07.jpg';
import UserImg8 from '../../assets/img/teachers/teacher-08.jpg';
import UserImg9 from '../../assets/img/teachers/teacher-09.jpg';
import UserImg10 from '../../assets/img/teachers/teacher-10.jpg';
import UserImg11 from '../../assets/img/teachers/teacher-11.jpg';
import UserImg12 from '../../assets/img/teachers/teacher-12.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faThLarge, faBars, faBookmark, faCheckCircle, faStar, faClock, faMoneyBillAlt, faInfoCircle } from '@fortawesome/fontawesome-free-solid';

const data = [{
	id:"01",
	doc_name:"Ruby Perrin",
	"speciality":"Masters Degree",
	"address":"Florida, USA",
	"next_available":"Available on Fri, 22 Mar",
	"amount":"$300 - $1000",
	lat:-33.847927,
	lng:150.6517938,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"17",
	"image":UserImg1
	}, {
		
	id:"02",
	doc_name:"Ruth Smith",
	"speciality":"Bachelors Degree",
	"address":"Newyork, USA",
	"next_available":"Available on Fri, 23 Mar",
	"amount":"$50 - $300",
	lat:-37.9722342,
	lng:144.7729561,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"35",
	"image":UserImg2
	}, {
	id:"03",
	doc_name:"Deborah Angel",
	"speciality":"Masters Degree",
	"address":"Georgia, USA",
	"next_available":"Available on Fri, 24 Mar",
	"amount":"$100 - $400",
	lat:-31.9546904,
	lng:112.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"27",
	"image":UserImg3
	}, {
	id:"04",
	doc_name:"Sofia Brient",
	"speciality":"Masters Degree",
	"address":"Louisiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $250",
	lat:-32.9546904,
	lng:115.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"4",
	"image":UserImg4
	}, {
	id:"05",
	doc_name:"Marvin Campbell",
	"speciality":"Masters Degree",
	"address":"Michigan, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$50 - $700",
	lat:-34.9546904,
	lng:125.8650292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"66",
	"image":UserImg5
	}, {
	id:"06",
	doc_name:"Katharine Berthold",
	"speciality":"Bachelors Degree",
	"address":"Texas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $500",
	lat:-35.9546904,
	lng:153.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"52",
	"image":UserImg6
	}, {
	id:"07",
	doc_name:"Linda Tobin",
	"speciality":"Masters Degree",
	"address":"Kansas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $1000",
	lat:-36.9548904,
	lng:105.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"43",
	"image":UserImg7
	}, {
	id:"08",
	doc_name:"Paul Richard",
	"speciality":"Masters Degree",
	"address":"California, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $400",
	lat:-38.9556904,
	lng:110.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"49",
	"image":UserImg8
	}, {
	id:"09",
	doc_name:"John Gibbs",
	"speciality":"Bachelors Degree",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$500 - $2500",
	lat:-33.2191198,
	lng:120.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"112",
	"image":UserImg9
	}, {
	id:"10",
	doc_name:"Olga Barlow",
	"speciality":"Masters Degree",
	"address":"Montana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$75 - $250",
	lat:-37.1382198,
	lng:115.9359404,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"65",
	"image":UserImg10
	}, {
	id:"11",
	doc_name:"Julia Washington",
	"speciality":"Bachelors Degree",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$275 - $450",
	lat:-31.1546904,
	lng:145.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"5",
	"image":UserImg11
	}, {
	id:"12",
	doc_name:"Shaun Aponte",
	"speciality":"Masters Degree",
	"address":"Indiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $350",
	lat:-35.1586194,
	lng:155.8350292,
	"icons":"default",
	"profile_link":"/teacher-profile",
	"total_review":"5",
	"image":UserImg12
	}
];

class TeacherGrid extends React.Component {

	componentDidMount(){
        document.body.classList.add('map-page');
    }
    componentWillUnmount(){
        document.body.classList.remove('map-page');
    }
	
    render() {
        return (
			<div>
				{/* Page Content */}
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
								<div className="row align-items-center mb-4">
									<div className="col-md-6 col">
										<h4>2245 Teachers found</h4>
									</div>

									<div className="col-md-6 col-auto">
										<div className="view-icons ">
											<Link to="/map-grid" className="grid-view active"><FontAwesomeIcon icon={faThLarge} /></Link>
											<Link to="/map-list" className="list-view"><FontAwesomeIcon icon={faBars} /></Link>
										</div>
										<div className="sort-by d-sm-block d-none">
											<span className="sortby-fliter">
												<select className="select">
													<option>Sort by</option>
													<option className="sorting">Rating</option>
													<option className="sorting">Popular</option>
													<option className="sorting">Latest</option>
													<option className="sorting">Free</option>
												</select>
											</span>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg1} />
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
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $300 - $1000 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg2} />
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
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $50 - $300 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg3} />
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
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $100 - $400 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg4} />
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
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faMoneyBillAlt} /> $150 - $250 <FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg5} />
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
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg6} />
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
												<p className="speciality">Bachelors Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
											<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg7} />
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
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg8} />
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
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg9} />
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
												<p className="speciality">Bachelors Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg10} />
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
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg11} />
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
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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
									
									<div className="col-sm-6 col-md-4 col-xl-6">
										<div className="profile-widget">
											<div className="teacher-img">
												<Link to="/teacher-profile">
													<img className="img-fluid" alt="User Image" src={UserImg12} />
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
												<p className="speciality">Masters Degree</p>
												<div className="rating">
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
													<FontAwesomeIcon icon={faStar} className='filled' />
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
														<FontAwesomeIcon icon={faInfoCircle} data-toggle="tooltip" title="Lorem Ipsum" />
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

								<div className="load-more text-center">
									<Link to="#" className="btn btn-primary btn-sm">Load More</Link>	
								</div>
							</div>

							<div className="col-xl-6 col-lg-12 map-right">
								<div id="map" className="map-listing">
									<div style={{ height: '100vh', width: '100%' }}>
										<Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
									</div>
								</div>

								{/* Map */}
							</div>

						</div>

						
					</div>

				</div>		
				{/* Page Content */}
			</div>
        )
    }
}
export { TeacherGrid };