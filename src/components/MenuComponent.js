import React, { Component } from 'react';
import { Media, Col, Row, Container } from 'reactstrap';
import img1 from '../images/pexels-photo.jpg'



class MenuComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bg: img1
        }
    }

    render() {
        return (
            <React.Fragment>
                
                <Container id='start' style={{ backgroundImage: `url(${img1})`, border: 'black solid' }} fluid className='nr m-0'>
                    <Row className=' p-3  text-light ' >
                        <Col className='shadow m-1'>
                            <Media className='mt-1'>
                                <Media left top href="#">
                                    <Media className='p-2' object src={require('../images/fixed.jpeg')} style={{ width: 200, borderRadius: '25%' }} alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        Half & Half
                                    </Media>$3.50
                                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                                </Media>
                            </Media>
                        </Col>
                        <Col className='shadow m-1'>
                            <Media className="mt-1">
                                <Media left middle href="#">
                                    <Media className='p-2' object src={require('../images/fixed.jpeg')} style={{ width: 200, borderRadius: '25%' }} alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        Frapps $4.90
                                    </Media>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                                </Media>
                            </Media>
                        </Col>
                        <Col className='shadow m-1'>
                            <Media className="mt-1">
                                <Media left bottom href="#">
                                    <Media className='p-2' src={require('../images/fixed.jpeg')} style={{ width: 200, borderRadius: '25%' }} alt="Generic placeholder image" />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        Danish $6.25
                             </Media>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                        </Media>
                            </Media>
                        </Col>
                    </Row>
                    <Row className=' p-3  text-light '>
                            <Col className='shadow m-1'>
                            
                                <Media className='mt-1'>
                                    <Media left top href="#">
                                        <Media className='p-2' object src={require('../images/fixed.jpeg')} style={{ width: 200, borderRadius: '25%' }} alt="Generic placeholder image" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Espresso $3.20
                                        </Media>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                                    </Media>

                                </Media>
                            
                            </Col>
                            <Col className='shadow m-1'>
                                <Media className="mt-1">
                                    <Media left middle href="#">
                                        <Media className='p-2' object src={require('../images/fixed.jpeg')} style={{ width: 200, borderRadius: '25%' }} alt="Generic placeholder image" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Cappuccino $5.75
                                    </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                                </Media>
                                </Media>
                            </Col>
                            <Col className='shadow m-1'>
                                <Media className="mt-1">
                                    <Media left bottom href="#">
                                        <Media className='p-2' src={require('../images/fixed.jpeg')} style={{ width: 200, borderRadius: '25%' }} alt="Generic placeholder image" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                             Coffee $4.95
                             </Media>
                                                   Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                        </Media>
                                </Media>
                            </Col>
                        </Row>
                    
                </Container>
            </React.Fragment>
        )
    }

}





export default MenuComponent;