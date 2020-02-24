import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';
import bold from 'react-icons/lib/fa/bold';

function Footer() {

    return (
        <Container fluid className='pad' style={{border: 'solid black', borderTop: null}}>
            <Row style={{alignItems: 'center'}}>
                <Col>
                    <h6><blockquote className='font'>"Coffee keeps people from killing each other" - Unkown</blockquote></h6>
                </Col>
                <Col>
                    <h6 style={{marginBottom: 0, fontStyle:bold}}>Contact:</h6>
                   <h6><FontAwesome.FaPhone /> 1-816-555-1234 <br/>
                    <FontAwesome.FaMapMarker/> 123 Rainbow Rd
                    Kansas City, MO
                    64155
                    </h6>
                </Col>
                <Col >
                    <a href='https://www.facebook.com/ ' style={{ padding: 15}}><FontAwesome.FaFacebook color='black' size={30} /></a>
                        <a href='https://www.twitter.com' style={{ padding: 15 }}><FontAwesome.FaTwitter color='black' size={30} /></a>
                        <a href='https://www.instagram.com' style={{ padding: 15 }}><FontAwesome.FaInstagram color='black' size={30} /></a>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;