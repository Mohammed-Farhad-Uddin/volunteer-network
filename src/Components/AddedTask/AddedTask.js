import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserInfo } from '../../App';
import Header from '../Header/Header';

const AddedTask = () => {
    const [user, setUser] = useContext(UserInfo)
    const [addedTasks, setAddedTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getAddedTask?email=' + user.email)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAddedTasks(data)
            })
    }, [addedTasks])

    const removeTask=(id)=>{
        console.log(id,'clicked')
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    };



    return (
        <div className='bg-light' style={{ height: '100vh' }}>
            <Header></Header>
            <Container>
                <Row>
                    {
                        addedTasks.map((tasks, index) => <Col sm={12} md={6} key={index}>
                            <div style={{ backgroundColor: 'white', height: '200px', width: '500px', borderRadius: '5px', margin: '30px 0px' }}>
                                <div style={{ display:'flex' , position:'relative',top:'10px' }}>
                                    <div>
                                        <img style={{ height: '180px', width: '200px',marginLeft:'20px', marginRight: '20px', }} src={tasks.img} alt="image" />
                                    </div>
                                    <div>
                                        <h3 style={{fontWeight:'bolder'}}>{tasks.title}</h3>
                                        <p style={{fontWeight:'bolder'}}>{tasks.date}</p>
                                        <button onClick={()=>removeTask(`${tasks._id}`)} style={{position:'relative',top:'68px',left:'175px',color:'gray',border:'none',padding:'5px 15px',borderRadius:'5px' }}>cancel</button>
                                    </div>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AddedTask;           