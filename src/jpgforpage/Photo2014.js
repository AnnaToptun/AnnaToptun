import React, { Component } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import thirth from '../jpgforpage/2014/thirth.jpg'
import four from '../jpgforpage/2014/four.jpg'
import second from '../jpgforpage/2014/second.jpg'
import two from '../jpgforpage/2014/two.jpg'
import one from '../jpgforpage/2014/one.jpg'

export default class Photo2014 extends Component {
    render() {
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            src={one} 
                            className='img-carousel-1'
                            alt="Photo2014"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={two} 
                            className='img-carousel-1'
                            alt="Photo2014"
                        />
                    </Carousel.Item>
                   
                    <Carousel.Item>
                        <img 
                            src={second} 
                            className='img-carousel-1'
                            alt="Photo2014"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={four} 
                            className='img-carousel-1'
                            alt="Photo2014"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={thirth} 
                            className='img-carousel-1'
                            alt="Photo2014"
                        />
                    </Carousel.Item>
                   
                </Carousel> <hr />
            </Container>
        )
    }
}
