
import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Table } from 'react-bootstrap'
import tuzvv from '../photo/tuzvv.jpg'

export default class Tuzvv extends Component {
    render() {
        return ( 
            <Container >
                <h1  className="h1 ">Туз Вячеслав Валерійович</h1>
                <hr />
                <div className="about-teach">
                    <Col sm={7}>
                        
                        <p className="p"><b>Туз Вячеслав Валерійович</b>  - доцент кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій Черкаського  державного технологічного університету, 
                        професор, доктор технічних наук.</p>
                        <h3 className="text-center"><b>Біографія</b> </h3><hr />
                        
                        
                        <p className="p">Закінчив факультет електронних технологій Черкаського державного
                        технологічного університету за спеціальністю «Прилади точної механіки».</p>

                        
                        <p className="p">Викладає дисциплини: </p>
                        <ul>
                        


                            <li >Аналогові електронні пристрої,</li>
                            <li >Технологія приладобудування,</li>
                            <li >Основи конструювання елементів приладів.</li>
                            <li >Основи електротехніки, електроніки та мікросхемотехніки</li>
                            <li >Розробка інтелектуальних приладів і систем</li>
                            <li >Технологія приладобудування та складання</li>
                            <li >Конструювання в системах CAD</li>
                            <li >Моделювання вузлів та метрологічне забезпечення ІВС </li>
                            
                        </ul>
                        
                      

                        <h3 className="text-center"><b> Наукова діяльність</b></h3><hr />
                    
                        <p className="p"></p>
                        <p className="p">Інтереси: п’єзоелектричні перетворювачі динамічних тисків, комп’ютерне моделювання 
                        п’єзоелектричних перетворювачів.</p>
                    </Col>
                    <Col sm={5}>
                        
                        <CardDeck border="dark" className='m-3'>
                            <Card className="card">
                                <img
                                    
                                    src={tuzvv}
                                />
                                <Card.Body>
                                    <Card.Title  className="table-title"> <span ><b> ТУЗ <br /> Вячеслав Валерійович </b></span> </Card.Title> <hr />
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