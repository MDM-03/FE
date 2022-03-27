import React from 'react';
import { Link } from 'react-router-dom';

// Import Slick Slider
import Slider from "react-slick";

// Import Images
import TeacherImg1 from '../../assets/img/top-teacher-01.png';
import TeacherImg2 from '../../assets/img/top-teacher-02.png';
import TeacherImg3 from '../../assets/img/top-teacher-03.png';
import TeacherImg4 from '../../assets/img/top-teacher-04.png';
import TeacherImg5 from '../../assets/img/top-teacher-05.png';
import ChildIcon from '../../assets/img/children-icon.png';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid';

class TopTeacher extends React.Component {

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
            slidesToShow: 5,
            slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 3
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
                        <Slider {...settings} className="top-teacher-slider slider">
                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/teacher-profile">
                                        <img src={TeacherImg1} alt="Featured School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                </div>
                                <div className="featured-text mt-3">
                                    <div className="ratings mb-2">
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                    </div>
                                    <Link to="/teacher-profile" className="featured-title">Amenda HUGES</Link>
                                    <h5>Sherry MapleU</h5>
                                    <h6 className="child-text"><img src={ChildIcon} alt="Childcare" /> 400 Childrens</h6>
                                    <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/teacher-profile">
                                        <img src={TeacherImg2} alt="Featured School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                </div>
                                <div className="featured-text mt-3">
                                    <div className="ratings mb-2">
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                    </div>
                                    <Link to="/teacher-profile" className="featured-title">KRISZTEN</Link>
                                    <h5>Bee_4_Babies</h5>
                                    <h6 className="child-text"><img src={ChildIcon} alt="Childcare" /> 400 Childrens</h6>
                                    <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/teacher-profile">
                                        <img src={TeacherImg3} alt="Featured School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                </div>
                                <div className="featured-text mt-3">
                                    <div className="ratings mb-2">
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                    </div>
                                    <Link to="/teacher-profile" className="featured-title">HARDLEY BRADEN</Link>
                                    <h5>Little Learners</h5>
                                    <h6 className="child-text"><img src={ChildIcon} alt="Childcare" /> 400 Childrens</h6>
                                    <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/teacher-profile">
                                        <img src={TeacherImg4} alt="Featured School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                </div>
                                <div className="featured-text mt-3">
                                    <div className="ratings mb-2">
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                    </div>
                                    <Link to="/teacher-profile" className="featured-title">NORMAN SOLYTU</Link>
                                    <h5>Kool story Books</h5>
                                    <h6 className="child-text"><img src={ChildIcon} alt="Childcare" /> 400 Childrens</h6>
                                    <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/teacher-profile">
                                        <img src={TeacherImg5} alt="Featured School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                </div>
                                <div className="featured-text mt-3">
                                    <div className="ratings mb-2">
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                    </div>
                                    <Link to="/teacher-profile" className="featured-title">KAMSKI NOOE</Link>
                                    <h5>Whitehill Kings Farm</h5>
                                    <h6 className="child-text"><img src={ChildIcon} alt="Childcare" /> 400 Childrens</h6>
                                    <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/teacher-profile">
                                        <img src={TeacherImg1} alt="Featured School" />
                                    </Link>										
                                    <div className="price-text">
                                        <h4>$40.00 / HR</h4>
                                    </div>
                                </div>
                                <div className="featured-text mt-3">
                                    <div className="ratings mb-2">
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-selected" />
                                        <FontAwesomeIcon icon={faStar} className="star-deselected" />
                                    </div>
                                    <Link to="/teacher-profile" className="featured-title">Amenda HUGES</Link>
                                    <h5>Sherry MapleU</h5>
                                    <h6 className="child-text"><img src={ChildIcon} alt="Childcare" /> 400 Childrens</h6>
                                    <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
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
export { TopTeacher };