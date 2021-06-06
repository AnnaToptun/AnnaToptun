import { Collapse } from 'bootstrap'
import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Table } from 'react-bootstrap'
import trv from '../photo/trv.jpg'

export default class Trv extends Component {
    render() {
        return ( 
            <Container >
                <h1  className="h1 ">Трембовецька Руслана Володимирівна</h1>
                <hr />
                <div className="about-teach">
                    <Col sm={7}>
                        
                        <p className="p"><b>Трембовецька Руслана Володимирівна</b>  - доцент кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій Черкаського  державного технологічного університету, 
                        професор, доктор технічних наук.</p>
                        <h3 className="text-center"><b>Біографія</b> </h3><hr />
                        
                        
                        <p className="p">Закінчила факультет електронних технологій Черкаського державного
                        технологічного університету за спеціальністю «Прилади точної механіки».</p>

                        
                        <p className="p">Викладає дисциплини: </p>
                        <ul>
                            
                            <li >Біометрія;</li>
                            <li >Оптичні та квантові медичні прилад;</li>
                            <li >Основи теорії вимірювальних приладів;</li>
                            <li >Лазерні технології у медичному приладобудуванні</li>
                            <li >Проектування оптико-електронних пристроїв роботів;</li>
                            <li >Теорія невизначеності </li>
                            <li >Оптика приладних систем</li>
                            <li >Метрологія та вимірювальна техніка</li>
                            <li >Основи метрології та взаємозамінності</li>
                            
                        </ul>
                        
                      

                        <h3 className="text-center"><b> Наукова діяльність</b></h3><hr />
                    
                        <p className="p"></p>
                        <p className="p">Інтереси: оптичні системи медичної ендоскопічної апаратури; 
                        взаємодія лазерного випромінювання з біологічними об’єктами; лазерна техніка 
                        в медичному приладобудуванні.</p>
                    </Col>
                    <Col sm={5}>
                        
                        <CardDeck border="dark" className='m-3'>
                            <Card className="card">
                                <img
                                    
                                    src={trv}
                                />
                                <Card.Body>
                                    <Card.Title  className="table-title"> <span ><b> ТРЕМБОВЕЦЬКА <br />  Руслана Володимирівна</b></span> </Card.Title> <hr />
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