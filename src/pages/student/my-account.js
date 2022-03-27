import React from 'react';
import { Link } from 'react-router-dom';

import { StudentSidebar } from './student-sidebar';

class MyAccount extends React.Component {
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
                                        <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Change Password</h2>
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
                                    <div className="card-body">
                                        <div className="my-acc">
                                            <p className="acc-detail">Account Details</p>
                                            <p>Update your profile and the information we use to customize your experience</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-12">
                                                {/* Profile Settings Form */}
                                                <form>
                                                    <div className="row form-row">
                                                        
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <label>Email ID</label>
                                                                <input type="email" className="form-control" defaultValue="julie@example.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <label>Mobile</label>
                                                                <input type="text" defaultValue="+1 202-555-0125" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                            <label>Address</label>
                                                                <input type="text" className="form-control" defaultValue="806 Twin Willow Lane" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <label>Date of Birth</label>
                                                                <input type="date" className="form-control datetimepicker" defaultValue="24-07-1983" />
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="submit-section">
                                                        <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                                    </div>
                                                </form>
                                                {/* Profile Settings Form */}
                                            
                                                {/* Change Password Form */}
                                                <form className="mt-5">
                                                    <div className="form-group">
                                                        <label>Old Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Confirm Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="submit-section">
                                                        <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                                    </div>
                                                </form>
                                                {/* Change Password Form */}
                                                
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
export { MyAccount };