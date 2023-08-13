import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <div>
        <Meta title = 'Our Store'/>
        <Breadcrumb title = 'Our Store'/>
        <div className="store-wrapper py-4 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filter By</h3>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div className="form-check d-flex align-items-center g-15">
                                    <input className="form-check-input" type="checkbox" value="" id="instock" />
                                    <label className="form-check-label" htmlFor="instock">
                                        In Stock (0)
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center g-15">
                                    <input className="form-check-input" type="checkbox" value="" id="outstock" />
                                    <label className="form-check-label" htmlFor="outstock">
                                        Out Of Stock (1)
                                    </label>
                                </div>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className="d-flex align-items-center g-15">
                                <div className="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="floatingInput" 
                                        placeholder="name@example.com"
                                        aria-describedby="inputGroup-sizing-sm" 
                                    />
                                    <label htmlFor="floatingInput">
                                        From
                                    </label>
                                </div>
                                <div className="form-floating p-0">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword" 
                                        placeholder="Password" 
                                    />
                                    <label htmlFor="floatingPassword">
                                        To
                                    </label>
                                </div>
                            </div>
                            <h5 className="sub-title">Colors</h5>
                            <div>
                                <ul className='colors ps-0'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                </ul>
                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div className="form-check d-flex align-items-center g-15">
                                <input className="form-check-input" type="checkbox" value="" id="instock" />
                                <label className="form-check-label" htmlFor="instock">
                                    S(0)
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center g-15">
                                <input className="form-check-input" type="checkbox" value="" id="outstock" />
                                <label className="form-check-label" htmlFor="outstock">
                                    M(1)
                                </label>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Product Tag</h3>
                            <div className="product-tags d-flex flex-wrap align-items-center g-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Headphone     
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Mobiles     
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Tv     
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Charger     
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Invertor     
                                </span>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Random Products</h3>
                            <div className='random-product-card d-flex align-items-center'>
                                <div className="w-50">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid'/>
                                </div>
                                <div className="w-50">
                                    <h5>Kids headphones bulk 10 pack multi clored for students</h5>
                                    <StarRatingComponent 
                                        starCount={5}
                                        value={3}
                                        name=''
                                    />
                                    <br />
                                    <b>$300</b>
                                </div>
                            </div>
                            <div className='random-product-card d-flex align-items-center'>
                                <div className="w-50">
                                    <img src="images/watch.jpg" alt="watch" className='img-fluid'/>
                                </div>
                                <div className="w-50">
                                    <h5>Kids headphones bulk 10 pack multi clored for students</h5>
                                    <StarRatingComponent 
                                        starCount={5}
                                        value={3}
                                        name=''
                                    />
                                    <br />
                                    <b>$300</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="filter-left-container d-flex align-items-center">
                                    <p className='mb-0'>Sort By</p>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center g-10'>
                                    <p className='mb-0'>21 Products</p>
                                    <div className='d-flex align-items-center g-10 grid'>
                                       <img 
                                            src="images/gr4.svg" 
                                            alt="grid" 
                                            className='img-fluid d-block'
                                            onClick={() => setGrid(3)}
                                       />
                                       <img 
                                            src="images/gr3.svg" 
                                            alt="grid" 
                                            className='img-fluid d-block'
                                            onClick={() => setGrid(4)}
                                       />
                                       <img 
                                            src="images/gr2.svg" 
                                            alt="grid" 
                                            className='img-fluid d-block'
                                            onClick={() => setGrid(6)}
                                       />
                                       <img 
                                            src="images/gr.svg"
                                            alt="grid"
                                            className='img-fluid d-block'
                                            onClick={() => setGrid(12)}
                                       />
                                    </div>
                                </div>
                          </div>
                        </div>
                        <div className="product-list">
                            <div className="d-flex flex-wrap py-3 g-10">
                                <ProductCard grid={grid}/>
                                <ProductCard grid={grid}/>
                                <ProductCard grid={grid}/>
                                <ProductCard grid={grid}/>
                                <ProductCard grid={grid}/>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStore