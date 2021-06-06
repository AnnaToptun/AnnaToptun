
import React, { Component } from 'react'
import { Card, CardDeck, Form } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'
import logo1 from '../Components/logo1.png'

export default class Home extends Component {
    constructor(props) {
        super(props) //функция вызывающая родительский конструктор ОБЯЗАТЕЛЬНО

        this.state = {
            name: "",
            namenews:"",
            news: "",
            submit: "",
            counter: 0,
            items: [],
            img: {logo1}
        }
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputNameNews = this.handleInputNameNews.bind(this);   
        this.handleInputNews = this.handleInputNews.bind(this);
        this.handleInput = this.handleInput.bind(this);        


        this.handleSubmit = this.handleSubmit.bind(this);
        this.counter = this.counter.bind(this);
    }
    counter(){
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }

    handleInput(event) {

        this.setState(({
            img: event.target.value
        }));

    }
    handleInputName(event) {

        this.setState(({
            name: event.target.value
        }));

    }
    handleInputNameNews(event) {

        this.setState(({
            namenews: event.target.value
        }));

    }
    handleInputNews(event) {

        this.setState(({
            news: event.target.value
        }));

    }
    
    handleSubmit(event) {
        event.preventDefault();// предотвратить обновление страницы
        this.setState({
            submit: this.state.input,  

            items: [...this.state.items, this.state.input ],
            
        });
        
    }
    render() {
        
        return ( 
            <div>
                <CarouselBox/>
                <Form method="post"  className="text-center" encType='multipart/form-data' onSubmit={this.handleSubmit}>
                    <label className="text-center"> Please write your name <br />
                        <h1><input 
                            type="text" 
                            name="name" 
                            
                            onChange={this.handleInputName}  /></h1>
                    </label>
                    <label className="text-center"> Please write Name your news <br />
                        <h1><input 
                                type="phone" 
                                name="newsname" 
                              
                                onChange={this.handleInputNameNews}  />
                        </h1>
                    </label> <br />

                    <label className="text-center"> Please write your news <br />
                        <textarea name="textnews" id="news" cols="80" rows="2" onChange={this.handleInputNews}></textarea><br />
                        
                    </label> <hr />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </Form>

                <ul>
                    {this.state.items.map((item,index)=>(
                        <li key={index}> {item} <br />
                            <CardDeck border="dark" className='m-3'>
                                <Card className="w-50" >
                                    
                                    <Card.Body className="d-block">
                                        <Card.Title> <h1>{this.state.namenews}</h1></Card.Title>
                                        <Card.Text>
                                            <h2>#:{index+1}, User: {this.state.name}</h2>
                                            <h4>{this.state.news}</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            
                        </li>
                    ))} 
                </ul>
            </div>
        )
    }
}