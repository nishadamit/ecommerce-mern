import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
        <Meta title = 'Wishlist'/>
        <Breadcrumb title = 'Wishlist'/>
        <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
               {
                [1,2,3,4,5].map((item,index) =>(
                    <div className="col-3" key={index}>
                      <div className="wishlist-card position-relative">
                          <img src="images/cross.svg" alt="cross-icon" className='position-absolute cross-icon' />
                          <div className="wishlist-card-image">
                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                          </div>
                          <div className="px-3 py-3">
                              <h5 className="title">Honor T17.0 1GB RAM 8GB ROM Inch with Wi-Fi+3G Tablet</h5>
                              <h6 className="price">$ 100</h6>
                          </div>
                      </div>
                    </div>
                ))
               }
            </div>
        </div>
        </div>
    </>
  )
}

export default Wishlist