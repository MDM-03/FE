import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import SchoolImg1 from '../../assets/img/our-top-school-01.png';
import SchoolImg2 from '../../assets/img/our-top-school-02.png';
import SchoolImg3 from '../../assets/img/our-top-school-03.png';
import StuImg from '../../assets/img/students/student.jpg';


class FamousSchool extends React.Component {

    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="media">
                            <img src={SchoolImg1} className="mr-3 right-img" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Zebras Tots</h5>
                                <h4>8:00 AM - 10:00 PM</h4>
                                <p>New York 56 Glassford Street </p>
                                <img src={StuImg} className="user-img" alt="User Image" /> <span>Hilary</span>
                            </div>
                            <div className="media-right">
                                <h4>$200 / Day</h4>
                                <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="media">
                            <img src={SchoolImg2} className="mr-3 right-img" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Sherry Maple</h5>
                                <h4>8:00 AM - 10:00 PM</h4>
                                <p>New York 56 Glassford Street </p>
                                <img src={StuImg} className="user-img" alt="User Image" /> <span>Hilary</span>
                            </div>
                            <div className="media-right">
                                <h4>$200 / Day</h4>
                                <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="media">
                            <img src={SchoolImg3} className="mr-3 right-img" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Riggles</h5>
                                <h4>8:00 AM - 10:00 PM</h4>
                                <p>New York 56 Glassford Street </p>
                                <img src={StuImg} className="user-img" alt="User Image" /> <span>Hilary</span>
                            </div>
                            <div className="media-right">
                                <h4>$200 / Day</h4>
                                <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="media">
                            <img src={SchoolImg1} className="mr-3 right-img" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Zebras Tots</h5>
                                <h4>8:00 AM - 10:00 PM</h4>
                                <p>New York 56 Glassford Street </p>
                                <img src={StuImg} className="user-img" alt="User Image" /> <span>Hilary</span>
                            </div>
                            <div className="media-right">
                                <h4>$200 / Day</h4>
                                <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="media">
                            <img src={SchoolImg2} className="mr-3 right-img" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Sherry Maple</h5>
                                <h4>8:00 AM - 10:00 PM</h4>
                                <p>New York 56 Glassford Street </p>
                                <img src={StuImg} className="user-img" alt="User Image" /> <span>Hilary</span>
                            </div>
                            <div className="media-right">
                                <h4>$200 / Day</h4>
                                <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="media">
                            <img src={SchoolImg3} className="mr-3 right-img" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Riggles</h5>
                                <h4>8:00 AM - 10:00 PM</h4>
                                <p>New York 56 Glassford Street </p>
                                <img src={StuImg} className="user-img" alt="User Image" /> <span>Hilary</span>
                            </div>
                            <div className="media-right">
                                <h4>$200 / Day</h4>
                                <Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}
export { FamousSchool };