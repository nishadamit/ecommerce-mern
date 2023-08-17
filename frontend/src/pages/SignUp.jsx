import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const SignUp = () => {
  return (
    <>
        <Meta title = 'Sign Up'/>
        <Breadcrumb title = 'Sign Up'/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                     <div className="auth-card">
                        <h3 className='text-center mb-4'>Sign Up</h3>
                        <form>
                            <div>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder='Name' 
                                    name='name'
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    placeholder='Email' 
                                    name='email'
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    className="form-control"
                                    placeholder='Mobile Number' 
                                    name='mobile'
                                />
                            </div>
                            <div>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder='Password'
                                    name='password'
                                />
                            </div>
                            <div>
                                <div className="d-flex justify-content-center align-items-center g-30 mt-3">
                                    <button className='button border-0'>Sign Up</button>
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

export default SignUp