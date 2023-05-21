import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Contactus = () => {
  return (
    <div className='d-flex flex-wrap p-5'>
        <img src="/images/map.png" className='col-12 m-auto address-img' alt="address" />
        <div className='d-flex flex-row justify-content-around'>
          <p className='col-5 col-md-5  address mt-3'>
            ABC Hospitals <br/>
             m lane, xyz street <br/>
            opposite white fields <br/>
              Near Ambedkar bhavan, Bengalore <br/>
            Pincode - 852585, India 
          </p>
          <p className='col-5 col-md-5  address mt-3'>
           Emergency Contact <br/>
           +91 8080808080 <br/>
           Customer support <br/>
           +91 8080808080 <br/>
           Contact@gmail.com
          </p>
          </div>
    </div>
  )
}

export default Contactus