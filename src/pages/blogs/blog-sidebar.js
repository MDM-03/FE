import React from 'react';
import { Link } from 'react-router-dom';

// Import Images
import BlogThumb1 from '../../assets/img/blog/blog-thumb-01.jpg';
import BlogThumb2 from '../../assets/img/blog/blog-thumb-02.jpg';
import BlogThumb3 from '../../assets/img/blog/blog-thumb-03.jpg';
import BlogThumb4 from '../../assets/img/blog/blog-thumb-04.jpg';
import BlogThumb5 from '../../assets/img/blog/blog-thumb-05.jpg';


// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid';

class BlogSidebar extends React.Component {
    render() {
        return(
            <div>
                {/* Search */}
                <div className="card search-widget">
                    <div className="card-body">
                        <form className="search-form">
                            <div className="input-group">
                                <input type="text" placeholder="Search..." className="form-control" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Search */}

                {/* Latest Posts */}
                <div className="card post-widget">
                    <div className="card-header">
                        <h4 className="card-title">Latest Posts</h4>
                    </div>
                    <div className="card-body">
                        <ul className="latest-posts">
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb1} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">Dreams Childcare – Making your School painless visit?</Link>
                                    </h4>
                                    <p>4 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb2} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">What are the benefits of Online Teacher Booking?</Link>
                                    </h4>
                                    <p>3 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb3} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">Benefits of consulting with an Online Teacher</Link>
                                    </h4>
                                    <p>3 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb4} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">5 Great reasons to use an Online Teacher</Link>
                                    </h4>
                                    <p>2 Dec 2020</p>
                                </div>
                            </li>
                            <li>
                                <div className="post-thumb">
                                    <Link to="/blog-details">
                                        <img className="img-fluid" src={BlogThumb5} alt="" />
                                    </Link>
                                </div>
                                <div className="post-info">
                                    <h4>
                                        <Link to="/blog-details">Online Teacher Appointment Scheduling</Link>
                                    </h4>
                                    <p>1 Dec 2020</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Latest Posts */}

                {/* Categories */}
                <div className="card category-widget">
                    <div className="card-header">
                        <h4 className="card-title">Blog Categories</h4>
                    </div>
                    <div className="card-body">
                        <ul className="categories">
                            <li><Link to="#">Online Services <span>(62)</span></Link></li>
                            <li><Link to="#">Musics <span>(27)</span></Link></li>
                            <li><Link to="#">Direct Appointment <span>(41)</span></Link></li>
                            <li><Link to="#">Self Esteem Issues <span>(16)</span></Link></li>
                            <li><Link to="#">Career Counselling <span>(55)</span></Link></li>
                            <li><Link to="#">Students Meet <span>(07)</span></Link></li>
                        </ul>
                    </div>
                </div>
                {/* Categories */}

                {/* Tags */}
                <div className="card tags-widget">
                    <div className="card-header">
                        <h4 className="card-title">Tags</h4>
                    </div>
                    <div className="card-body">
                        <ul className="tags">
                            <li><Link to="#" className="tag">Children</Link></li>
                            <li><Link to="#" className="tag">Care</Link></li>
                            <li><Link to="#" className="tag">Appointment</Link></li>
                            <li><Link to="#" className="tag">Booking</Link></li>
                            <li><Link to="#" className="tag">story Books</Link></li>
                            <li><Link to="#" className="tag">Children Care</Link></li>
                            <li><Link to="#" className="tag">Family</Link></li>
                            <li><Link to="#" className="tag">Tips</Link></li>
                            <li><Link to="#" className="tag">Shedule</Link></li>
                            <li><Link to="#" className="tag">Treatment</Link></li>
                            <li><Link to="#" className="tag">Teachers</Link></li>
                            <li><Link to="#" className="tag">School</Link></li>
                            <li><Link to="#" className="tag">Online</Link></li>
                            <li><Link to="#" className="tag">Child Care</Link></li>
                            <li><Link to="#" className="tag">Consulting</Link></li>
                            <li><Link to="#" className="tag">Teachers</Link></li>
                            <li><Link to="#" className="tag">Physics</Link></li>
                            <li><Link to="#" className="tag">Music</Link></li>
                            <li><Link to="#" className="tag">Specialist</Link></li>
                            <li><Link to="#" className="tag">Dreams Childcare </Link></li>
                        </ul>
                    </div>
                </div>
                {/* Tags */}
            </div>
        )
    }
}
export { BlogSidebar };