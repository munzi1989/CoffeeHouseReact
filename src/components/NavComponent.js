import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';





class Navigation extends Component {
  ;
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false

    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar className='Navbar, nav' sticky='top' dark expand="md">
        <NavbarBrand href="#" >
          <img
            src={require('../images/logo.jpg')}
            width='30'
            height='30'
            alt='Logo'
            style={{ borderRadius: 30}}
            
          />
        </NavbarBrand>
        <NavbarBrand href="#">Munzi Mocha</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#start">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#pics">Photos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Location
                </DropdownItem>
                <DropdownItem>
                  Hours
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <a href='https://www.facebook.com/ ' style={{ padding: 15 }}><FontAwesome.FaFacebook color='white' size={30} /></a> 
          <a href='https://www.twitter.com' style={{ padding: 15 }}><FontAwesome.FaTwitter color='white' size={30}/></a>
          <a href='https://www.instagram.com' style={{ padding: 15 }}><FontAwesome.FaInstagram color='white' size={30}/></a>
          
          
        </Collapse>

      </Navbar>


    )
  }

}

export default Navigation;