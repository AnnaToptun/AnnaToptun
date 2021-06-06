import { Collapse } from 'bootstrap'
import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Table } from 'react-bootstrap'
import tvv from '../photo/tvv.jpg'

export default class Tvv extends Component {
    render() {
        return ( 
            <Container >
                <h1  className="h1 ">Тичков Володимир Володимирович</h1>
                <hr />
                <div className="about-teach">
                    <Col sm={7}>
                        
                        <p className="p"><b>Тичков Володимир Володимирович</b>  - доцент кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій Черкаського  державного технологічного університету, 
                        професор, доктор технічних наук.</p>
                        <h3 className="text-center"><b>Біографія</b> </h3><hr />
                        
                        
                        <p className="p">Закінчив факультет електронних технологій Черкаського державного
                        технологічного університету за спеціальністю «Прилади точної механіки».</p>

                        
                        <p className="p">Викладає дисциплини: </p>
                        <ul>
                            
                            <li >Автоматизація виробничих процесів</li>
                            <li >Проблеми сталого розвитку</li>
                            <li >Основи стандартизації та сертифікації</li>
                            <li >Аналогова та цифрова техніка </li>
                            <li >Проектування випробувального обладнання та метрологічна атестація</li>
                            <li >Конструювання роботів </li>
                            <li >Планування та моделювання комп’ютерного експерименту</li>
                            <li >Метрологія та вимірювальна техніка</li>
                            <li >Основи метрології та взаємозамінності</li>
                            
                        </ul>
                        
                      

                        <h3 className="text-center"><b> Наукова діяльність</b></h3><hr />
                    
                        <p className="p"></p>
                        <p className="p">Інтереси: розробка проточно-інжекційних іонометричних аналізаторів; 
                        інформаційно-вимірювальних систем і систем автоматичного контролю якості води; 
                        іоноселективних електродів.</p>
                    </Col>
                    <Col sm={5}>
                        
                        <CardDeck border="dark" className='m-3'>
                            <Card className="card">
                                <img
                                    
                                    src={tvv}
                                />
                                <Card.Body>
                                    <Card.Title  className="table-title"> <span ><b> ТИЧКОВ<br /> Володимир Володимирович </b></span> </Card.Title> <hr />
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