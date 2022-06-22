import { FC, ReactElement, useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios, { AxiosResponse } from "axios"
import Dropdown from "../Dropdown";

const NavigationBar: FC = (): ReactElement => {
    const [categories, setCategories] = useState<string[]>([])

    const getCategories: Function = async (): Promise<void> => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then((res: AxiosResponse<string[]>): void =>
                setCategories(res.data))
    }

    useEffect(() => { getCategories() }, [])

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">My Store</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Dropdown arr={categories} path="category" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar