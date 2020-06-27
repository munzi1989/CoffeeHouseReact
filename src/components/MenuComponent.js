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
                                           A local favorite. Half fresh-brewed coffee and half locally-sourced cream.
                                </Media>
                            </Media>
                        </Col>
                        <Col className='shadow m-1'>
                            <Media className="mt-1">
                                
                                <Media body>
                                    <Media heading>
                                        Frapps $4.90
                                    </Media>
                                    What's better on a hot day? Blended iced coffee with an ssortmetn of flavors!
                                </Media>
                            </Media>
                        </Col>
                        <Col className='shadow m-1'>
                            <Media className="mt-1">
                                
                                <Media body>
                                    <Media heading>
                                        Danish $6.25
                             </Media>
                                    Made fresh daily! Try our new cheesecake danish or our dark chocolate topped danish.
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
                                        A simple yet delicious classic. Now in small or large sizes.
                                    </Media>

                                </Media>
                            
                            </Col>
                            <Col className='shadow m-1'>
                                <Media className="mt-1">
                                   
                                    <Media body>
                                        <Media heading>
                                            Cappuccino $5.75
                                    </Media>
                                           Made with steamed milk (microfoam), it goes great with scones!
                                </Media>
                                </Media>
                            </Col>
                            <Col className='shadow m-1'>
                                <Media className="mt-1">
                                    
                                    <Media body>
                                        <Media heading>
                                             Coffee $4.95
                             </Media>
                                Straight up hot coffee. Choose from several flavors, grinds and roasts! 
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