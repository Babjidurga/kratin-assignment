import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const WhyChooseHospital = () => {
  return (
    <div className='main-page'>
      <h2 className='main-head'>Why Choose Our Hospital?</h2>
      <ul className='d-flex flex-wrap justify-content-around'>
        <li className='col-12 col-md-4 col-lg-3 d-flex flex-column'>
          <img src="/images/HomeNursing.jpg" alt="Hospital" />
          <span>Home Nursings</span>
        </li>
        <li className='col-12 col-md-4 col-lg-3 d-flex flex-column'>
          <img src="/images/mobilitysupport.jpg" alt="Hospital" />
          <span>Mobility Support</span>
        </li>
        <li className='col-12 col-md-4 col-lg-3 d-flex flex-column'>
          <img src="/images/onlineConsultant.jpg" alt="Hospital" />
          <span>Online Consultancy</span>
        </li>
        <li className='col-12 col-md-4 col-lg-3 d-flex flex-column'> 
          <img src="/images/personalcare.jpg" alt="Hospital" />
          <span>Personal Care</span>
        </li>
        <li className='col-12 col-md-4 col-lg-3 d-flex flex-column'>
          <img src="/images/regularCheckup.jpg" alt="Hospital" />
          <span>Regular Checkup</span>
        </li>
        <li className='col-12 col-md-4 col-lg-3 d-flex flex-column'>
          <img src="/images/safety.jpg" alt="Hospital" />
          <span>Safety Measures</span>
        </li >
      </ul>
      <p className='text-center mt-0 pt-0'>
        Our hospital strives to provide exceptional medical care and services.
        By choosing us, you gain access to cutting-edge facilities, experienced
        professionals, and personalized attention. We have a strong commitment
        to delivering the best possible outcomes for our patients.
      </p>
    </div>
  );
};

export default WhyChooseHospital;
