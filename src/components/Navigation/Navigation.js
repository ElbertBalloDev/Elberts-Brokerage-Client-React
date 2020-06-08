import React from 'react';
import './Navigation.css';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to={'/'} exact >Home Page</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/owner-list'} exact>
                            <NavItem eventKey={1}>
                                Owner Actions
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}

export default Navigation;