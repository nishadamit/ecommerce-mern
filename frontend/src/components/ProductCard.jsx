import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const ProductCard = () => {
  return (
    <div className="col-3 mb-3">
        <Link className="product-card position-relative">
            <div className="wishlist-icon">
                <Link to="/">
                    <img src='images/wish.svg' alt='wish'/>
                </Link>
            </div>
            <div className="product-image">
                <img src="images/watch.jpg" className='img fluid' alt="product" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
                <StarRatingComponent 
                    starCount={5}
                    value={3}
                    name=''
                />
                <p className="price">$100</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column g-15">
                    <Link>
                      <img src="images/prodcompare.svg" alt="prodcompare" />
                    </Link>
                    <Link>
                      <img src="images/view.svg" alt="view" />
                    </Link>
                    <Link>
                      <img src="images/add-cart.svg" alt="add-cart" />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard