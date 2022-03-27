import React from 'react';
import { Link } from 'react-router-dom';

import { StudentSidebar } from './student-sidebar';

// Import Images
import StuImg from '../../assets/img/students/student.jpg';
import StuImg1 from '../../assets/img/students/student1.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/fontawesome-free-solid';

class StudentDependent extends React.Component {
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
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Dashboard</h2>
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
                                <div className="card">
                                    <div className="card-body dependent">
                                        <p className="help-title">WHO NEEDS HELP?</p>

                                        <div className="row justify-content-center">
                                            <div className="col-md-3">
                                                <img src={StuImg} className="dependent-img" alt="Student Image" />
                                                <p className="depedent-name pt-3 pl-4">Chad Whitney</p>
                                            </div>
                                            <div className="col-md-3">
                                                <img src={StuImg1} className="dependent-img" alt="Student Image" />
                                                <p className="depedent-name pt-3 pl-4">Alessandro</p>
                                            </div>
                                            <div className="col-md-3">
                                                <Link to="/student-add-dependent" target="_blank" className="add-dependent-link">
                                                    <FontAwesomeIcon icon={faPlus} className="add-dependent-img" />
                                                </Link>
                                                <p className="add-depedent-name pt-3">Add dependent</p>
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
export { StudentDependent };