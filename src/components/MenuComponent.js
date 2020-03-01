import React, { Component } from 'react';
import { Media, Col, Row, Container } from 'reactstrap';
import img1 from '../images/IMG3.jpg'



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
                
                <Container id='start' style={{ backgroundImage: `url(${img1})`, border: 'black solid', padding: 40 }} fluid className='nr m-0'>
                    <Row className=' p-3  text-light ' >
                        <Col xs={12} md={4} className='shadow m-1 '>
                            <Media className='mt-1'>
                                
                                <Media body>
                                    <Media heading>
                                       <text>Half & Half  $3.50</text> 
                                    </Media>
                                           Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                                </Media>
                            </Media>
                        </Col>
                        <Col className='shadow m-1'>
                            <Media className="mt-1">
                                
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
                        <Col xs={12}  md={4} className='shadow m-1'>
                            
                                <Media className='mt-1'>
                                    
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