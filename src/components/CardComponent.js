import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardImg, CardText, Button, Row, Col, Container, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import img2 from '../images/coffee 700x459.png';
import img3 from '../images/car2 700x463.png';
import background from '../images/IMG4.jpg';



class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bg: background,
            img2: img2,
            img3: img3,
            isOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.submitFunction = this.submitFunction.bind(this);
    };

    toggleModal = () => this.setState(state => ({ isOpen: !state.isOpen }));

    

    submitFunction = (event) => {
        event.preventDefault();
        alert('Your contact info has been submitted!');
        this.toggleModal();

    }

    render() {

        return (
            <React.Fragment>
                <Modal toggle={this.toggleModal} isOpen={this.state.isOpen}>
                    <ModalHeader toggle={this.toggleModal}>Contact Information</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitFunction} >
                            <FormGroup>
                                <Label for='firstName'>First Name</Label>
                                <Col>
                                    <Input type='text' name='firstName' id='firstName' required />
                                </Col>
                                <Label for='lastName'>Last Name</Label>
                                <Col>
                                    <Input id='lastName' type='text' required />
                                </Col>
                                <Label for='phone'>Phone Number</Label>
                                <Col>
                                    <Input id='phone' type='text' />
                                </Col>
                                <Label for='email'>Email</Label>
                                <Col>
                                    <Input id='email' type='email' required />
                                </Col>
                                <Col>
                                    <br />
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                        Prefer to be contacted by email
                                </Label>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                        Prefer to be contacted by phone
                                </Label>
                                </Col>
                                <br />
                                <Button type='submit' color='secondary'>Sign Up</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>


                <Container className='nr' style={{ backgroundImage: `url(${this.state.bg})`, padding: '20px', justifyContent: 'center', border: 'solid black' }} fluid>
                    <Row className='special'>
                        <Col className='mainFont' style={{color: 'white', fontSize: 40 }}>
                        <p>We've been serving Kansas City delicious coffee for over 9 years! We specialize in exotic coffees from Africa, Southeast Asia and the middle east, along with scrumptious home-made danish. Make us part of your morning and visit us soon! </p>
                        </Col>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Col xs='auto' className='m-5'>
                            <Card style={{ width: '18rem', padding: '5px', border: 'black solid' }}>
                                <CardImg top width="100%" src={this.state.img2} alt="Card image cap" />
                                <CardBody>
                                    <CardText>From Columbian to Nicaraguan, we have an assortment of delicious flavors!</CardText>
                                    <Button color='secondary' href="https://www.coffeeam.com/flavored-coffee.html" target="_blank">Coffee Flavors</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='auto' className='m-5' >
                            <Card  style={{ width: '18rem', padding: '5px', border: 'black solid'}}>
                                <CardImg top width="100%" src={this.state.img3} alt="Card image cap" />
                                <CardBody>
                                    <CardText>Join our weekly newsletter to stay informed! Click below and enter your email address!</CardText>
                                    <Button color='secondary' onClick={this.toggleModal}>Newsletter</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}


export default Cards;
