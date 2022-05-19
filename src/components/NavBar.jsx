import React from "react";
import CarWidget from './CarWidget';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from '../context/GlobalStateContext';

const NavBar = () => {
    const {carrito}=useContext(GlobalContext);
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand href="#">Cosmética Cba</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to={"/"}>
                            <Nav.Link href="#action1">Inicio</Nav.Link>
                        </Link>
                        <Nav.Link href="#action2">Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <Link to={"/cosmeticos"}>
                            <NavDropdown.Item href="#action3">Cosméticos</NavDropdown.Item>
                        </Link>
                            <NavDropdown.Item href="#action4">Accesorios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Creá tu rutina ideal
                            </NavDropdown.Item>
                        </NavDropdown>
                        {carrito.length > 0 && 
                        <Link to={'/Cart'}> 
                        <Nav.Link href="#action6"> <CarWidget/> </Nav.Link>
                        </Link>
                        }
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Qué estas buscando?" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;