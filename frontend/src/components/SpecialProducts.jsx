import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';


const SpecialProducts = () => {
  return (
    <div className='col-6 mb-3'>
        <div className="special-product-card">
            <div className="d-flex">
              <div>
                <img src="images/watch.jpg" className='img-fluid' alt="watch" />
              </div>
              <div className="special-card-content">
                <h6 className="brand">Havells</h6>
                <h5 className='title'>Samsung Galaxy Note10+ Mobile Phone:Sim...</h5>
                <StarRatingComponent 
                    starCount={5}
                    value={3}
                    name=''
                />
                <p className="price">
                  <span className='red-p'>$100</span>
                  &nbsp;
                  <del>$200</del>
                </p>
                <div className="discount-till d-flex align-items-center g-15">
                  <p className='mb-0'><b>743</b>&nbsp;<span>Days</span></p>
                  <div className='d-flex g-10'>
                      <span className="badge bg-danger rounded-circle">1</span>:
                      <span className="badge bg-danger rounded-circle">1</span>:
                      <span className="badge bg-danger rounded-circle">1</span>
                  </div>
                </div>
                <div className="products-count">
                  <p className='mb-1 mt-3'>Products : 5</p>
                  <div className="progress">
                    <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{width: '25%'}} 
                        aria-valuenow="25" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    >
                    </div>
                  </div>
                </div>
                <Link className='button mt-3'>Add to cart</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts