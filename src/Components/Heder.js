import React, { Component } from 'react'
import { FormControl, Nav, Navbar, Form, Container, Button } from 'react-bootstrap'
import logo from './logo1.png'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


import About from '../Pages/About'
import Links from '../Pages/Link'
import Photo from '../Pages/Photo'
import Contacts from '../Pages/Contacts'
import Ndoc from '../Pages/Ndoc'
import Base from '../Pages/Base'
export default class Heder extends Component {
    render() {
               
        return (
            <>
                <Navbar collapseOnSelect expand="md" variant="dark" className="navbar">
                    <Container className="header-container">
                        <Navbar.Brand href="/about">
                            <img
                                src={logo}
                                height="50"

                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="text-center">
                                <Nav.Link href="/"><span  className="text-header "> Про кафедру </span> </Nav.Link>
                                <Nav.Link href="/res"><span  className="text-header"> Ресурси </span> </Nav.Link>
                                <Nav.Link href="/photo"><span  className="text-header"> Фото </span></Nav.Link>
                                <Nav.Link href="/contacts"><span  className="text-header"> Контакти </span></Nav.Link>
                                <Nav.Link href="/ndoc"><span  className="text-header"> Нормативні документи </span></Nav.Link>
                                <Nav.Link href="/base"><span  className="text-header"> База Даних </span></Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        
                        <Route exact path="/" component={About}/>
                        <Route exact path="/res" component={Links} />
                        <Route exact path="/photo" component={Photo} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/ndoc" component={Ndoc} />
                        <Route exact path="/base" component={Base}/>
                    </Switch>
                </Router>
            </>
        )
    }
}
