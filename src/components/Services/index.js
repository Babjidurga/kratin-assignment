import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h2 className='text-success'> Services Provided by the Hospital</h2>
      <ul className="facilities-list">
      <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/tips.webp" alt="Ambulance Services" />
          <span>Happy Tips</span>
        </li>
        
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/doctos.jpg" alt="Ambulance Services" />
          <span>Efficient Staff</span>
        </li>
        
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/healtyaging.jpg" alt="Ambulance Services" />
          <span>Back to young </span>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/oprativeRoom.jpeg" alt="Operating Rooms" />
          <span>Operating Rooms</span>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/emergecy.jpg" alt="Emergency Room" />
          <span>Emergency Room</span>
        </li>
        
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/icu.jpg" alt="Intensive Care Unit" />
          <span>Intensive Care Unit</span>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/lab.jpg" alt="Laboratory Services" />
          <span>Laboratory Services</span>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/radiology.jpg" alt="Radiology Department" />
          <span>Radiology Department</span>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/pharmacy.jpg" alt="Pharmacy" />
          <span>Pharmacy</span>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">
          <img src="/images/ambulance.jpg" alt="Ambulance Services" />
          <span>Ambulance services</span>
        </li>
        
        
      </ul>
    </div>
  );
}

export default Facilities;
