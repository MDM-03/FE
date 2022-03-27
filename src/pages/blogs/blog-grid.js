import React from 'react';
import { Link } from 'react-router-dom';

// Import Blog Sidebar
import { BlogSidebar } from './blog-sidebar';

// Import Images
import BlogImg1 from '../../assets/img/blog/blog-01.jpg';
import TeacherThumb1 from '../../assets/img/teachers/teacher-thumb-01.jpg';
import BlogImg2 from '../../assets/img/blog/blog-02.jpg';
import TeacherThumb2 from '../../assets/img/teachers/teacher-thumb-02.jpg';
import BlogImg3 from '../../assets/img/blog/blog-03.jpg';
import TeacherThumb3 from '../../assets/img/teachers/teacher-thumb-03.jpg';
import BlogImg4 from '../../assets/img/blog/blog-04.jpg';
import TeacherThumb4 from '../../assets/img/teachers/teacher-thumb-04.jpg';
import BlogImg5 from '../../assets/img/blog/blog-05.jpg';
import TeacherThumb5 from '../../assets/img/teachers/teacher-thumb-05.jpg';
import BlogImg6 from '../../assets/img/blog/blog-06.jpg';
import TeacherThumb6 from '../../assets/img/teachers/teacher-thumb-06.jpg';
import BlogImg7 from '../../assets/img/blog/blog-07.jpg';
import TeacherThumb7 from '../../assets/img/teachers/teacher-thumb-07.jpg';
import BlogImg8 from '../../assets/img/blog/blog-08.jpg';
import TeacherThumb8 from '../../assets/img/teachers/teacher-thumb-08.jpg';
import BlogImg9 from '../../assets/img/blog/blog-09.jpg';
import TeacherThumb9 from '../../assets/img/teachers/teacher-thumb-09.jpg';
import BlogImg10 from '../../assets/img/blog/blog-10.jpg';
import TeacherThumb10 from '../../assets/img/teachers/teacher-thumb-10.jpg';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faClock } from '@fortawesome/fontawesome-free-solid';

class BlogGrid extends React.Component {
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
                                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Blog Grid</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}

                {/* Page Content */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="row blog-grid-row">
                                    <div className="col-md-6 col-sm-12">
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg1} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb1} alt="Post Author" /> <span>Ruby Perrin</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 4 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Dreams Childcare – Making your School painless visit?</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg2} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb2} alt="Post Author" /> <span>Ruth Smith</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 3 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">What are the benefits of Online Teacher Booking?</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}
                                    </div>

                                    <div className="col-md-6 col-sm-12">								
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg3} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb3} alt="Post Author" /> <span>Deborah Angel</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 3 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Benefits of consulting with an Online Teacher</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                        
                                    </div>

                                    <div className="col-md-6 col-sm-12">								
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg4} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb4} alt="Post Author" /> <span>Sofia Brient</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 2 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">5 Great reasons to use an Online Teacher</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                     
                                    </div>

                                    <div className="col-md-6 col-sm-12">								
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg5} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb5} alt="Post Author" /> <span>Marvin Campbell</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 1 Dec 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Online Teacher Appointment Scheduling</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                        
                                    </div>

                                    <div className="col-md-6 col-sm-12">								
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg6} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb6} alt="Post Author" /> <span>Katharine Berthold</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 30 Nov 2020</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Simple steps to make your counsellor visits exceptional!</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}
                                    </div>

                                    <div className="col-md-6 col-sm-12">								
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg7} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb7} alt="Post Author" /> <span>Linda Tobin</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 28 Mar 2021</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Choose your own Online Teacher Appointment</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                   
                                    </div>

                                    <div className="col-md-6 col-sm-12">								
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg8} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb8} alt="Post Author" /> <span>Paul Richard </span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 25 Mar 2021</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Simple steps to visit your counsellor today</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                        
                                    </div>

                                    <div className="col-md-6 col-sm-12">                                    
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg9} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb9} alt="Post Author" /> <span>John Gibbs</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 24 Mar 2021</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">5 Great reasons to use an Online Teacher</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                        
                                    </div>

                                    <div className="col-md-6 col-sm-12">                                    
                                        {/* Blog Post */}
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="/blog-details"><img className="img-fluid" src={BlogImg10} alt="Post Image" /></Link>
                                            </div>
                                            <div className="blog-content">
                                                <ul className="entry-meta meta-item">
                                                    <li>
                                                        <div className="post-author">
                                                            <Link to="/teacher-profile"><img src={TeacherThumb10} alt="Post Author" /> <span>Olga Barlow</span></Link>
                                                        </div>
                                                    </li>
                                                    <li><FontAwesomeIcon icon={faClock} /> 23 Mar 2021</li>
                                                </ul>
                                                <h3 className="blog-title"><Link to="/blog-details">Online Counselloral Programs</Link></h3>
                                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </div>
                                        {/* Blog Post */}                                        
                                    </div>
                                </div>

                                {/* Blog Pagination */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="blog-pagination">
                                            <nav>
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item disabled">
                                                        <Link to="#" className="page-link" tabIndex="-1"><FontAwesomeIcon icon={faAngleDoubleLeft} /></Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link to="#" className="page-link">1</Link>
                                                    </li>
                                                    <li className="page-item active">
                                                        <Link to="#" className="page-link">2 <span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link to="#" className="page-link">3</Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link to="#" className="page-link"><FontAwesomeIcon icon={faAngleDoubleRight} /></Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {/* Blog Pagination */}
                            </div>

                            {/* Blog Sidebar */}
                            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
                                <BlogSidebar />
                            </div>
                            {/* Blog Sidebar */}
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export { BlogGrid };