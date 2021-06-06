import React, { Component } from 'react'
import { Col, Container, Card } from 'react-bootstrap'

import bmo from '../photo/bmo.jpg'
import bjj from '../photo/bjj.jpg'
import bkv from '../photo/bkv.jpg'
import hvj from '../photo/hvj.jpg'
import ktj from '../photo/ktj.jpg'
import phsa from '../photo/phsa.jpg'
import trv from '../photo/trv.jpg'
import tuzvv from '../photo/tuzvv.jpg'
import tvv from '../photo/tvv.jpg'

import aoi from '../photo/aoi.jpg'
import kve from '../photo/kve.jpg'
import tav from '../photo/tav.jpg'
import chiv from '../photo/chiv.jpg'
import logo1 from '../Components/logo1.png'


export default class Pmkt extends Component {
    render() {
        return (
            <Container>
                <h1  className="h1  w-100">Склад кафедри ПМКТ</h1> <hr />
                <h2 className="text-center">Науково-педагогічний персонал кафедри</h2> <hr />
                <div className="about-teach">
                    <Col sm={4} >
                        
                        <Card bg="light" className="m-3">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={bmo}
                            />
                            
                            <Card.Title className='text-center h1-card '>БОНДАРЕНКО <br></br> Масим Олексійович</Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card">Доцент, доктор технічних наук, завідувач кафедри приладобудува-ння, 
                                мехатроніки та комп'ютеризо-ваних технологій з 2020 року</p>
                                
                                
                            </Card.Text>
                            
                        </Card> 
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1  img-card"
                                variant="top" 
                                src={bkv}
                            />
                            <Card.Title className='text-center h1-card '><span>БАЗІЛО <br /> Костянтин Вікторович</span> </Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card"> Доцент, доктор технічних наук, доцент кафедри кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих технологій </p>
                                
                            </Card.Text>
                        </Card>
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={tvv}
                            />
                            <Card.Title className='text-center h1-card '><span>ТИЧКОВ<br /> Володимир Володимирович</span> </Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card"> Доцент, кандидат технічних наук, доцент кафедри кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих технологій </p>
                                
                            </Card.Text>
                        </Card>
                    </Col>
                    
                    <Col sm={4}>                        
                        
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={bjj}
                            />
                            <Card.Title className='text-center h1-card '>БОНДАРЕНКО <br></br>Юлія Юріївна</Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card">Професор, кандидат технічних наук, доцент кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих технологій</p>
                                
                            </Card.Text>
                            
                        </Card>
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={ktj}
                            />
                            <Card.Title className='text-center h1-card '><span>КІСІЛЬ <br /> Тетяна Юріївна</span> </Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card"> Доцент, кандидат технічних наук, доцент кафедри кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих технологій </p>
                                
                            </Card.Text>
                        </Card>
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={trv}
                            />
                            <Card.Title className='text-center h1-card '><span>ТРЕМБОВЕЦЬКА <br /> Руслана Володимиріна</span> </Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card"> Доцент, кандидат технічних наук, доцент кафедри кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих технологій </p>
                                
                            </Card.Text>
                        </Card>
                    </Col>    
                    <Col sm={4}>
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1  img-card"
                                variant="top" 
                                src={hvj}
                            />
                            <Card.Title className='text-center h1-card ' >ГАЛЬЧЕНКО <br></br>  Володимир Якович</Card.Title><hr />
                            <Card.Text>
                                <p className="p-card">Професор, доктор технічних наук, професор кафедри кафедри приладобу-дування, 
                                мехатроніки та комп'ютеризованих технологій</p>
                            </Card.Text>
                        </Card>
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1  img-card"
                                variant="top" 
                                src={tuzvv}
                            />
                            <Card.Title className='text-center h1-card '><span>ТУЗ <br /> Вячеслав Валерійович</span> </Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card"> Доцент, кандидат технічних наук, доцент кафедри кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих технологій </p>
                                
                            </Card.Text>
                        </Card>
                        <Card bg="dark" text="light" className="m-3">
                            <img 
                                className="p-1  img-card"
                                variant="top" 
                                src={phsa}
                            />
                            <Card.Title className='text-center h1-card '><span>ФІЛІМОНОВ <br /> Сергій Олександрович</span> </Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card"> Доцент, кандидат технічних наук, доцент кафедри кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих технологій </p>
                                
                            </Card.Text>
                        </Card>
                    </Col>
                    
                    
                </div>
                <hr />
                <h2 className="text-center ">Допоміжний персонал кафедри</h2> <hr />
                <div className="about-teach">
                    <Col sm={3} >
                        
                        <Card className=" m-1 card-bg">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={aoi}
                            />
                            
                            <Card.Title className='text-center h1-card '>АНДРІЄНКО <br></br> Ольга Іванівна</Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card">Старший лаборант, аспірант кафедри приладобудування, 
                                мехатроніки та комп'ютери-зованих технологій </p>
                                
                                
                            </Card.Text>
                            
                        </Card> 
                    </Col>
                    <Col sm={3} >
                        
                        <Card  className="m-1 card-bg">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={kve}
                            />
                            
                            <Card.Title className='text-center h1-card '>КОСЕНКО <br></br> Володимир Євгенійович</Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card">Старший лаборант кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих техноло-гій </p>
                                
                                
                            </Card.Text>
                            
                        </Card> 
                    </Col>
                    <Col sm={3} >
                        
                        <Card className="m-1 card-bg">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={tav}
                            />
                            
                            <Card.Title className='text-center h1-card '>ТОПТУН <br></br> Анна Володимиріна</Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card">Ph.d, старший лаборант кафедри приладобудування, 
                                мехатроніки та комп'ютеризо-ваних технологій </p>
                                
                                
                            </Card.Text>
                            
                        </Card> 
                    </Col>
                    <Col sm={3} >
                        
                        <Card className="m-1 card-bg">
                            <img 
                                className="p-1 img-card"
                                variant="top" 
                                src={chiv}
                            />
                            
                            <Card.Title className='text-center h1-card '>ЧОРНОШИЙ<br></br> Ігор Васильович</Card.Title> <hr />
                            <Card.Text>
                                <p className="p-card">Старший лаборант кафедри приладобудування, 
                                мехатроніки та комп'ютеризованих техноло-гій </p>
                                
                                
                            </Card.Text>
                            
                        </Card> 
                    </Col>
                </div>
            </Container>
        )
    }
}
