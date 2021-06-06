import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import {Container, Nav, Col, Row, Tab} from 'react-bootstrap'
import { Button } from 'bootstrap'


export default class Links extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container className="mt-20">
                    <Tab.Container id="ledt-tabs-example" defaultActiveKey="second">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2" >
                                    
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Важливі посилання</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Розклад занять</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first-1">Google</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                            </Col>
                            <Col sm="9">
                                <Tab.Content>
                                    
                                    <Tab.Pane eventKey="first">                                        
                                        <h1   className="h1">Розклад занять</h1>
                                        <hr />
                                        <iframe src="http://195.95.232.162:8082/cgi-bin/timetable.cgi" height="500" className="w-100"  frameborder="1"/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="first-1">                                        
                                        <h1   className="h1">Розклад занять</h1>
                                        <hr />
                                        <iframe src="https://www.google.com.ua/?hl=ru" height="500" className="w-100"  frameborder="1"/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h1   className="h1">Інші важливі посилання</h1>
                                        <hr />
                                        <div className="d-flex">
                                            <Col sm={6}>
                                                <button className="but" >
                                                    <a  className="link-link" href="https://pmkt.chdtu.edu.ua/" >
                                                        Сайт Кафедри приладобудування, мехатроніки та комп'ютеризованих технологій
                                                    </a>                                                
                                                </button> 
                                                <button className="but" >
                                                    <a  className="link-link" href="https://chdtu.edu.ua/" >Черкаський державний технологійчний університет</a>
                                                    
                                                </button> 
                                                <button className="but" >
                                                <a  className="link-link"  href="https://mon.gov.ua/ua">Міністерство освіти та науки України</a>
                                                
                                                </button>
                                            </Col>
                                            <Col sm={6}>
                                                <button className="but" >
                                                    <a  className="link-link" href="https://fetr.chdtu.edu.ua/" >Сайт Факультету електронних технологій і робототехніки</a>
                                                    
                                                </button> 
                                                <button className="but" >
                                                    <a  className="link-link" href="http://fet.moodle.chdtu.edu.ua/login/index.php"  >Система дистанційного навчання</a>
                                                    
                                                </button> 
                                                <button className="but"  >
                                                <a  className="link-link"  href="https://testportal.gov.ua/zno-2021/">Український центр оцінювання якості освіти</a>
                                                
                                                </button>  
                                            </Col>
                                            
                                        </div>
                                        
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
