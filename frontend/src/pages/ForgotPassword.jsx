import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const ForgotPassword = () => {
  return (
    <>
        <Meta title = 'Forgot Password'/>
        <Breadcrumb title = 'Forgot Password'/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center'>Reset Your Password</h3>
                        <p className="text-center">We wll send an email to reset your password.</p>
                        <form>
                            <div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder='Email' 
                                />
                            </div>
                            <div>
                                <div className="d-flex flex-column justify-content-center align-items-center g-15 mt-1">
                                    <button className='button border-0'>Submit</button>
                                    <Link to={'/login'}>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword