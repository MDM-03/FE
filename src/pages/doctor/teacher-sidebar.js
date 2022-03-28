import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import TeacherImg from '../../assets/img/teachers/teacher-thumb-02.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faColumns, faComments, faFileAlt, faHourglassStart, faLock, faShareAlt, faSignOutAlt, faStar, faUser, faUserCog } from '@fortawesome/fontawesome-free-solid';

class TeacherSidebar extends React.Component {
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
                                    <Link to="/teacher-dashboard">
                                        <FontAwesomeIcon icon={faColumns} />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/appointments">
                                        <FontAwesomeIcon icon={faCalendarCheck} />
                                        <span>Appointments</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/my-students">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>My Students</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/invoices">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Invoices</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/teacher-profile-settings">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>Profile Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/teacher-change-password">
                                        <FontAwesomeIcon icon={faLock} />
                                        <span>Change Password</span>
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
export { TeacherSidebar };