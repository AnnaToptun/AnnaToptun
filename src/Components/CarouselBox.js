import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import chdtu from '../assecs/chdtu.jpg';
import fetr from '../assecs/fetr.jpg';
import pmkt from '../assecs/pmkt.jpg';
import style from '../style.css'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item>
                    <img 
                        src={chdtu} 
                        className='img-carousel'
                        alt="foto CHDTU" 
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img 
                        src={fetr} 
                        className='img-carousel'
                        alt="foto CHDTU" 
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img 
                        src={pmkt} 
                        className='img-carousel'
                        alt="foto CHDTU" 
                    />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item> 
            </Carousel>
        )
    }
}
