import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import { AiOutlineTeam, AiOutlinePlus, AiFillDelete } from "react-icons/ai";
import './Admin.css'



const Admin = () => {
    const [allRegisteredInfo, setAllRegisteredInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getRegisteredInfo')
            .then(res => res.json())
            .then(data => setAllRegisteredInfo(data))
    }, [allRegisteredInfo])

    const removeVolunteer = (id) => {
        fetch(`http://localhost:5000/volunteerDelete/${id}`,{
            method:"DELETE"
        })
            .then(res => res.json())
            .then(data =>{
                // console.log(data)
                if(data){
                    alert('Remove done')
                }
            })
    }


    return (
        <Container>
            <Row style={{ marginTop: '20px' }}>
                <Col sm={3} md={3} >
                    <img style={{ width: '200px', height: '70px', marginLeft: '10px' }} src={logo} alt="" />
                    <div style={{ marginTop: '40px' }} >
                        <div style={{ marginLeft: '10px' }}>
                            <Link to='/admin'><p><AiOutlineTeam></AiOutlineTeam>Volunteer Register List</p></Link>
                            <Link className='plusIcon' to='/addEvent'><p><AiOutlinePlus></AiOutlinePlus>Add event</p></Link>
                        </div>
                    </div>
                </Col>
                <Col sm={9} md={9}>
                    <h3 style={{ marginLeft: '20px', marginTop: '10px' }}>Volunteer Register List</h3>
                    <div className='bg-light' style={{ height: '87vh' }}>
                        <div style={{ backgroundColor: 'white', width: '95%', height: '80%', borderRadius: '10px', marginLeft: '20px' }}>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>Name</th>
                                        <th style={{ textAlign: 'center' }}>Email</th>
                                        <th style={{ textAlign: 'center' }}>Registration date</th>
                                        <th style={{ textAlign: 'center' }}>Volunteer list</th>
                                        <th style={{ textAlign: 'center' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allRegisteredInfo.map((info, index) => <tr key={index}>
                                            <td style={{ textAlign: 'center' }}>{info.displayName}</td>
                                            <td style={{ textAlign: 'center' }}>{info.email}</td>
                                            <td style={{ textAlign: 'center' }}>{info.date}</td>
                                            <td style={{ textAlign: 'center' }}>{info.title}</td>
                                            <td style={{ textAlign: 'center' }}><button onClick={() => removeVolunteer(`${info._id}`)} style={{ color: 'white', backgroundColor: 'red', border: '0px solid red', borderRadius: '5px' }}><AiFillDelete></AiFillDelete></button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;