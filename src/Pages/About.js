import { Carousel } from 'bootstrap'
import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import Bmo from '../Components/Bmo'
import Bjj from '../Components/Bjj'
import Bkv from '../Components/Bkv'
import Hvj from '../Components/Hvj'
import Ktj from '../Components/Ktj'
import Tvv from '../Components/Tvv'
import Trv from '../Components/Trv'
import Tuzvv from '../Components/Tuzvv'
import Phsa from '../Components/Phsa'
import Bvi from '../Components/Bvi'
import Shvm from '../Components/Shvm'
import Pmkt from '../Components/Pmkt'
import History from '../Components/History'

import CarouselBox from '../Components/CarouselBox'


export default class About extends Component {
    render() {
        
        return (
            <>
                <CarouselBox/>
                <Container>
                    <Tab.Container bg="dark" defaultActiveKey="history">
                        <Row>
                            <Col sm={2}>
                                <Nav  variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link  eventKey="history">
                                        <span><b>ІСТОРІЯ КАФЕДРИ</b></span> 
                                        </Nav.Link>
                                    </Nav.Item> 
                                    <Nav.Item>
                                        <Nav.Link eventKey="bvi">
                                            <span><b>БИКОВ</b> Валентин Іванович</span>
                                        </Nav.Link>
                                    </Nav.Item>    
                                    <Nav.Item>
                                        <Nav.Link eventKey="shvm">
                                        <span><b>ШАРАПОВ </b> Валерій Михайлович</span>
                                        </Nav.Link>
                                    </Nav.Item>                                                            
                                    <Nav.Item>
                                        <Nav.Link eventKey="pmkt">
                                            <span><b>СКЛАД КАФЕДРИ ПМКТ</b></span>
                                        </Nav.Link> 
                                    </Nav.Item>
                                    <hr />
                                    <Nav.Item>
                                        <Nav.Link  eventKey="bmo">
                                        <span><b>Бондаренко</b> Максим Олексійович</span>  
                                        </Nav.Link>
                                    </Nav.Item>                           
                                    <Nav.Item>
                                        <Nav.Link eventKey="bjj">
                                        <span><b>Бондаренко</b> Юлія Юріївна</span>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="hvj">
                                            <span><b> Гальченко</b> Володимир Якович</span>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="bkv">
                                        <span><b>Базіло </b> Костянтин Вікторович</span> 
                                        </Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item>
                                        <Nav.Link eventKey="ktj">
                                        <span><b>Кісіль</b>Тетяна Юріївна</span>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tvv">
                                            <span><b>Тичков</b> Володимир Володимирович</span>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="trv">
                                            <span><b>Трембовецька</b> Руслана Володимиріна</span>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tuzvv">
                                        <span><b>Туз</b> Вячеслав Валерійович</span>  
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="phsa">
                                        <span><b>Філімонов</b> Сергій Олександрович</span>  
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                               
                            </Col>
                            <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="history">
                                        <History/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pmkt">
                                        <Pmkt/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bvi">
                                        <Bvi/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="shvm">
                                        <Shvm/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bmo">
                                        <Bmo/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bkv">
                                        <Bkv/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bjj">
                                        <Bjj/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="hvj">
                                        <Hvj/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ktj">
                                        <Ktj/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tvv">
                                        <Tvv/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="trv">
                                        <Trv/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tuzvv">
                                        <Tuzvv/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="phsa">
                                        <Phsa/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </>   
        )
    }
}
