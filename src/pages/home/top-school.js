import React from 'react';
import { Link } from 'react-router-dom';

// Import Slick Slider
import Slider from "react-slick";

// Import Images
import SchoolImg1 from '../../assets/img/our-top-school-01.png';
import SchoolImg2 from '../../assets/img/our-top-school-02.png';
import SchoolImg3 from '../../assets/img/our-top-school-03.png';
import StuImg1 from '../../assets/img/students/student8.jpg';
import StuImg2 from '../../assets/img/students/student2.jpg';
import StuImg3 from '../../assets/img/students/student3.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class TopSchool extends React.Component {

    state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    }

    render() {

        var settings = {
            dots: false,
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
        };

        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <Slider {...settings} className="top-school-slider slider">
                            {/* Slider Item */}
                            <div className="top-school-item">
                                <div className="card">
                                    <Link to="/map-list">
                                        <img src={SchoolImg1} className="card-img-top" alt="Top School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="title-rate">
                                            <h5 className="card-title"> <Link to="/map-list">Zebras Tots </Link></h5>
                                            <div className="ratings">
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                            </div>
                                        </div>
                                            
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                            <div>
                                                <div className="avatar-group">
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg1} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg2} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg3} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>											  
                                    </div>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="top-school-item">
                                <div className="card">
                                    <Link to="/map-list">
                                        <img src={SchoolImg2} className="card-img-top" alt="Top School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="title-rate">
                                            <h5 className="card-title"><Link to="/map-list">Sherry Maple</Link></h5>
                                            <div className="ratings">
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                            </div>
                                        </div>
                                            
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                            <div>
                                                <div className="avatar-group">
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg1} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg2} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg3} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>											  
                                    </div>
                                </div>
                            </div>                            
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="top-school-item">
                                <div className="card">
                                    <Link to="/map-list">
                                        <img src={SchoolImg3} className="card-img-top" alt="Top School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="title-rate">
                                            <h5 className="card-title"><Link to="/map-list">Riggles</Link></h5>
                                            <div className="ratings">
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                            </div>
                                        </div>
                                            
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                            <div>
                                                <div className="avatar-group">
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg1} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg2} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg3} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>											  
                                    </div>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="top-school-item">
                                <div className="card">
                                    <Link to="/map-list">
                                        <img src={SchoolImg1} className="card-img-top" alt="Top School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="title-rate">
                                            <h5 className="card-title"> <Link to="/map-list">Zebras Tots </Link></h5>
                                            <div className="ratings">
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-selected" />
                                                <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                            </div>
                                        </div>
                                            
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                            <div>
                                                <div className="avatar-group">
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg1} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg2} />
                                                    </div>
                                                    <div className="avatar">
                                                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={StuImg3} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>											  
                                    </div>
                                </div>
                            </div>
                            {/* Slider Item */}
                        </Slider>
                    </div>
                </div>                
            </div>
        )
    }
}
export { TopSchool };