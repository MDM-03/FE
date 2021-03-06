import React from "react";
import { Link } from "react-router-dom";

// Import Images
import BlogThumb1 from "../../assets/img/blog/blog-thumb-01.jpg";
import BlogThumb2 from "../../assets/img/blog/blog-thumb-02.jpg";
import BlogThumb3 from "../../assets/img/blog/blog-thumb-03.jpg";
import BlogThumb4 from "../../assets/img/blog/blog-thumb-04.jpg";
import BlogThumb5 from "../../assets/img/blog/blog-thumb-05.jpg";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

class BlogSidebar extends React.Component {
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
        {/* Search */}
        <div className="card search-widget">
          <div className="card-body">
            <form className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
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
              {this.state.blog((item) => (
                <li>
                  <div className="post-thumb">
                    <Link to="/blog-details">
                      <img className="img-fluid" src={BlogThumb1} alt="" />
                    </Link>
                  </div>
                  <div className="post-info">
                    <h4>
                      <Link to="/blog-details">{item.Title}</Link>
                    </h4>
                    <p>{item.Created_at}</p>
                  </div>
                </li>
              ))}
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
            {this.state.categories.map((item) => (
              <ul className="categories">
                <li>
                  <Link to="#">
                    {item.Name} <span>(62)</span>
                  </Link>
                </li>
              </ul>
            ))}
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
              <li>
                <Link to="#" className="tag">
                  Children
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Care
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Appointment
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  story Books
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Children Care
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Family
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Tips
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Shedule
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Treatment
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Teachers
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  School
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Online
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Child Care
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Teachers
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Physics
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Music
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Specialist
                </Link>
              </li>
              <li>
                <Link to="#" className="tag">
                  Dreams Childcare{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Tags */}
      </div>
    );
  }
}
export { BlogSidebar };
