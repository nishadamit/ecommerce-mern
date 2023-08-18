import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const ResetPassword = () => {
  return (
    <>
        <Meta title = 'Reset Password'/>
        <Breadcrumb title = 'Reset Password'/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-4'>Reset Password</h3>
                        <form>
                            <div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Password'
                                    name='password'
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Confirm Password'
                                    name='confirm-password'
                                />
                            </div>
                            <div>
                                <div className="d-flex justify-content-center align-items-center g-30 mt-3">
                                    <button className='button border-0'>Submit</button>
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

export default ResetPassword