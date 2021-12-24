import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import { AiOutlineTeam, AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import '../Admin/Admin.css'

const AddEvent = () => {
    const history=useHistory()
    return (
        <Container>
            <Row style={{ marginTop: '20px' }}>
                <Col sm={3} md={3} >
                    <img style={{ width: '200px', height: '70px', marginLeft: '10px' }} src={logo} alt="" />
                    <div style={{ marginTop: '40px' }} >
                        <div style={{ marginLeft: '10px' }}>
                            <Link className='plusIcon' to='/admin'><p><AiOutlineTeam></AiOutlineTeam>Volunteer Register List</p></Link>
                            <Link to='/addEvent'><p><AiOutlinePlus></AiOutlinePlus>Add event</p></Link>
                        </div>
                    </div>
                </Col>
                <Col sm={9} md={9}>
                    <h3 style={{ marginLeft: '20px', marginTop: '10px' }}>Add event</h3>
                    <div className='bg-light' style={{ height: '87vh' }}>
                        <Row style={{backgroundColor: 'white', width: '95%', height: '40%', borderRadius: '10px', margin: '0px auto' }}>
                            <Col md={6} sm={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Event title</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Col>
                            <Col md={6} sm={12}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Event date</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Banner</Form.Label>
                                    <br />
                                    <input type="file" name="" id="" />
                                </Form.Group>
                                
                                <button onClick={()=>history.replace('./home')} className='btn btn-success'>submit</button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddEvent;