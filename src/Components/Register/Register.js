import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserInfo } from '../../App';
import logo from '../../images/logos/Group 1329.png';



const Register = () => {
    const [oneTaskInfo, setOneTaskInfo] = useState({})
    const history = useHistory();
    const { _id } = useParams();
    const [user, setUser] = useContext(UserInfo);
    // console.log(registerInfo)

    useEffect(() => {
        fetch(`http://localhost:5000/register/${_id}`)
            .then(res => res.json())
            .then(data => {
                const { title } = data
                // console.log(title)
                const newLibraRegisterInfo = { ...user }
                newLibraRegisterInfo.library = title
                // console.log(newLibraRegisterInfo.library)
                setUser(newLibraRegisterInfo)
                // console.log(newLibraRegisterInfo)
                setOneTaskInfo(data)
            })
    }, [_id]);
    // const {title}=library

    const hanleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/registeredInfo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ ...user, ...oneTaskInfo }),
        })
            .then((response) => response.json())
            .then((result) => {console.log(result)})

            alert('Registration Submitted')
            history.push('/addedTask')
    };

    const handleChange = (e) => {
        // let isValid;
        // if(e.target.name==="name"){
        //     isValid=e.target.value.length>4
        // }
        // if(e.target.name==='userNameEmail'){
        //     isValid= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)
        //     // console.log(isValid,e.target.value)
        // }
        // if(isValid){
        //     let newRegisterInfo={...registerInfo}
        //     console.log(newRegisterInfo)
        //     newRegisterInfo[e.target.name]=e.target.value
        //     setRegisterInfo(newRegisterInfo)
        //     console.log(registerInfo)
        // }
        let newRegisterInfo = { ...user }
        // console.log(newRegisterInfo)
        newRegisterInfo[e.target.name] = e.target.value
        setUser(newRegisterInfo)
        // console.log(user)
    }


    return (
        <div className='bg-light' style={{ height: '100vh' }}>
            <Container>
                <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '40px' }}>
                    <img style={{ width: '200px', height: '60px' }} src={logo} alt="logo" />
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white', height: '450px', width: '500px', margin: '0px auto', border: '1px solid gray', borderRadius: '5px' }}>
                    <h2 style={{ marginBottom: '20px' }}>Register as a Volunteer</h2>
                    <Form onSubmit={hanleSubmit} style={{ width: '400px', margin: '0px auto' }}>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Control value={user.displayName} type="texr" placeholder="Full Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control value={user.email} type="email" placeholder="Username Or Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupDate">
                            <Form.Control onChange={handleChange} name='date' type="date" placeholder="Date" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Control onChange={handleChange} name="description" type="text" placeholder="Description" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupText">
                            <Form.Control value={user.library} type="text" placeholder="Organize books at the library" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Retister
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;