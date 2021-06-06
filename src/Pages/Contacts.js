import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox';
import card from '../assecs/card.jpg'

export default class Contacts extends Component {
    render() {
        return (
            
            <div>
                <CarouselBox/>
                <Container className="mt-20">
                    <Tab.Container  id="ledt-tabs-example" defaultActiveKey="first">
                        <Row >
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><span>Контакти</span> </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><span>Адреса</span> </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><span>Карта університету</span> </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" className="bg-gray" >
                                        <h1   className="h1">Контакти</h1>
                                        <hr />
                                        <h2 className="fs-25 text-center">Телефон:</h2>
                                        
                                        <h3 className="bg-gray">(0472) 51-15-71 </h3>
                                        <h2 className="fs-25 text-center">Електронна пошта:</h2>
                                        
                                        <h3 className="bg-gray">julybo110976@gmail.com</h3>
                                        <hr />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="fs-25 ta-center">
                                        <h1   className="h1">Адреса</h1>
                                        <hr/>
                                        <h2 className=" text-center">Адреса</h2>
                                        <p>м.Черкаси, бул. Т.Шевченка, 460, навчальний корпус 1, кабінет 409</p>

                                        <h2 className="text-center">Режим Роботи</h2>
                                        <p>Понеділок - Четвер: 8-00 - 17-00; </p>
                                        <p>П'ятниця: 8-00 - 15-00; </p> 
                                        <p>Субота - Неділя: вихідні</p>
                                        <hr />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="bg-grey" >
                                        <h1   className="h1">Карта університету</h1>
                                        <hr />
                                        <h2 className="text-center">Карта розташування корпусів</h2>
                                        <img
                                            src={card}
                                            className="d-block w-100"
                                            alt="Карта розташування корпусів"
                                        />
                                        <hr />
                                    </Tab.Pane>
                                
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}
