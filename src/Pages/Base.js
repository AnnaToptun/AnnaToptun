import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Base extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <Container className="mt-20">
                    <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><span>Контакти студентів </span> </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><span>Списки студентів </span> </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four-1"><span>Паролі на СДН (денна)</span> </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four-2"><span>Паролі на СДН (заочна)</span> </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><span>Корпоративні пошти викладачів</span> </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" className="bg-gray">
                                        <h1   className="h1">Контакти студентів</h1>
                                        <hr />
                                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vShC-JqtOV8Ch3XPecb7-aLNldnN8BK0IXOUsK8elIVerDKOUxkOmo18HYJh7zuIMKN-V2-Mr6NiwRx/pubhtml" className="w-100" height="800" frameborder="0" /> <hr />
                                        <hr />
                                    </Tab.Pane>
                                   
                                    <Tab.Pane eventKey="second" className="bg-gray">
                                        <h1   className="h1">Списки студентів</h1>
                                        <hr />
                                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQjjDoJ1f1URbCtpRAX15kjo3A7mS0W_VKuUMmAxAuOgVZ5wJpk9vTMqCLVV1DdDw/pubhtml" className="w-100" height="800" frameborder="0" /> <hr />
                                        <hr />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h1   className="h1">Корпоративні пошти викладачів</h1>
                                        <hr />
                                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTYqLUUhSKuN9NNW_4RQT5PdEOZQJbJezFrfE79HvBH607HwfpN4MWDYftg2kE6rA/pubhtml" className="w-100" height="800" frameborder="0" /> <hr />
                                        <hr />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four-1">
                                        <h1   className="h1">Паролі на СДН (денна)</h1>
                                        <hr />
                                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3aw5S2g1U78X7nVvcUdnp0ue2zozE0uPysyze9EtKNQpks6V1xRo2v2nbpoNnqg/pubhtml" className="w-100" height="800" frameborder="0" /> <hr />
                                        <hr />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four-2">
                                        <h1   className="h1">Паролі на СДН (заочна)</h1>
                                        <hr />
                                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_u0ah0Om1NdJMP2CUt4W6rjZhUv3IS0vHCWVTTowzhWHpnRhLLBNCpoBGn4iqJw/pubhtml" className="w-100" height="800" frameborder="0" /> <hr />
                                        <hr />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container> <hr />
                </Container>
            </div>
        )
    }
}
