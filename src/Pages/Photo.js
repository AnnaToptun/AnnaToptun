import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import Photo2013 from "../jpgforpage/Photo2013" ;
import Photo2014 from "../jpgforpage/Photo2014";
import Photo2015 from "../jpgforpage/Photo2015";
import Photo2016 from "../jpgforpage/Photo2016";
import Photo2017 from "../jpgforpage/Photo2017";
import Photo2018 from "../jpgforpage/Photo2018";
import Photo2019 from "../jpgforpage/Photo2019";
import Photo2020 from "../jpgforpage/Photo2020";
import Photo2021 from "../jpgforpage/Photo2021";

export default class Photo extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container className="mt-20">
                    <Tab.Container id="ledt-tabs-example" defaultActiveKey="2021">
                       <Row>
                        <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2" >
                                    <Nav.Item >
                                        <Nav.Link eventKey="2021">2021 рік</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="2020">2020 рік</Nav.Link>
                                    </Nav.Item >
                                    <Nav.Item >
                                        <Nav.Link eventKey="2019">2019 рік</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="2018">2018 рік</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="2017">2017 рік</Nav.Link>
                                    </Nav.Item >
                                    <Nav.Item >
                                        <Nav.Link eventKey="2016">2016 рік</Nav.Link>
                                    </Nav.Item >
                                    <Nav.Item >
                                        <Nav.Link eventKey="2015">2015 рік</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="2014">2014 рік</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="2013">Раніші</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="2021">                                    
                                        <h1   className="h1">Фотографії за 2021 рік</h1>
                                        <hr />
                                        <Photo2021/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2020">                                    
                                        <h1   className="h1">Фотографії за 2020 рік</h1>
                                        <hr />
                                        <Photo2020/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2019">                                    
                                        <h1   className="h1">Фотографії за 2019 рік</h1>
                                        <hr />
                                        <Photo2019/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2018">                                    
                                        <h1   className="h1">Фотографії за 2018 рік</h1>
                                        <hr />
                                        <Photo2018/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2017">                                    
                                        <h1   className="h1">Фотографії за 2017 рік</h1>
                                        <hr />
                                        <Photo2017/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2016">                                    
                                        <h1   className="h1">Фотографії за 2016 рік</h1>
                                        <hr />
                                        <Photo2016/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2015">                                    
                                        <h1   className="h1">Фотографії за 2015 рік</h1>
                                        <hr />
                                        <Photo2015/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2014">                                    
                                        <h1   className="h1">Фотографії за 2014 рік</h1>
                                        <hr />
                                        <Photo2014/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2013">                                    
                                        <h1   className="h1">Раніші</h1>
                                        <hr />
                                        <Photo2013/>
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
