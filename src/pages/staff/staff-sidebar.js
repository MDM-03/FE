import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import TeacherImg from '../../assets/img/teachers/teacher-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faColumns, faComments, faFileAlt, faHourglassStart, faLock, faShareAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';

class StaffSidebar extends React.Component {
    render() {
        return(
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-techers-img">
                                <img src={TeacherImg} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3>Ruth Smith</h3>
                                
                                <div className="student-details">
                                    <h5 className="mb-0">Teacher</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/staff-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register-appointments">
                                        <FontAwesomeIcon icon={faCalendarCheck} />
                                        <span>Register Appointments</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Profile Sidebar */}
            </div>
        )
    }
}
export { StaffSidebar };