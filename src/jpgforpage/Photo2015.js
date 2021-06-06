import React, { Component } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import IMG_4711 from '../jpgforpage/2015/IMG_4711.JPG'
import IMG_4658 from '../jpgforpage/2015/IMG_4658.JPG'
import IMG_4649 from '../jpgforpage/2015/IMG_4649.JPG'
import IMG_4632 from '../jpgforpage/2015/IMG_4632.JPG'
import IMG_4669 from '../jpgforpage/2015/IMG_4669.JPG'
import IMG_4689 from '../jpgforpage/2015/IMG_4689.JPG'
import IMG_4737 from '../jpgforpage/2015/IMG_4737.JPG'

export default class Photo2015 extends Component {
    render() {
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            src={IMG_4711} 
                            className='img-carousel-1'
                            alt="Photo2015"
                        />
                        <Carousel.Caption>
                            <p>Виставка в Києві</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_4658} 
                            className='img-carousel-1'
                            alt="Photo2015"
                        />
                        <Carousel.Caption>
                            <p>Виставка в Києві</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_4649} 
                            className='img-carousel-1'
                            alt="Photo2015"
                        />
                        <Carousel.Caption>
                            <p>Виставка в Києві</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_4632}
                            className='img-carousel-1'
                            alt="Photo2015"
                        />
                        <Carousel.Caption>
                            <p>Виставка в Києві</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_4669} 
                            className='img-carousel-1'
                            alt="Photo2015"
                        />
                        <Carousel.Caption>
                            <p>Виставка в Києві</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_4689} 
                            className='img-carousel-1'
                            alt="Photo2015"
                        />
                        <Carousel.Caption>
                            <p>Виставка в Києві</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_4737} 
                            className='img-carousel-1'
                            alt="Photo2015"
                        />
                        <Carousel.Caption>
                            <p>Виставка в Києві</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                   
                </Carousel> <hr />
            </Container>
           )
       }
   }
   
         