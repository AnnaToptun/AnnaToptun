import { Collapse } from 'bootstrap'
import React, { Component } from 'react'
import { Card, CardDeck, Col, Container, Table } from 'react-bootstrap'
import bkv from '../photo/bkv.jpg'

export default class Bkv extends Component {
    render() {
        return ( 
            <Container >
                <h1  className="h1 ">Базіло Костянтин Вікторович</h1>
                <hr />
                <div className="about-teach">
                    <Col sm={7}>
                        
                        <p className="p"><b>Базіло Костянтин Вікторович</b>  - доцент кафедри приладобудування, 
                        мехатроніки та комп’ютеризованих технологій Черкаського  державного технологічного університету, 
                        професор, доктор технічних наук.</p>
                        <h3 className="text-center"><b>Біографія</b> </h3><hr />
                        
                        <p className="p">Закінчив  факультет електронних технологій Черкаського державного
                        технологічного університету за спеціальністю "Прилади точної механіки"</p>
                        <p className="p">У грудні 2003 року в Одеському національному політехнічному університеті захистила 
                        кандидатську дисертацію.</p>
                        
                        <p className="p">Викладає дисциплини: </p>
                        <ul>
                            <li>Проектування електромеханічних вузлів приладів;</li>
                            <li>Інформаційно-вимірювальні системи;</li>
                            <li>Прилади для вимірювання фізіологічних параметрів;</li>
                            <li>Складання та випробування приладів;</li>
                            <li>Електромагнітні прилади і системи;</li>
                            <li>Реабілітаційні прилади та системи;</li>
                            <li>Перетворюючі пристрої</li>
                            <li>Автоматизовані інформаційно-вимірювальні системи</li>
                            <li>Метрологічне забезпечення біомедичних вимірювань</li>
                            <li>Цифрові електронні вузли засобів вимірювальної техніки</li>
                            <li>Механічні, електричні та магнітні вимірювання</li>
                        </ul>
                        
                      

                        <h3 className="text-center"><b> Наукова діяльність</b></h3><hr />
                    
                        <p className="p"></p>
                        <p className="p">Інтереси: п'єзоелектричні перетворювачі</p>  
                        <p className="p">Професор Гальченко В.Я. є науковим керівником трьох здобувачів освітньо-наукового рівня 
                        “доктор філософії” (Тичков Д.В., Хлівний В.В.) зі спеціальності 152 – метрологія та 
                        інформаційно-вимірювальна техніка.</p>  
                        <hr />  
                    </Col>
                    <Col sm={5}>
                        
                        <CardDeck border="dark" className='m-3'>
                            <Card className="card">
                                <img
                                    
                                    src={bkv}
                                />
                                <Card.Body>
                                    <Card.Title  className="table-title"> <span ><b> БАЗІЛО <br /> Костянтин Вікторович </b></span> </Card.Title> <hr />
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
                                            <td className="table-col-2 "> доктор технічних наук </td>

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