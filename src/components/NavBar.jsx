import React, {useState, useEffect} from "react";
import CarWidget from './CarWidget';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
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
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <Link to={"/categoria/Higiene"}>
                                <NavDropdown.Item href="#action3">Higiene</NavDropdown.Item>
                            </Link>
                            <Link to={"/categoria/Hidratacion"}>
                                <NavDropdown.Item href="#action3">Hidratacion</NavDropdown.Item>
                            </Link>
                            <Link to={"/categoria/Antioxidante"}>
                                <NavDropdown.Item href="#action3">Antioxidante</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <Link to={"/cosmeticos"}>
                            <NavDropdown.Item href="#action3">Cosméticos</NavDropdown.Item>
                        </Link>
                        </NavDropdown>
                        <Nav.Link href="#action2">Nosotros</Nav.Link>
                        {carrito.length > 0 && 
                        <Link to={'/Cart'}> 
                        <Nav.Link href="#action6"> <CarWidget/> </Nav.Link>
                        </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;