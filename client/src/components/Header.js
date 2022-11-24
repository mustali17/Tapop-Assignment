import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                    <Nav>
                        <NavLink to="/register" className="text-decoration-none text-light mx-2">Register</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to="/signin" className="text-decoration-none text-light mx-2">Signin</NavLink>
                    </Nav>
                    {/* <Nav className="me-auto">
                        <NavLink to={`/profile/${params.id}`} className="text-decoration-none text-light mx-2">Profile</NavLink>
                    </Nav> */}
                </Container>
            </Navbar>
        </>
    )
}

export default Header