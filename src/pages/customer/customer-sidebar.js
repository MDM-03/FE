import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import StudentImg from '../../assets/img/students/student.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookmark, faColumns, faCalendarCheck, faLock, faMapMarkerAlt, faSignOutAlt, faUserCog } from '@fortawesome/fontawesome-free-solid';

class CustomerSidebar extends React.Component {
    render() {
        return(
            <div>
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="#" className="booking-techers-img">
                                <img src={StudentImg} alt="User Image" />
                            </Link>
                            <div className="profile-det-info">
                                <h3>Julie Sterns</h3>
                                <div className="student-details">
                                    <h5><FontAwesomeIcon icon={faBirthdayCake} /> 24 Jul 1997, 24 years</h5>
                                    <h5 className="mb-0"><FontAwesomeIcon icon={faMapMarkerAlt} /> Newyork, USA</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to="/student-dashboard">
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
                                    <Link to="/favourites">
                                        <FontAwesomeIcon icon={faBookmark} />
                                        <span>Favourites</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile-settings">
                                        <FontAwesomeIcon icon={faUserCog} />
                                        <span>Profile Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/change-password">
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
export { CustomerSidebar };