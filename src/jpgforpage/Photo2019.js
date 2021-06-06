import React, { Component } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import img11 from '../jpgforpage/2019/img11.JPG'
import img10 from '../jpgforpage/2019/img10.JPG'
import DSCN8102 from '../jpgforpage/2019/DSCN8102.JPG'
import IMG_1248 from '../jpgforpage/2019/IMG_1248.JPG'
import IMG_2352 from '../jpgforpage/2019/IMG_2352.jpg'
import IMG_8986 from '../jpgforpage/2019/IMG_8986.jpg'
import IMG_20191001_122946 from '../jpgforpage/2019/IMG_20191001_122946.jpg'
import IMG_b87ec0 from '../jpgforpage/2019/IMG_b87ec0.jpg'
import SPF_2036 from '../jpgforpage/2019/SPF_2036.jpg'


export default class Photo2019 extends Component {
    render() {
        return (
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            src={SPF_2036}
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_b87ec0} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_20191001_122946} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_8986} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_2352} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={IMG_1248} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={DSCN8102} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={img11} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={img10} 
                            className='img-carousel-1'
                            alt="Photo2019"
                        />
                        <Carousel.Caption>
                            <p>Фотографії 2019</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> <hr />
            </Container>
        )
    }
}
   
         