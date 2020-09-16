import React from "react";
import {Row, Col, Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-page">
                <Navbar bg="light" expand="md" className="navbar-right">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav variant="tabs" className="mx-auto">
                            <Nav.Item>
                                <Nav.Link variant="tabs" active>Generate Bags</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs">View Inventory</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs">Add New Donations</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs">View Customers</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs">Modify Customer List</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <main className="container">
                    <Row className="mt-4">
                        <Col className="text-center">
                            <Button size="lg" block>Generate Bags</Button>
                        </Col>
                    </Row>
                </main>
            </div>

            /*
            1. Generate Bags
            
            2. View Inventory
            3. Add New Donations
            4. View People
            5. Modify Customer List
            */
        );
    }
}

export default MainPage;