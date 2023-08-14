import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
        <Meta title = 'Compare Product'/>
        <Breadcrumb title = 'Compare Product'/>
        <div className="compare-product-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross"
                                className='img-fluid cross-icon' 
                            />
                            <div className="product-card-image">
                                <img 
                                    src="images/watch.jpg" 
                                    alt="cross"
                                    className='img-fluid' 
                                />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T17.0 1GB RAM 8GB ROM Inch with Wi-Fi+3G Tablet</h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <p className='mb-0'>S M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross"
                                className='img-fluid cross-icon' 
                            />
                            <div className="product-card-image">
                                <img 
                                    src="images/watch.jpg" 
                                    alt="cross"
                                    className='img-fluid' 
                                />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T17.0 1GB RAM 8GB ROM Inch with Wi-Fi+3G Tablet</h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <p className='mb-0'>S M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross"
                                className='img-fluid cross-icon' 
                            />
                            <div className="product-card-image">
                                <img 
                                    src="images/watch.jpg" 
                                    alt="cross"
                                    className='img-fluid' 
                                />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T17.0 1GB RAM 8GB ROM Inch with Wi-Fi+3G Tablet</h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <p className='mb-0'>S M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross"
                                className='img-fluid cross-icon' 
                            />
                            <div className="product-card-image">
                                <img 
                                    src="images/watch.jpg" 
                                    alt="cross"
                                    className='img-fluid' 
                                />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T17.0 1GB RAM 8GB ROM Inch with Wi-Fi+3G Tablet</h5>
                                <h6 className="price mb-3 mt-3">$ 100</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>Havells</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <p className='mb-0'>S M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    </>
  )
}

export default CompareProduct