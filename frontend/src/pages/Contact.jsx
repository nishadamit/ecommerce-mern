import React from 'react';
import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import {BiPhoneCall} from 'react-icons/bi';

import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
        <Meta title = 'Contact Us'/>
        <Breadcrumb title = 'Contact Us'/>
        <div className="contact-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d448271.5333027438!2d77.35214080000002!3d28.6261248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691986454260!5m2!1sen!2sin" 
                  height="450" 
                  allowFullScreen="" 
                  loading="lazy" 
                  className='w-100'
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-12 mt-5">
                <div className="contact-form-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title">
                      Contact
                    </h3>
                    <form className='d-flex flex-column g-15'>
                      <div>
                        <input 
                            type="text" 
                            placeholder='Name' 
                            className='form-control' 
                        />
                      </div>
                      <div>
                        <input 
                            type="email" 
                            placeholder='Email' 
                            className='form-control' 
                        />
                      </div>
                      <div>
                        <input 
                            type="tel" 
                            placeholder='Phone Number' 
                            className='form-control' 
                        />
                      </div>
                      <div>
                        <textarea 
                            type="text" 
                            placeholder='Comment' 
                            className='form-control' 
                            rows={5}
                        />
                      </div>
                      <div>
                        <button className='button border-0'>Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title">
                      Get in Touch with Us
                    </h3>
                    <ul>
                      <li className='d-flex align-items-center g-15'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>A320 3rd floor Gali No 25 Ranagar Ghaziabad</address>
                      </li>
                      <li className='d-flex align-items-center g-15'>
                        <BiPhoneCall className='fs-5'/>
                        <a href='tel: +91 9999999999'>+91 9999999999</a>
                      </li>
                      <li className='d-flex align-items-center g-15'>
                        <AiOutlineMail className='fs-5'/>
                        <a href='mailto: demo@gmail.com'>demo@gmail.com</a>
                      </li>
                      <li className='d-flex align-items-center g-15'>
                        <AiOutlineInfoCircle className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 10am to 7pm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact