import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardBody, CardImg, CardText, CardTitle, Button, CardSubtitle, Row, Col, Container } from 'reactstrap';
import img1 from '../images/headerfix1.jpg';
import img2 from '../images/mike-kenneally-tNALoIZhqVM-unsplash.jpg';
import img3 from '../images/headerfix3.jpg';
import Background from '../images/shop.jpg';



class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img1: img1,
            img2: img2,
            img3: img3
        };
    }

    render() {
        return (
            <div style={{backgroundImage: `url(${Background})`}}>
            <Container >
                <Row>
                    <Col>
                            <Card style={{ width: '18rem' }}>
                            <CardImg top width="100%" src={this.state.img1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <CardImg top width="100%" src={this.state.img2} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <CardImg top width="100%" src={this.state.img3} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Cards;
