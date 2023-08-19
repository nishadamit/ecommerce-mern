import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const SingleBlog = () => {
  return (
    <>
        <Meta title = 'Dyanmic Blog Name'/>
        <Breadcrumb title = 'Dyanmic Blog Name'/>
        <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-card-blog">
                            <Link to={'/blogs'} className='d-flex align-items-center g-20'>
                                <AiOutlineArrowLeft className='fs-4'/>
                                Go back to blogs
                            </Link>
                            <h3 className="title">
                                A Beutiful Sunday Morning Renaissance
                            </h3>
                            <img src="images/blog-1.jpg" alt="blog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sapiente, ipsum atque itaque, omnis hic ratione pariatur harum explicabo porro odit quae voluptatem at vitae corrupti, temporibus sunt officiis ad. Ad illum consectetur autem error officia iure distinctio, cum dolore minus tempora quas odit suscipit est in ut aspernatur sed?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog