import { Collapse } from 'bootstrap'
import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Table } from 'react-bootstrap'
import ktj from '../photo/ktj.jpg'

export default class Ttv extends Component {
    render() {
        return ( 
            <Container >
                <h1  className="h1 ">Кісіль Тетяна Юріївна</h1>
                <hr />
                <div className="about-teach">
                    <Col sm={7}>
                        
                        <p className="p"><b>Кісіль Тетяна Юріївна</b>  - доцент кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій Черкаського  державного технологічного університету, 
                        професор, доктор технічних наук.</p>
                        <h3 className="text-center"><b>Біографія</b> </h3><hr />
                        
                        
                        <p className="p">Закінчила факультет електронних технологій Черкаського державного
                        технологічного університету в 1999 році за спеціальністю «Прилади точної механіки».</p>

                        
                        <p className="p">Викладає дисциплини: </p>
                        <ul>
                            <li>Механіка та мехатроніка;</li>
                            <li>Випробування та контроль якості медичних приладів;</li>
                            <li>Управління якістю продукції;</li>
                            <li>Альтернативна енергетика ;</li>
                            <li>Фізичні основи надійності;</li>
                            <li>Навігаційні системи;</li>
                            <li>Системи технічної діагностики та контролю якості продукції</li>
                            <li>Інформаційні технології в медицині </li>
                            <li>Системи технічної діагностики та контролю якості продукції</li>
                            <li>Системи технічної діагностики та контролю якості продукції</li>
                        </ul>
                        
                      

                        <h3 className="text-center"><b> Наукова діяльність</b></h3><hr />
                    
                        <p className="p"></p>
                        <p className="p">Інтереси: п’єзоелектричні перетворювачі і пристрої контролю 
                        в’язкості рідини підвищеної точності</p>
                    </Col>
                    <Col sm={5}>
                        
                        <CardDeck border="dark" className='m-3'>
                            <Card className="card">
                                <img
                                    
                                    src={ktj}
                                />
                                <Card.Body>
                                    <Card.Title  className="table-title"> <span ><b> КІСІЛЬ <br /> Тетяна Юріївна </b></span> </Card.Title> <hr />
                                    <Table >
                                        
                                        <tr>
                                            <td className="table-col-1" > Місце роботи </td> 
                                            <td className="table-col-2"> Черкаський державний технологічний університет </td>

                                        </tr>
                                        <tr>
                                            <td className="table-col-1 " > Освіта </td> 
                                            <td className="table-col-2" > 
                                                <ul>
                                                    <li>Черкаський державний технологічний університет</li>
                                                </ul>
                                                
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="table-col-1 " > Науковий ступінь</td> 
                                            <td className="table-col-2 "> кандидат технічних наук </td>

                                        </tr>
                                        <tr>
                                            <td className="table-col-1 " > Наукове звання</td> 
                                            <td className="table-col-2 "> доцент</td>

                                        </tr>
                                    </Table>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        
                    </Col>
                    
                       
                </div>
            </Container>
        )
    }
}