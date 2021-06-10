
import React, { Component } from 'react'
import { Button, Card, CardDeck, Container  } from 'react-bootstrap';



import bmo from '../photo/bmo.jpg'
import bjj from '../photo/bjj.jpg'
import shvm from '../photo/shvm.jpg'
import bvi from '../photo/bvi.jpg'
import Bmo from '../Components/Bmo'


export default class History extends Component {
    render() {
        return (
            <Container className="d-block w-100">
                
                <div>
                    <div ><h1 className="h1 ">Історія Кафедри приладобудування, мехатроніки та комп'ютеризованих технологій</h1></div>
                     <hr/>
                    <p className='p'>Кафедра приладобудування, мехатроніки та комп’ютеризованих технологій була заснована у 1988 році. 
                        Тоді кафедра носила назву “Прилади точної механіки”. </p>
                    <p className='p'>Протягом свого існування, йдучи у ногу з часом, кафедра декілька разів змінювала свою назву. 
                        Так, у 2001 р. кафедра приладів точної механіки змінила назву на кафедру комп’ютеризованих 
                        та інформаційних технологій у приладобудуванні. А у вересні 2017 року ще раз – на кафедру 
                        приладобудування, мехатроніки та комп’ютеризованих технологій.
                    </p>
                    <p className='p'>До складу науково-педагогічного персоналу кафедри приладобудування, мехатроніки та 
                        комп’ютеризованих технологій входять 9 викладачів, з них: один доктор наук, професор; 
                        два доктори наук, доценти; 6  кандидатів наук, доцентів.</p>
                </div>
                <div> 
                    <CardDeck className="about-teach">
                         <div className="history-card">
                            <Card bg="dark" text="light" className="mt-3">
                                <img 
                                    className="p-1"
                                    variant="top" 
                                    src={bvi}
                                />
                                <Card.Title className='text-center' >БИКОВ<br></br>  Валентин Іванович.</Card.Title><hr />
                                <Card.Text>
                                    <p className="p-card">Професор, доктор технічних наук, завідувач кафедри Прилади точної механіки 
                                     з 1988 по 1999 рік. 
                                       <br /> Заслужений діяч науки і техніки УРСР</p>
                                </Card.Text>
                            </Card>
                            
                        </div>
                        
                        <div className="history-card">
                            <Card bg="dark" text="light" className="mt-3">
                                <img 
                                    className="p-1"
                                    variant="top" 
                                    src={shvm}
                                />
                                <Card.Title className='text-center'><span>ШАРАПОВ <br /> Валерій Михайлович</span> </Card.Title> <hr />
                                <Card.Text>
                                    <p className="p-card"> Професор, доктор технічних наук, завідувач кафедри комп’ютеризованих та 
                                    інформаці-йних технологій у приладобуду-ванні з 1999  по жовтень 2014 року </p>
                                    
                                </Card.Text>
                            </Card>
                        </div>
                       <div className="history-card" >
                            <Card bg="dark" text="light" className="mt-3">
                                <img 
                                    className="p-1"
                                    variant="top" 
                                    src={bjj}
                                />
                                <Card.Title className='text-center'>БОНДАРЕНКО <br></br>Юлія Юріївна</Card.Title> <hr />
                                <Card.Text>
                                    <p className="p-card">Професор, кандидат технічних наук, завідувач кафедри приладобудування, 
                                    мехатроніки та комп'ютеризованих технологій з 2016 року по серпень 2020 року</p>
                                    
                                </Card.Text>
                                
                            </Card>
                        </div>
                        <div className="history-card ">
                            <Card bg="light" className="mt-3">
                                <img 
                                    className="p-1"
                                    variant="top" 
                                    src={bmo}
                                />
                                <Card.Title className='text-center bg-blue'>БОНДАРЕНКО <br></br> Масим Олексійович</Card.Title> <hr />
                                <Card.Text>
                                    <p className="p-card">Доцент, доктор технічних наук, завідувач кафедри приладобудування, 
                                    мехатроніки та комп'ютеризованих технологій з вересня 2020 року</p>
                                    
                                    
                                </Card.Text>
                                
                            </Card>
                        </div>
                        
                    </CardDeck>
                </div><hr />
            </Container>
        )
    }
}
