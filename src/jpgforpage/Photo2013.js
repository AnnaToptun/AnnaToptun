import React, { Component } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import DSCN2186 from '../jpgforpage/2013/DSCN2186.jpg'
import DSCN2202 from '../jpgforpage/2013/DSCN2202.jpg'
import y_3d3e2424 from '../jpgforpage/2013/y_3d3e2424.jpg'
import y_a0cc3590 from '../jpgforpage/2013/y_a0cc3590.jpg'
export default class Photo2013 extends Component {
    render() {
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            src={DSCN2186}
                            className='img-carousel-1'
                            alt="Photo2010-1"
                        />
                        <Carousel.Caption>
                            <p>Інші</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={DSCN2202} 
                            className='img-carousel-1'
                            alt="Photo2010-2"
                        />
                        <Carousel.Caption>
                            <p>Інші</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img 
                            src={y_3d3e2424} 
                            className='img-carousel-1'
                            alt="Photo2011-4"
                        />
                        <Carousel.Caption>
                            <p>Інші</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={y_a0cc3590}
                            className='img-carousel-1'
                            alt="Photo2011-5"
                        />
                        <Carousel.Caption>
                            <p>Інші</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                   
                </Carousel> <hr />
            </Container>
        )
    }
}
