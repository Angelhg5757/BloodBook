import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {GiLoveInjection} from 'react-icons/gi';


const NavbarDashboard = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ 'backgroundColor': '#3F4E4F' }} variant="dark" className='nav'>
                <Container>
                    <Navbar.Brand className='justify-self-start' ><GiLoveInjection/> BLOODBOOK </Navbar.Brand>
                    
                </Container>
                <Nav.Link href="/"style={{ 'paddingRight': '40px', color:"white"}} variant="dark" >
                        Salir
                </Nav.Link>
            </Navbar>
        </>
    );
};

export default NavbarDashboard;