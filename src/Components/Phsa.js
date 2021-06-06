
import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Table } from 'react-bootstrap'
import phsa from '../photo/phsa.jpg'

export default class Phsa extends Component {
    render() {
        return ( 
            <Container >
                <h1  className="h1 ">Філімонов Сергій Олександрович</h1>
                <hr />
                <div className="about-teach">
                    <Col sm={7}>
                        
                        <p className="p"><b>Філімонов Сергій Олександрович</b>  - доцент кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій Черкаського  державного технологічного університету, 
                        професор, доктор технічних наук.</p>
                        <h3 className="text-center"><b>Біографія</b> </h3><hr />
                        
                        
                        <p className="p">Закінчив факультет електронних технологій Черкаського державного
                        технологічного університету за спеціальністю «Прилади точної механіки».</p>
                        <p className="p">Захистив кандидатську дисертацію </p>
                        
                        <p className="p">Викладає дисциплини: </p>
                        <ul>
                            <li >Основи автоматичного контроля,</li>
                            <li >Електроустаткування промислових підприємств,</li>
                            <li >Розрахунок та конструювання медичних приладів,</li>
                            <li >САПР засобів вимірювання,</li>
                            <li >Нанотехнології в медичному приладобудуванні,</li>
                            <li >Пристрої цифрового запису інформації,</li>
                            <li >Розрахунок і конструювання реєструючої та відтворюючої апаратури</li>
                            <li >Програмне забезпечення роботизованих та автоматизованих систем</li>
                            <li> Мікроконтролерна техніка </li>
                            <li> Основи програмування мікроконтролерів</li>
                            <li>Основи технічного зору</li>
                            <li>Приводи мехатронних та роботехнічних систем</li>
                            <li>Автоматичний контроль та управління</li>
                            <li>Мікропроцесорна техніка</li>
                            
                        </ul>
                        
                      

                        <h3 className="text-center"><b> Наукова діяльність</b></h3><hr />
                    
                        <p className="p"></p>
                        <p className="p">Інтереси: п’єзокерамічні перетворювачі, мікроконтролери та робототехніка.</p>
                    </Col>
                    <Col sm={5}>
                        
                        <CardDeck border="dark" className='m-3'>
                            <Card className="card">
                                <img
                                    
                                    src={phsa}
                                />
                                <Card.Body>
                                    <Card.Title  className="table-title"> <span ><b> ФІЛІМОНОВ<br /> Сергій Олександрович</b></span> </Card.Title> <hr />
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