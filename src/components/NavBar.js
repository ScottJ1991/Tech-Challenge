import React from 'react';

//https://react-bootstrap.netlify.com/components/navbar/#navbars
import { Navbar, Nav } from 'react-bootstrap';

/*this stops refreshing the page when clicking link
/import {NavLink} from 'react-router-dom';
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/R1'>Report 1</NavLink></li>
                <li><NavLink to='/R2'>Report 2</NavLink></li>
                <li><NavLink to='/R3'>Report 3</NavLink></li>
            </ul>
*/
const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Simpsons</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/R1">Report 1</Nav.Link>
                        <Nav.Link href="/R2">Report 2</Nav.Link>
                        <Nav.Link href="/R3">Report 3</Nav.Link>
                        <Nav.Link href="/R4">Report 4</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;