import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const Login = () => {
  return (
    <>
        <Meta title = 'Login'/>
        <Breadcrumb title = 'Login'/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                     <div className="login-card">
                        <h3 className='text-center'>Login</h3>
                        <form>
                            <div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                />
                            </div>
                            <div>
                                <Link to={'/forgot-password'}>Forgot password?</Link>
                                <div className="d-flex justify-content-center align-items-center g-30 mt-3">
                                    <button className='button border-0'>Login</button>
                                    <Link to={'/signup'} className='button signup'>SignUp</Link>
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

export default Login