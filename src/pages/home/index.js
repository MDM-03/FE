import React from 'react';
import { Link } from 'react-router-dom';

// import Modules
import { FeaturedSchool } from './featured-school';
import { TopSchool } from './top-school';
import { TopTeacher } from './top-teacher';
import { FamousSchool } from './famous-school';
import { Testimonial } from './testimonials';
import { Blog } from './blog';                       

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                {/* Home Banner */}
                <section className="section section-search">
                    <div className="container-fluid">
                        <div className="banner-wrapper">
                            <div className="banner-header text-center">
                                <h6>Play, Learn and Grow</h6>
                                <h1>Give The Best <br/>Education For Your Kid</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                <div className="mt-4">
                                    <Link to="/login" className="btn btn-primary">Get Started</Link>
                                    <Link to="/map-grid" className="btn btn-secondary">See All Teachers</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Home Banner */}

                {/* Featured School */}
                <section className="section section-featured-school">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2><span>Feautured</span> Schools</h2>
                            <hr/>
                        </div>
                        <FeaturedSchool />
                        <div className="text-center mt-5">
                            <Link to="/map-list" className="btn btn-primary see-all-btn">See All</Link>
                        </div>
                    </div>
                </section>
                {/* Featured School */}

                {/* Our Top School */}
                <section className="section section-top-school">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2><span>Our</span> Top Schools</h2>
                            <hr/>
                        </div>
                        <TopSchool />
                        <div className="text-center mt-5">
                            <Link to="/map-list" className="btn btn-primary see-all-btn">See All</Link>
                        </div>
                    </div>
                </section>
                {/* Our Top School */}

                {/* Count */}
                <section className="section section-count">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="card bg-yellow">
                                    <h3>+60</h3>
                                    <h5>Total Courses</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="card bg-blue">
                                    <h3>+25,160</h3>
                                    <h5>Total Students</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="card bg-light-green">
                                    <h3>+600</h3>
                                    <h5>Classes</h5>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <div className="card bg-violet">
                                    <h3>+640</h3>
                                    <h5>Total Teachers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Count */}

                {/* Top Teacher */}
                <section className="section section-featured-school section-top-teacher">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2><span>Our</span> Top Teacher</h2>
                            <hr/>
                        </div>
                        <TopTeacher />
                        <div className="text-center mt-5">
                            <Link to="/map-list" className="btn btn-primary see-all-btn">See All</Link>
                        </div>
                    </div>
                </section>
                {/* Top Teacher */}

                {/* Famous School */}
                <section className="section section-famous-school">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="white-text">Famous Schools</h2>
                            <hr />
                        </div>
                        <FamousSchool />
                        <div className="text-center mt-5">
                            <Link to="/map-list" className="btn btn-secondary see-all-btn">See All</Link>
                        </div>
                    </div>
                </section>
                {/* Famous School */}

                {/* Testimonial */}
                <section className="section section-testimonial">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2><span>Parents</span> Reviews</h2>
                            <hr />
                        </div>
                        <Testimonial />
                    </div>
                </section>
                {/* Testimonial */}

                 {/* Recent Blogs */}
                 <section className="section blog-section">
                    <div className="container">
                        <div className="section-header text-center">
                        <h2><span>Recent</span> Blogs</h2>
                            <hr />
                        </div>
                        <Blog />
                    </div>
                </section>
                {/* Recent Blogs */}


            </div>
        )
    }
}
export { Home };