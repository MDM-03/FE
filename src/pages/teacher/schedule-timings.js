import React from 'react';
import { Link } from 'react-router-dom';
// Import Sidebar
import { TeacherSidebar } from './teacher-sidebar';

import Slot from './slot';

// Import Components
import { Tabs, Tab, Modal } from "react-bootstrap";

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusCircle, faTimes } from '@fortawesome/fontawesome-free-solid';

class ScheduleTimings extends React.Component {
	constructor(props){
        super(props);
        this.state={
            key: 1,
            activeModal: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

 	handleSelect (key) {
        this.setState({key})
    }

    openModal = (id) => {
        this.setState({activeModal: id});
    }
	
	handleCloseModal = () => {
		this.setState({activeModal: false}, () => {}); 
	};

    render() {
        return (
            <div>
                {/* Breadcrumb */}
				<div className="breadcrumb-bar">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-md-12 col-12">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Schedule Timings</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Schedule Timings</h2>
							</div>
						</div>
					</div>
				</div>
				{/* Breadcrumb */}

                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                                <TeacherSidebar />
                            </div>
                            <div className="col-md-7 col-lg-8 col-xl-9">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Schedule Timings</h4>
                                                <div className="profile-box">
                                                    <div className="row">

                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label>Timing Slot Duration</label>
                                                                <select className="select form-control">
                                                                    <option>-</option>
                                                                    <option>15 mins</option>
                                                                    <option defaultValue="selected">30 mins</option>
                                                                    <option>45 mins</option>
                                                                    <option>1 Hour</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="card schedule-widget mb-0">
                                                                <div className="schedule-header">
                                                                    <div className="schedule-nav">
                                                                        <Tabs
                                                                            className="tab-view"
                                                                            activeKey={this.state.key}
                                                                            onSelect={this.handleSelect}
                                                                            id="controlled-tab-example"
                                                                        >

																			<Tab className="nav-item" eventKey={1} title="Sunday">
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Time Slots</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}>
																					<FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Add Slot</a>
																				</h4>
																				<p className="text-muted mb-0">Not Available</p>      
																			</Tab>

                                                        					<Tab className="nav-item" eventKey={2} title="Monday">
                                                        						<h4 className="card-title d-flex justify-content-between">
																					<span>Time Slots</span> 
																					<a className="edit-link" data-toggle="modal" href="#edit_time_slot" onClick={()=>this.openModal('edit')}><FontAwesomeIcon icon={faEdit} className="mr-1" />Edit</a>
																				</h4>			
																
																				<div className="teacher-times">
																					<div className="teacher-slot-list">
																						8:00 pm - 11:30 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																					<div className="teacher-slot-list">
																						11:30 pm - 1:30 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																					<div className="teacher-slot-list">
																						3:00 pm - 5:00 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																					<div className="teacher-slot-list">
																						6:00 pm - 11:00 pm
																						<Link to="#0" className="delete_schedule">
																							<FontAwesomeIcon icon={faTimes} />
																						</Link>
																					</div>
																				</div>	
                                                        					</Tab>

																			<Tab className="nav-item" eventKey={3} title="Tuesday"> 
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Time Slots</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Add Slot</a>
																				</h4>
																				<p className="text-muted mb-0">Not Available</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={4} title="Wednesday"> 
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Time Slots</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Add Slot</a>
																				</h4>
																				<p className="text-muted mb-0">Not Available</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={5} title="Thurday"> 
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Time Slots</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Add Slot</a>
																				</h4>
																				<p className="text-muted mb-0">Not Available</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={6} title="Friday">
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Time Slots</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Add Slot</a>
																				</h4>
																				<p className="text-muted mb-0">Not Available</p>
																			</Tab>

																			<Tab className="nav-item" eventKey={7} title="Saturday">
																				<h4 className="card-title d-flex justify-content-between">
																					<span>Time Slots</span> 
																					<a className="edit-link" data-toggle="modal" href="#add_time_slot" onClick={()=>this.openModal('add')}><FontAwesomeIcon icon={faPlusCircle} className="mr-1" /> Add Slot</a>
																				</h4>
																				<p className="text-muted mb-0">Not Available</p>
																			</Tab>
                                                                        </Tabs>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for add slot*/}
				<Modal show={this.state.activeModal === 'add'} centered>
                    <Modal.Header>
                        <h5 className="modal-title">Add Time Slots</h5>
						<button type="button" className="close" onClick={()=>this.openModal()}><span aria-hidden="true">&times;</span></button>
                    </Modal.Header>
                    <Modal.Body>
                    	<form>
				         	<Slot />
							<div className="submit-section text-center">
								<button className="btn btn-primary submit-btn" onClick={this.handleCloseModal}>Save Changes</button>
							</div>
						</form>
                    </Modal.Body>
                 </Modal>  

                 {/* Modal for edit slot*/}
				<Modal show={this.state.activeModal === 'edit'} centered>
                    <Modal.Header>
                      <h5 className="modal-title">Edit Time Slots</h5>
					  <button type="button" className="close" onClick={()=>this.openModal()}><span aria-hidden="true">&times;</span></button>
                    </Modal.Header>
                    <Modal.Body>
                    	<form>
					      	<Slot />
							
							<div className="submit-section text-center">
								<button type="submit" className="btn btn-primary submit-btn" onClick={this.handleCloseModal}>Save Changes</button>
							</div>
						</form>
                    </Modal.Body>
                </Modal>	 	
            </div>
        );
    }
}
export { ScheduleTimings };