import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import { AiOutlineSearch } from "react-icons/ai";
import fakeData from '../../fakeData/fakeData.json';
import { Link } from 'react-router-dom';


const Home = () => {
    
    // const onClickToAction=()=>{   //database a patate first e button create kore action create kore patate hoi post method k.post method er jnno action lage
    //         fetch('https://stark-harbor-85138.herokuapp.com/allTask', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify(fakeData),
    //     })
    //         .then((response) => response.json())
    //         .then((result) => console.log(result))  
    // }

    const [tasks, setTasks] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch('https://stark-harbor-85138.herokuapp.com/getAllData?search=' + search)
            .then((response) => response.json())
            .then((data) => setTasks(data));
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }



    


    return (
        <>
            <Header></Header>
            <Container style={{ marginTop: "50px" }}>
                <div>
                    <h1 style={{ textAlign: 'center', textTransform: "uppercase" }}>I Grow By Helping People In need</h1>
                    <div style={{ width: '500px', margin: '20px auto' }} class="input-group">
                        <input onChange={handleSearch} id="search-input" type="search" class="form-control" placeholder="Search anything..." />
                        <button style={{ width: '100px' }} id="search-button" type="button" class="btn btn-primary">
                            <AiOutlineSearch></AiOutlineSearch>
                        </button>
                    </div>
                </div>
                <Row>
                    {
                        tasks.map((data, index) => <Col sm={6} md={3} key={index}>
                            <Link to={`/register/${data._id}`}>
                                <Card style={{ width: '18rem', border: 'none', padding: "10px" }}>
                                    <Card.Img variant="top" src={data.img} />
                                    <Card.Body style={{ background: 'yellow', borderRadius: '10px' }}>
                                        <Card.Text>
                                            {data.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;