import React from "react";
import { Link } from "react-router-dom";

// Import Images
import BlogImg1 from "../../assets/img/blog-01.png";
import BlogImg2 from "../../assets/img/blog-02.png";
import BlogImg3 from "../../assets/img/blog-03.png";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/fontawesome-free-solid";
import { timers } from "jquery";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      blog: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            blog: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            {this.state.blog.map((item) => (
              <div className="card">
                <Link to="/blog-details">
                  <img src={BlogImg1} className="card-img-top" alt="..." />
                </Link>
                <div className="posted-date">
                  <h6>Posted on {item.Created_at}</h6>
                </div>
                <div className="card-body">
                  <Link to="/blog-details" className="card-title">
                    {item.Title}
                  </Link>
                  <p className="card-text">{item.Description} </p>
                  <Link to="/blog-details" className="view-link">
                    View More <FontAwesomeIcon icon={faCaretRight} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card">
              <Link to="/blog-details">
                <img src={BlogImg2} className="card-img-top" alt="..." />
              </Link>
              <div className="posted-date">
                <h6>Posted on 25-01-2021</h6>
              </div>
              <div className="card-body">
                <Link to="/blog-details" className="card-title">
                  Tips to Succeed in an Online Course
                </Link>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat mauris{" "}
                </p>
                <Link to="/blog-details" className="view-link">
                  View More <FontAwesomeIcon icon={faCaretRight} />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card">
              <Link to="/blog-details">
                <img src={BlogImg3} className="card-img-top" alt="..." />
              </Link>
              <div className="posted-date">
                <h6>Posted on 25-01-2021</h6>
              </div>
              <div className="card-body">
                <Link to="/blog-details" className="card-title">
                  Tips to Succeed in an Online Course
                </Link>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat mauris{" "}
                </p>
                <Link to="/blog-details" className="view-link">
                  View More <FontAwesomeIcon icon={faCaretRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Blog };
