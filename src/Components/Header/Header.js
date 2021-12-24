import React, { useContext } from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import { UserInfo } from '../../App';



const Header = () => {
    const [user, setUser] = useContext(UserInfo)
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
                            user.isSignIn ? <Button style={{ marginRight: "20px", marginBottom: '10px' }} variant="warning">{user.displayName}</Button>
                                :
                                <Link to='/login'><Button style={{ marginRight: "20px", marginBottom: '10px' }} variant="primary">Login</Button></Link>

                        }
                        <Link to='/admin'><Button style={{ marginRight: "20px", display: user.isSignIn ? "none" : "block" }} variant="dark">Admin</Button></Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;