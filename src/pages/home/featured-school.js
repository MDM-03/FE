import React from 'react';
import { Link } from 'react-router-dom';

// Import Slick Slider
import Slider from "react-slick";

// Import Images
import FeauturedImg1 from '../../assets/img/featured-school-01.png';
import FeauturedImg2 from '../../assets/img/featured-school-02.png';
import FeauturedImg3 from '../../assets/img/featured-school-03.png';
import FeauturedImg4 from '../../assets/img/featured-school-04.png';
import FeauturedImg5 from '../../assets/img/featured-school-05.png';

class FeaturedSchool extends React.Component {

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
                        <Slider {...settings} className="featured-school-slider slider">
                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/map-list">
                                        <img src={FeauturedImg1} alt="Featured School" />
                                    </Link>										
                                </div>
                                <div className="featured-text mt-4">
                                    <Link to="/map-list" className="featured-title">Zebras Tots</Link>
                                    <h5>400 teachers</h5>
                                    <h6>$20 / hR</h6>
                                    <Link to="/booking" className="btn btn-outline-primary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/map-list">
                                        <img src={FeauturedImg2} alt="Featured School" />
                                    </Link>										
                                </div>
                                <div className="featured-text mt-4">
                                    <Link to="/map-list" className="featured-title">Cheeky Treasures</Link>
                                    <h5>400 teachers</h5>
                                    <h6>$20 / hR</h6>
                                    <Link to="/booking" className="btn btn-outline-primary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/map-list">
                                        <img src={FeauturedImg3} alt="Featured School" />
                                    </Link>										
                                </div>
                                <div className="featured-text mt-4">
                                    <Link to="/map-list" className="featured-title">Sherry Maple</Link>
                                    <h5>400 teachers</h5>
                                    <h6>$20 / hR</h6>
                                    <Link to="/booking" className="btn btn-outline-primary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/map-list">
                                        <img src={FeauturedImg4} alt="Featured School" />
                                    </Link>										
                                </div>
                                <div className="featured-text mt-4">
                                    <Link to="/map-list" className="featured-title">Tsparks</Link>
                                    <h5>400 teachers</h5>
                                    <h6>$20 / hR</h6>
                                    <Link to="/booking" className="btn btn-outline-primary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/map-list">
                                        <img src={FeauturedImg5} alt="Featured School" />
                                    </Link>										
                                </div>
                                <div className="featured-text mt-4">
                                    <Link to="/map-list" className="featured-title">Riggles</Link>
                                    <h5>400 teachers</h5>
                                    <h6>$20 / hR</h6>
                                    <Link to="/booking" className="btn btn-outline-primary">Book Now</Link>
                                </div>
                            </div>
                            {/* Slider Item */}

                            {/* Slider Item */}
                            <div className="featured-item text-center">
                                <div className="featured-img">
                                    <Link to="/map-list">
                                        <img src={FeauturedImg1} alt="Featured School" />
                                    </Link>										
                                </div>
                                <div className="featured-text mt-4">
                                    <Link to="/map-list" className="featured-title">Zebras Tots</Link>
                                    <h5>400 teachers</h5>
                                    <h6>$20 / hR</h6>
                                    <Link to="/booking" className="btn btn-outline-primary">Book Now</Link>
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
export { FeaturedSchool };