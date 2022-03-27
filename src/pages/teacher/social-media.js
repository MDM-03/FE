import React from 'react';
// Import Sidebar
import { TeacherSidebar } from './teacher-sidebar';

class SocialMedia extends React.Component {
	
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
										<li className="breadcrumb-item active" aria-current="page">Social Media</li>
									</ol>
								</nav>
								<h2 className="breadcrumb-title">Social Media</h2>
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
								<TeacherSidebar />
							</div>

							<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card">
									<div className="card-body">
									
										{/* Social Form */}
										<form>                                                                                           
											<div className="row">
												<div className="col-md-12 col-lg-8">
													<div className="form-group">
														<label>Facebook URL</label>
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12 col-lg-8">
													<div className="form-group">
														<label>Twitter URL</label>
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12 col-lg-8">
													<div className="form-group">
														<label>Instagram URL</label>
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12 col-lg-8">
													<div className="form-group">
														<label>Pinterest URL</label>
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12 col-lg-8">
													<div className="form-group">
														<label>Linkedin URL</label>
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-md-12 col-lg-8">
													<div className="form-group">
														<label>Youtube URL</label>
														<input type="text" className="form-control" />
													</div>
												</div>
											</div>
											<div className="submit-section">
												<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
											</div>
										</form>
										{/* Social Form */}
										
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
export { SocialMedia };