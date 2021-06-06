
import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Ndoc extends Component {
    render() {
        return (
            <div>
                <CarouselBox/>
                <Container className="mt-20">
                    <Tab.Container id="ledt-tabs-example" defaultActiveKey="1.1">
                        <Row>
                            <Col sm={4}>
                                <Nav variant="pills" className="flex-column mt-2">
                                   
                                    <p className="menu"><b> Статутні документи </b></p> <hr />
                                    <Nav.Item>
                                        <Nav.Link eventKey="2.1"> Статут Черкаського державного технологічного університету (нова редакція)  </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="2.2">Правила внутрішнього розпорядку</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="2.3">Стратегія розвитку Черкаського державного технологічного університету на 2019–2024 рр.</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="2.4">Колективний договір між адміністрацією і трудовим колективом Черкаського державного технологічного університету на 2020-2022 роки</Nav.Link>
                                    </Nav.Item>
                                    <p className="menu"><b> Документи, якими регулюється освітній процес </b></p> <hr />
                                    
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.1">Кодекс академічної доброчесності </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.2">Положення про навчально-методичне забезпечення навчальної дисципліни</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.3">Порядок підготовки здобувачів вищої освіти ступеня доктора філософії та доктора наук</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.4">Положення про асистентську науково-педагогічну практику здобувачів вищої освіти ступеня доктора філософії</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.5">Положення про організацію освітнього процесу</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.6">Положення про щорічне рейтингове оцінювання діяльності науково-педагогічних працівників</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.7">Положення про порядок формування індивідуального навчального плану здобувача вищої освіти </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.8">Положення про порядок та умови здійснення вибору навчальних дисциплін здобувачами вищої освіти</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.10">Положення про перевірку академічних і наукових робіт на плагіат</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.11">Положення про систему внутрішнього забезпечення якості вищої освіти</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="1.12">Про порядок планування, підготовки та затвердження навчально-методичного забезпечення</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                            <Nav.Link eventKey="1.13">Положення про видачу диплома з відзнакою</Nav.Link>
                                        </Nav.Item>
                                        <p className="menu"><b> Документи, якими регулюється наукова та організаційна діяльність </b></p> <hr />
                                    
                                        <Nav.Item>
                                            <Nav.Link eventKey="3.1">Положення про науковий гурток здобувачів вищої освіти</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3.2">Положення Про переведення студентів на вакантні місця державного замовлення у ЧДТУ</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3.3">Положення Про порядок обрання за конкурсом на заміщення вакантних посад науково-педагогічних працівників </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3.4">Положення про студентське самоврядування</Nav.Link>
                                        </Nav.Item>
                                    
                                        <p className="menu"><b> Нормативні документи кафедри</b></p> <hr />
                                    
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Положення про кафедру</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second.1">Посадова інструкція старшого викладача</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second.2">Посадова інструкція доцента</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second.3">Посадова інструкція завідуючого кафедрою</Nav.Link>
                                    </Nav.Item>
                                    <hr />
                                                                   
                                </Nav>
                            </Col>
                            <Col sm="8">
                                <Tab.Content>
                                    <>
                                        <Tab.Pane eventKey="1.1">
                                            <h1   className="h1">Кодекс академічної доброчесності</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1ZN-qS5aJfht78x8KRSRMJVc9a_XdXhQR/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.2">
                                            <h1   className="h1">Положення про навчально-методичне забезпечення навчальної дисципліни</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1myaIZp0ayv9SNKIHhzGrA74kNU6A_tlk/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.3">
                                            <h1   className="h1">Порядок підготовки здобувачів вищої освіти ступеня доктора філософії та доктора наук</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1gB8qvl8KxR4-n7LsU9X5ulZtpgyBcdlD/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.4">
                                            <h1   className="h1">Положення про асистентську науково-педагогічну практику здобувачів вищої освіти ступеня доктора філософії</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1_TSSJxfqJgPrebBcGIGYLwk9pVcahCoX/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.5">
                                            <h1   className="h1">Положення про організацію освітнього процесу</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1ZOnZr7e_ogckYDwDw1GYgc9GdXr84Nkx/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.6">
                                            <h1   className="h1">Положення про щорічне рейтингове оцінювання діяльності науково-педагогічних працівників</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1ujuH9xI9iIHj4mJmpLM5oFDpBdoUvGQ4/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.7">
                                            <h1   className="h1">Положення про порядок формування індивідуального навчального плану здобувача вищої освіти
                                               </h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1mMdntp2thinJvZvQOmm3H7gGnkL-DfA0/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.8">
                                            <h1   className="h1"> Положення про порядок та умови здійснення вибору навчальних дисциплін здобувачами вищої освіти</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1lR_5XKDTi709H-C7iTST-jWwvkV_HP80/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                       
                                        <Tab.Pane eventKey="1.10">
                                            <h1   className="h1">Положення про перевірку академічних і наукових робіт на плагіат</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1lK4ak_zBCAe1TrF-u2MnT2FklofmYv8n/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.11">
                                            <h1   className="h1">Положення про систему внутрішнього забезпечення якості вищої освіти</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1BEV-c6cBofzqxtYqfEYGZov_Lo7WJbbk/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.12">
                                            <h1   className="h1">Про порядок планування, підготовки та затвердження навчально-методичного забезпечення</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/182JWLwI2QQoPqNTGfvYjhz3xgcv2bM2bqd7wL9Q3bhA/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="1.13">
                                            <h1   className="h1">Положення про видачу диплома з відзнакою</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/0B_UQxpdvE81edzNmY3pBMm1lNm8/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                    </>
                                    <>
                                        <Tab.Pane eventKey="2.1">
                                            <h1   className="h1">Статут Черкаського державного технологічного університету (нова редакція)</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/0Bw-70Jz_vRdkdDdnQW43TF9NSlU/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2.2">
                                            <h1   className="h1">Правила внутрішнього розпорядку</h1>
                                            <hr />
                                            <iframe src="https://drive.google.com/file/d/1Vj86x-lrUwj-MWsndcWuaqLTh2ex-NcK/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2.3">
                                            <h1   className="h1">Стратегія розвитку Черкаського державного технологічного університету на 2019–2024 рр.</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1RTjpW1FV1zj-trSAywWbSfiHkMSKJWry/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2.4">
                                            <h1   className="h1">Колективний договір між адміністрацією і трудовим колективом Черкаського державного технологічного університету на 2020-2022 роки</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/11E91XUe_ll2FSYlcx7km3tYfYEkXIOZn/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                    </>
                                    <>
                                        <Tab.Pane eventKey="3.1">
                                            <h1   className="h1">Положення про науковий гурток здобувачів вищої освіти</h1>
                                            <hr />
                                            <iframe src="https://docs.google.com/file/d/1ctXPssi7IPFtBYW0BXeo34Agq4tVZHI7/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3.2">
                                            <h1   className="h1">Положення Про переведення студентів на вакантні місця державного замовлення у ЧДТУ</h1>
                                            <hr />                                            
                                            <iframe src="https://docs.google.com/file/d/0B_UQxpdvE81eTjM2QkNySXI1LVFDSUZ2aFJEUnd3T011WnpJ/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3.3">
                                            <h1   className="h1">Положення Про порядок обрання за конкурсом на заміщення вакантних посад науково-педагогічних працівників </h1>
                                            <hr />
                                            <iframe src="https://drive.google.com/file/d/14sq0p4oT11zX5MUNRnA6T4ovZVnYBTFJ/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3.4">
                                            <h1   className="h1">Положення про студентське самоврядування</h1>
                                            <hr />
                                            <iframe src="https://drive.google.com/file/d/0B9liSQ0oKS8XUm5XR2IzaWxtTjhreGh3LUFlRU11aW9mS0hr/preview" className="w-100" height="800" frameborder="0"/>
                                        </Tab.Pane>
                                    </>
                                    <>
                                        <Tab.Pane eventKey="third">
                                            <h1   className="h1">Положення про кафедру</h1>
                                            <hr />
                                            <iframe src="https://drive.google.com/file/d/1pR9YxG5eTSSUAZIiwrxc5nVH8v1qrcep/preview" className="w-100" height="500" frameborder="0" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second.1">
                                            <h1   className="h1">Посадова інструкція старшого викладача</h1>
                                            <hr />
                                            <iframe src="https://drive.google.com/file/d/1FNSEr4Wx6tTIrym4VJCCpOuIVkcVBFCR/preview" className="w-100" height="500" frameborder="0" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second.2">
                                            <h1   className="h1">Посадова інструкція доцента</h1>
                                            <hr />
                                            <iframe src="https://drive.google.com/file/d/1LHcElR-pBoFrpJpnyRoVB_C3cresC4sc/preview" className="w-100" height="500" frameborder="0" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second.3">
                                            <h1   className="h1">Посадова інструкція завідуючого кафедрою</h1>
                                            <hr />
                                            <iframe src="https://drive.google.com/file/d/1TCxX5eAqPUtWpnB-X6zW49BAmIWKS99T/preview" className="w-100" height="500" frameborder="0" />
                                        </Tab.Pane>
                                    </>
                                </Tab.Content>
                            </Col>
                        </Row>

                    </Tab.Container> <hr />
                </Container>
                
            </div>
        )
    }
}
