import React from "react";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="image-card">
          <img src="images/blog-1.jpg" alt="blog" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">1 dec, 2022</p>
          <h5 className="title">A beutiful sunday morning ranaissance</h5>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            tempore quia veniam.
          </p>
          <Link className="button">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
