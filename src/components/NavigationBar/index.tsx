import { FC, ReactElement } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavigationBar: FC = (): ReactElement => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">My Store</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/" >item</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar