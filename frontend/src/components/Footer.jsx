import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-7">
              <div className="d-flex align-items-center g-30">
                <img src="images/newsletter.png" alt="news-letter" />
                <h2 className="text-white">Sign Up for Newsletter </h2>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address here"
                  aria-label="Your email address here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  A320 gali No 19 <br />
                  District Sonipat <br />
                  Haryana
                </address>
                <a
                  href="tel:+91 9988777666"
                  className="text-white d-block mt-4 mb-2"
                >
                  +91 9988777666
                </a>
                <a
                  href="mailto:development@gmail.com"
                  className="text-white d-block mt-4 mb-2"
                >
                  development@gmail.com
                </a>
              </div>
              <div className="socal-links d-flex align-items-center g-30 mt-4">
                <Link to={"/"} className="text-white">
                  <BsLinkedin className="fs-5" />
                </Link>
                <Link to={"/"} className="text-white">
                  <BsInstagram className="fs-5" />
                </Link>
                <Link to={"/"} className="text-white">
                  <BsGithub className="fs-5" />
                </Link>
                <Link to={"/"} className="text-white">
                  <BsYoutube className="fs-5" />
                </Link>
                <Link to={"/"}></Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to={"/privacy-policy"}>
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to={"/refund-policy"}>
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to={"/shipping-policy"}>
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to={"/term-condition"}>
                  Terms of Service
                </Link>
                <Link className="text-white py-2 mb-1" to={"/"}>
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to={"/"}>
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to={"/"}>
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to={"/"}>
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to={"/"}>
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to={"/"}>
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to={"/"}>
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to={"/"}>
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white mb-0 text-center">
                &copy; {new Date().getFullYear()} powered by Digitic
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
