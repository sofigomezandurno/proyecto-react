import React from "react" ;

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#">Cosmética Cba</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link href="#action2">Nosotros</Nav.Link>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Cosméticos</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Accesorios</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">
            Creá tu rutina ideal
        </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action6"> Carrito</Nav.Link>
        </Nav>
    <Form className="d-flex">
        <FormControl type="search" placeholder="Qué estas buscando?" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Buscar</Button>
        </Form>
    </Navbar.Collapse>
    </Container>
</Navbar>
    )
}