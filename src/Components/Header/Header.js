import React, { useContext, useState } from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import { UserInfo } from '../../App';

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";




const Header = () => {
    const history=useState()
    const [user, setUser] = useContext(UserInfo)


    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({
                    isSignIn: false,
                    displayName: '',
                    email: '',
                    date: '',
                    descriptrion: '',
                    library: ''
                })
            })
            .catch((error) => {
            });
            history.push('/home')
    }


    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand to="/home" style={{ float: 'left' }}>
                    <img style={{ height: '60px', width: '200px' }} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <li style={{ marginRight: "20px" }}>
                            <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                        </li>
                        <li style={{ marginRight: "20px" }}>
                            <Nav.Link><Link to='/donate'>Donate</Link></Nav.Link>
                        </li>
                        <li style={{ marginRight: "20px" }}>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        </li>
                        <li style={{ marginRight: "20px" }}>
                            <Nav.Link><Link to='/campaign'>Campaign</Link></Nav.Link>
                        </li>
                        {
                            user.isSignIn ? <Button onClick={handleGoogleSignOut}  style={{ marginRight: "20px", marginBottom: '10px' }} variant="warning">{user.displayName}</Button>
                                :
                                <Link to='/login'><Button style={{ marginRight: "20px", marginBottom: '10px' }} variant="primary">Login</Button></Link>

                        }
                        <Link to='/admin'><Button style={{ marginRight: "20px", display: user.isSignIn ? "none" : "block" }} variant="dark">Admin</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;