import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <div className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  alt="main-banner-1"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPER CHARGED FOR PROS.</h4>
                  <h5>Special Sale</h5>
                  <p>
                    From $999 or $41.62/mo <br />
                    for 24 mo. Footnote*
                  </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap g-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="main-banner-1"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best sale</h4>
                    <h5>Ipad S13+</h5>
                    <p>
                      From $999 or $41.62/mo <br />
                      for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="main-banner-1"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999 or $41.62/mo <br />
                      for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="main-banner-1"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999 or $41.62/mo <br />
                      for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="main-banner-1"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $999 or $41.62/mo <br />
                      for 24 mo. Footnote*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex justify-content-bewtween align-items-center g-10">
                <div className="d-flex align-items-center g-15">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">from all orders above $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center g-15">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">from all orders above $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center g-15">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">from all orders above $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center g-15">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">from all orders above $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center g-15">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">from all orders above $5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories card-wrapper d-flex justify-content-bewtween flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptops</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="laptop" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera and Videos</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera and Videos</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera and Videos</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptop</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera and Videos</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera and Videos</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee>
                  <div className="d-flex">
                    <div className="mx-4 w-25">
                      <img src="images/brand-01.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-02.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-03.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-04.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-05.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-06.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-07.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-08.png" alt="brand" />
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
