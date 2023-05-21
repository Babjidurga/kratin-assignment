import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import YogaTips from '../yogaTips';
import {useState} from 'react'
import './index.css';

const Home = () => {
  const [yes,setYes] = useState('false')
  const showContent = () => {
    setYes(!yes)
  }
  return (
    <Container fluid>
      <Row>
        <Col md={12} className='display-flex '>
          <div className='home'>
            <p>Stay active. Eat well. Sleep enough. Connect with others.</p>
            <img
              className='home-img col-6'
              src='https://media.istockphoto.com/id/1134451603/photo/she-knows-just-how-to-make-each-patient-feel-special.jpg?s=612x612&w=0&k=20&c=OLZuce52LblJl9JFp0dwtyFlDWbD3sTCxJYKhkLTxW8='
              alt='hospital'
            />
            <h1 className='home-head mt-2'>
              Welcome to {' '}
              <span className='text-success'>
                 Care 65 + Hospital Management System. A new like Home for elders
              </span>
            </h1>
            <button onClick={showContent} className='btn btn-primary mb-3'>Know more</button>
            {!yes && <YogaTips />}
           <a href = "https://github.com/Babjidurga" target='_blank' rel='noreferrer' ><p className='mt-5'>Made by @ Babji</p></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
