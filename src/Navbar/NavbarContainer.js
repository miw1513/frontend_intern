import React, { Component } from 'react'
// import logo from './logo.svg'
import Logo from './../logo.svg'
import './../App.css'
import { Button, FormControl, Form, Grid, Col, Row, Image, Thumbnail, Tabs, Tab } from 'react-bootstrap';
class NavbarContainer extends Component {
  render() {
    return (
    
      <div style={{color: 'pink', fontSize: 20}}>
       <Grid>
    <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}> <Image width={92} height={92} src="https://image.shutterstock.com/z/stock-vector-geek-gorilla-logo-cool-gorilla-head-vector-nerdy-monkey-logo-691672750.jpg" circle /></Col>
      <Col xsHidden md={4}></Col>
  </Grid>

  <Grid>
    <Row className="show-grid">

    <Col sm={6} md={3}>HOMEPAGE</Col>
    <Col sm={6} md={3}>PRODUCT</Col>
    <Col sm={6} md={3}>ABOUT</Col>
    <Col sm={6} md={3}>CONTACT</Col>

    </Row>
  </Grid>
      </div>
    );
  }
}

export default NavbarContainer
