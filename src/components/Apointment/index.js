import React, { useState } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentPage = () => {;
  const [yes,setYes] = useState('false')


  return (
    <>
    <h2>B O O K A N <span className='text-success'>A P P O I N T M E N T</span></h2>
    <div className='d-flex flex-wrap justify-content-center main-page'>
      <img src="/images/apointment.jpg" alt="apointment page" className=' col-12 col-md-5 ap-img'/>
      <div className='d-flex flex-column col-12 col-md-5 data'>
          <div className='d-flex flex-column mb-2 input-container'>
            <label for="inputId">Full Name</label>
            <input type="text" id="inputId" name="inputName" placeholder="Your Name" required/>
            </div>
          <div className='d-flex flex-column mb-2 input-container'>
          <label for="inputphone">Phone:</label>
          <input type="num" id="inputphone" name="inputphone" placeholder="Mobile Number"  required/>
          </div>
          <div className='d-flex flex-column mb-2'>
          <label for="date">Date</label>
          <input type="date" id="date" name="date" placeholder="Appointment Date"  required/>
          </div>
          <div className='d-flex flex-column mb-2'>
          <label >Time</label>
          <select className='select-option' required>
            <option value="10:30am" checked>Make an Appointment</option>
            <option value="10:30am">10:30 am</option>
            <option value="1:00 pm">1:00 pm</option>
            <option value="3:00pm">3:00 pm</option>
            <option value="4:00 pm">4:00 pm</option>
          </select>
          </div>
          <div className='d-flex flex-column mb-2'>
          <label for="file">Please Upload Prescription:</label>
          <input type="file" id="file" placeholder="Prescription" required/>
          </div>
          <div className='d-flex flex-column mb-2'>
          <label for="extradata">Message</label>
          <input type="text" id="extradata" name="inputName" placeholder="More Info"  required/>
          </div>
          <div className='submit'>
          <button className='button' type="submit" onClick={() => setYes(!yes)}>Submit</button>
          </div>
          {!yes && <p className='text-success'> Appointment scheduled successfully</p>}
      </div>
    </div>
    </>
  );
};

export default AppointmentPage;
