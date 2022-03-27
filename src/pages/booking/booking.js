import React from 'react';
import { Link } from 'react-router-dom';

import TeacherImg from '../../assets/img/teachers/teacher-thumb-02.jpg';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faChevronDown, faChevronLeft, faChevronRight, faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';

class Booking extends React.Component {
    render() {
        return(
            <div>
                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Booking</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Booking</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="booking-teacher-info">
                                            <Link to="/teacher-profile" className="booking-techers-img">
                                                <img src={TeacherImg} alt="User Image" />
                                            </Link>
                                            <div className="booking-info">
                                                <h4><Link to="/teacher-profile">Ruth Smith</Link></h4>
                                                <div className="rating">
                                                    <FontAwesomeIcon icon={faStar} className="filled" />
                                                    <FontAwesomeIcon icon={faStar} className="filled" />
                                                    <FontAwesomeIcon icon={faStar} className="filled" />
                                                    <FontAwesomeIcon icon={faStar} className="filled" />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className="d-inline-block average-rating">35</span>
                                                </div>
                                                <p className="text-muted mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-6">
                                <h4 className="mb-1">11 November 2020</h4>
                                <p className="text-muted">Monday</p>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6 text-sm-right">
                                <div className="bookingrange btn btn-white btn-sm mb-3">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                    <DateRangePicker
										initialSettings={{
											endDate: new Date('2020-08-11T12:30:00.000Z'),
											ranges: {
                                                Today: [
                                                    new Date('2020-08-10T04:57:17.076Z'),
                                                    new Date('2020-08-10T04:57:17.076Z')
                                                ],
                                                Yesterday: [
                                                    new Date('2020-08-09T04:57:17.076Z'),
                                                    new Date('2020-08-09T04:57:17.076Z')
												],
												'Last 30 Days': [
                                                    new Date('2020-07-12T04:57:17.076Z'),
                                                    new Date('2020-08-10T04:57:17.076Z')
												],
												'Last 7 Days': [
                                                    new Date('2020-08-04T04:57:17.076Z'),
                                                    new Date('2020-08-10T04:57:17.076Z')
												],
												'Last Month': [
                                                    new Date('2020-06-30T18:30:00.000Z'),
                                                    new Date('2020-07-31T18:29:59.999Z')
												],
												'This Month': [
                                                    new Date('2020-07-31T18:30:00.000Z'),
                                                    new Date('2020-08-31T18:29:59.999Z')
												]
											},										
											startDate: new Date('2020-08-10T04:30:00.000Z'),
											timePicker: false
										}}
										>
                                        <input
                                            className="form-control col-4 input-range"
                                            type="text"
                                            custom="input-range"
                                        />
									</DateRangePicker>
                                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                                </div>
                            </div>
                        </div>

                        {/* Schedule Widget */}
                        <div className="card booking-schedule schedule-widget">
                        
                            {/* Schedule Header */}
                            <div className="schedule-header">
                                <div className="row">
                                    <div className="col-md-12">
                                    
                                        {/* Day Slot */}
                                        <div className="day-slot">
                                            <ul>
                                                <li className="left-arrow">
                                                    <Link to="#">
                                                        <FontAwesomeIcon icon={faChevronLeft} />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <span>Mon</span>
                                                    <span className="slot-date">11 Nov <small className="slot-year">2020</small></span>
                                                </li>
                                                <li>
                                                    <span>Tue</span>
                                                    <span className="slot-date">12 Nov <small className="slot-year">2020</small></span>
                                                </li>
                                                <li>
                                                    <span>Wed</span>
                                                    <span className="slot-date">13 Nov <small className="slot-year">2020</small></span>
                                                </li>
                                                <li>
                                                    <span>Thu</span>
                                                    <span className="slot-date">14 Nov <small className="slot-year">2020</small></span>
                                                </li>
                                                <li>
                                                    <span>Fri</span>
                                                    <span className="slot-date">15 Nov <small className="slot-year">2020</small></span>
                                                </li>
                                                <li>
                                                    <span>Sat</span>
                                                    <span className="slot-date">16 Nov <small className="slot-year">2020</small></span>
                                                </li>
                                                <li>
                                                    <span>Sun</span>
                                                    <span className="slot-date">17 Nov <small className="slot-year">2020</small></span>
                                                </li>
                                                <li className="right-arrow">
                                                    <Link to="#">
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Day Slot */}
                                        
                                    </div>
                                </div>
                            </div>
                            {/* Schedule Header */}
                            
                            {/* Schedule Content */}
                            <div className="schedule-cont">
                                <div className="row">
                                    <div className="col-md-12">
                                    
                                        {/* Time Slot */}
                                        <div className="time-slot">
                                            <ul className="clearfix">
                                                <li>
                                                    <Link to="#" className="timing">
                                                        <span>9:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>10:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>11:00</span> <span>AM</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="timing">
                                                        <span>9:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>10:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>11:00</span> <span>AM</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="timing">
                                                        <span>9:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>10:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>11:00</span> <span>AM</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="timing">
                                                        <span>9:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>10:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>11:00</span> <span>AM</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="timing">
                                                        <span>9:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing selected">
                                                        <span>10:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>11:00</span> <span>AM</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="timing">
                                                        <span>9:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>10:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>11:00</span> <span>AM</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="timing">
                                                        <span>9:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>10:00</span> <span>AM</span>
                                                    </Link>
                                                    <Link to="#" className="timing">
                                                        <span>11:00</span> <span>AM</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Time Slot */}
                                        
                                    </div>
                                </div>
                            </div>
                            {/* Schedule Content */}
                            
                        </div>
                        {/* Schedule Widget */}
                        
                        {/* Submit Section */}
                        <div className="submit-section proceed-btn text-right">
                            <Link to="/checkout" className="btn btn-primary submit-btn">Proceed to Pay</Link>
                        </div>
                        {/* Submit Section */}
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { Booking };