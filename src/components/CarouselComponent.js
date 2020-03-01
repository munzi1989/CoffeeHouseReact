import React, { Component } from 'react';
import slide1 from '../images/car2 700x463.png';
import slide2 from '../images/car3 600x466.png';
import slide3 from '../images/coffee 700x459.png';
import img1 from '../images/img2.jpg';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row } from 'reactstrap';



class CarouselComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bg: img1,
            slide1: slide1,
            slide2: slide2,
            slide3: slide3
        }
    }

    render() {
        return (
            <Container id='pics' className='nr hidden-sm visible-lg-* visible-md-*' style={{ backgroundImage: `url(${this.state.bg})`, padding: '10rem' }} fluid >
                <div className='special' style={{borderRadius: '50%'}}>
                <Row className='mainFont' style={{padding: '5rem', color: 'white', fontSize: 40 }}>
                    <p>We love to showcase our specialty items here. Stay vigilant! They only last 1 week before we roll out new and exciting items!</p>
                </Row>
                </div>
                <Carousel >
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={`${this.state.slide1}`}
                            alt="First slide"
                        />
                        <Carousel.Caption className='.visible-lg-*' style={{ marginBottom: 350 }}>
                            <div className='special' style={{ padding: 30, borderRadius: 25 }}>
                                <div style={{ opacity: 1, color: 'white' }}>
                                    <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.state.slide2}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{ marginBottom: 350 }}>
                            <div className='special' style={{ padding: 30, borderRadius: 25 }}>
                                <div style={{ opacity: 1, color: 'white' }}>
                                    <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.state.slide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{ marginBottom: 350 }}>
                            <div className='special' style={{ padding: 30, borderRadius: 25 }}>
                                <div style={{ opacity: 1, color: 'white' }}>
                                    <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Container>
        )
    }
}



export default CarouselComponent;