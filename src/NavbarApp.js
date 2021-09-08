import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
function NavbarApp() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Teste 1</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'center'}}>
          <Nav className="me-auto">
            <Nav.Link href="/questao1">Q1- Calculadora</Nav.Link>
            <Nav.Link href="/questao2">Q2- Formulário</Nav.Link>
            <Nav.Link href="/questao3">Q3- Calculadora com layout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
